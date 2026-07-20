<template>
  <div
    v-if="!canAccessAdmin"
    class="state"
  >
    <h2>權限不足</h2>
    <button
      type="button"
      class="btn"
      @click="$router.push('/')"
    >
      回到首頁
    </button>
  </div>

  <div
    v-else-if="loading"
    class="state"
  >
    載入中...
  </div>

  <div
    v-else
    class="account-page"
  >
    <div class="header-row">
      <h1>帳號管理</h1>
      <button
        type="button"
        class="btn-outline"
        @click="$router.push('/admin')"
      >
        返回後台
      </button>
    </div>

    <div class="stats">
      <div class="stat-card"><strong class="num">{{ users.length }}</strong><span>總使用者</span></div>
      <div class="stat-card"><strong class="num">{{ users.filter((u) => u.role === 'admin').length }}</strong><span>管理員</span></div>
    </div>

    <div class="filters panel">
      <input
        v-model="searchTerm"
        type="search"
        placeholder="搜尋使用者 (Email 或姓名)"
      >
      <select v-model="filterRole">
        <option value="all">全部角色</option>
        <option value="admin">管理員</option>
        <option value="user">一般用戶</option>
      </select>
    </div>

    <div class="panel table-wrap">
      <table>
        <thead>
          <tr>
            <th>Email</th>
            <th>姓名</th>
            <th>角色</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="u in filteredUsers"
            :key="u.id"
          >
            <td class="mono">{{ u.email }}</td>
            <td>{{ u.name || u.displayName || '未設定' }}</td>
            <td>{{ u.role === 'admin' ? '管理員' : '一般用戶' }}</td>
            <td>
              <button
                type="button"
                class="btn-sm"
                @click="openModal(u)"
              >
                管理
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <p v-if="filteredUsers.length === 0" class="empty">找不到符合條件的使用者</p>
    </div>

    <div
      v-if="showModal && selectedUser"
      class="modal-overlay"
      @click.self="closeModal"
    >
      <div class="modal">
        <h2>使用者管理</h2>
        <p><strong>Email：</strong><span class="mono">{{ selectedUser.email }}</span></p>
        <p><strong>姓名：</strong>{{ selectedUser.name || selectedUser.displayName || '未設定' }}</p>
        <p><strong>角色：</strong>{{ selectedUser.role === 'admin' ? '管理員' : '一般用戶' }}</p>
        <button
          type="button"
          class="btn"
          :disabled="selectedUser.id === auth.user?.uid && selectedUser.role === 'admin'"
          @click="toggleAdminRole(selectedUser.id)"
        >
          {{ selectedUser.role === 'admin' ? '移除管理員權限' : '授予管理員權限' }}
        </button>
        <button
          type="button"
          class="btn danger"
          :disabled="selectedUser.id === auth.user?.uid || selectedUser.role === 'admin'"
          @click="deleteUser(selectedUser.id)"
        >
          刪除使用者
        </button>
        <button
          type="button"
          class="btn-outline"
          @click="closeModal"
        >
          取消
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

