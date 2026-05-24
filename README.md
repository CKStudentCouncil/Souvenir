# 建中校慶紀念品訂購系統

Vue 3 + Quasar Framework SPA，後端使用 Firebase (Auth, Firestore)。

## 功能概要

- **訪客購物**：無需登入即可瀏覽商品、使用本機購物車結帳
- **管理員**：透過 `/admin/login` 以 Google 登入，管理訂單 (`/admin`) 與帳號 (`/admin/account`)
- **購物車**：`localStorage` 持久化；結帳前填寫姓名、Email、電話、學校等資料
- **後台搜尋**：訂單列表支援依客戶姓名或 Email 防抖搜尋

## 開發

```bash
npm install
npm run dev
```

## 建置與部署

```bash
npm run build
```

產出目錄：`dist/spa`（已對應 `firebase.json` hosting）。

## 技術棧

- Quasar 2 + Vue 3 + Vue Router + Pinia
- Firebase 12
- xlsx / file-saver（後台匯出）