import { collection, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore'
import { db } from 'src/boot/firebase'
import { useAuthStore } from 'src/stores/auth'
import { useToastStore } from 'src/stores/toast'
import { USE_MOCK_ORDERS, MOCK_ALLOW_ADMIN_WITHOUT_AUTH } from 'src/config/app'

const auth = useAuthStore()
const canAccessAdmin = computed(
  () => auth.isAdmin || (USE_MOCK_ORDERS && MOCK_ALLOW_ADMIN_WITHOUT_AUTH)
)
const toast = useToastStore()

const users = ref([])
const loading = ref(true)
const searchTerm = ref('')
const filterRole = ref('all')
const selectedUser = ref(null)
const showModal = ref(false)

const filteredUsers = computed(() =>
  users.value.filter((user) => {
    const q = searchTerm.value.toLowerCase()
    const matchesSearch =
      !q ||
      user.email?.toLowerCase().includes(q) ||
      user.name?.toLowerCase().includes(q) ||
      user.displayName?.toLowerCase().includes(q)
    const matchesRole = filterRole.value === 'all' || user.role === filterRole.value
    return matchesSearch && matchesRole
  })
)

onMounted(async () => {
  if (!canAccessAdmin.value) {
    loading.value = false
    return
  }
  try {
    const snapshot = await getDocs(collection(db, 'users'))
    users.value = snapshot.docs.map((d) => ({
      id: d.id,
      ...d.data(),
      role: d.data().role || 'user'
    }))
  } catch {
    toast.show('獲取使用者資料失敗')
  } finally {
    loading.value = false
  }
})

function openModal(user) {
  selectedUser.value = user
  showModal.value = true
}

function closeModal() {
  showModal.value = false
  selectedUser.value = null
}

async function toggleAdminRole(userId) {
  const user = users.value.find((u) => u.id === userId)
  if (!user) return
  if (userId === auth.user?.uid && user.role === 'admin') {
    toast.show('無法移除自己的管理員權限')
    return
  }
  const adminCount = users.value.filter((u) => u.role === 'admin').length
  if (adminCount === 1 && user.role === 'admin') {
    toast.show('至少需要保留一位管理員')
    return
  }
  const newRole = user.role === 'admin' ? 'user' : 'admin'
  try {
    await updateDoc(doc(db, 'users', userId), {
      role: newRole,
      updatedAt: new Date().toISOString()
    })
    users.value = users.value.map((u) => (u.id === userId ? { ...u, role: newRole } : u))
    if (selectedUser.value?.id === userId) {
      selectedUser.value = { ...selectedUser.value, role: newRole }
    }
    toast.show(`已${newRole === 'admin' ? '授予' : '移除'}管理員權限`)
  } catch {
    toast.show('更新權限失敗')
  }
}

async function deleteUser(userId) {
  if (!window.confirm('確定要刪除此使用者嗎？')) return
  try {
    await deleteDoc(doc(db, 'users', userId))
    users.value = users.value.filter((u) => u.id !== userId)
    closeModal()
    toast.show('使用者已刪除')
  } catch {
    toast.show('刪除失敗')
  }
}
</script>

<style scoped>
/*
  排版與視覺統一原則（與 SuccessPage / OrderDetailPage 等共用同一套邏輯）：
  1. 字體堆疊涵蓋中英文，避免中文落回系統預設字體造成字重不一致。
  2. 中文行距統一到 1.6 左右。
  3. 人數統計這類數字用 .num 包起來套 tabular-nums；Email、UID 這類純英數字串
     用 .mono 包起來換成等寬字體，方便使用者核對、複製。
  4. 視覺語言統一改成黑白極簡：卡片改用細邊框（#e5e5e7）取代彩色陰影，按鈕改為
     膠囊造型、純黑實心／描邊兩種樣式，取代原本的漸層彩色按鈕，跟 SuccessPage、
     OrderDetailPage 保持一致。
*/

.account-page {
  padding: 40px 20px;
  max-width: 1200px;
  margin: 0 auto;
  font-family: -apple-system, BlinkMacSystemFont, 'PingFang TC', 'Noto Sans TC',
    'Microsoft JhengHei', 'Helvetica Neue', Arial, sans-serif;
  color: #1d1d1f;
}

.num {
  font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Noto Sans TC', Arial, sans-serif;
  font-variant-numeric: tabular-nums;
  letter-spacing: 0;
}

.mono {
  font-family: 'SF Mono', 'Menlo', 'Consolas', ui-monospace, monospace;
  letter-spacing: 0;
  font-size: .95em;
  word-break: break-all;
}

.state {
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  font-family: -apple-system, BlinkMacSystemFont, 'PingFang TC', 'Noto Sans TC',
    'Microsoft JhengHei', 'Helvetica Neue', Arial, sans-serif;
  color: #1d1d1f;
}

.header-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 24px;
}

.header-row h1 {
  margin: 0;
  font-size: clamp(1.8rem, 4vw, 2.4rem);
  line-height: 1.3;
  letter-spacing: -.01em;
  font-weight: 700;
}

.stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 16px;
  margin-bottom: 24px;
}

.stat-card {
  background: #fff;
  padding: 20px;
  border: 1px solid #e5e5e7;
  border-radius: 14px;
  text-align: center;
  line-height: 1.6;
}

.stat-card strong {
  display: block;
  font-size: 2rem;
  color: #1d1d1f;
}

.stat-card span {
  color: #6e6e73;
  font-size: .9rem;
}

.panel {
  background: #fff;
  padding: 20px;
  border: 1px solid #e5e5e7;
  border-radius: 14px;
  margin-bottom: 20px;
}

.filters {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.filters input,
.filters select {
  padding: 12px;
  border: 1px solid #e5e5e7;
  border-radius: 8px;
  font-family: inherit;
  color: #1d1d1f;
}

.filters input {
  flex: 1;
  min-width: 250px;
}

.table-wrap {
  overflow: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
  min-width: 600px;
  line-height: 1.6;
}

th,
td {
  padding: 14px;
  text-align: left;
  border-bottom: 1px solid #e5e5e7;
}

th {
  color: #6e6e73;
  font-size: .85rem;
  font-weight: 700;
}

.empty {
  padding: 16px 0 4px;
  color: #6e6e73;
  text-align: center;
}

.btn,
.btn-sm,
.btn-outline {
  padding: 10px 20px;
  border: none;
  border-radius: 999px;
  font-weight: 600;
  cursor: pointer;
  font-family: inherit;
}

.btn,
.btn-sm {
  background: #1d1d1f;
  color: #fff;
}

.btn:disabled,
.btn-sm:disabled {
  background: #d2d2d7;
  color: #8e8e93;
  cursor: not-allowed;
}

.btn-sm {
  padding: 8px 16px;
  font-size: .9rem;
}

.btn-outline {
  background: #fff;
  color: #1d1d1f;
  border: 1px solid #e5e5e7;
}

.btn.danger {
  background: #d32f2f;
  width: 100%;
  margin-top: 8px;
}

.btn.danger:disabled {
  background: #d2d2d7;
  color: #8e8e93;
}

.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  padding: 20px;
}

.modal {
  background: #fff;
  border-radius: 16px;
  padding: 32px;
  max-width: 500px;
  width: 100%;
  line-height: 1.6;
}

.modal h2 {
  margin: 0 0 16px;
  font-size: 1.4rem;
  font-weight: 700;
}

.modal p {
  margin: 8px 0;
}

.modal .btn,
.modal .btn-outline {
  width: 100%;
  margin-top: 8px;
}
</style>