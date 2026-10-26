<template>
  <div v-if="loading" class="state-screen">
    <p>載入中...</p>
  </div>

  <div v-else ref="pageRoot" class="analytics-page" :class="{ exporting }">
    <div class="page-heading">
      <p class="eyebrow">後台管理</p>
      <div class="heading-row">
        <h1>財務報表</h1>
        <p v-if="exporting" class="live-status">匯出時間　<span class="num">{{ exportStamp }}</span></p>
        <p v-else class="live-status" :class="{ offline: liveError }" role="status">
          <span class="live-dot" aria-hidden="true" />
          <template v-if="liveError">即時連線中斷，請重新整理頁面</template>
          <template v-else>即時更新　<span class="num">{{ formatClock(updatedAt) }}</span></template>
        </p>
      </div>
      <p class="period-note">{{ periodNote }}</p>
    </div>

    <div v-if="!exporting" class="filter-row">
      <label v-if="archives.length" class="compare-select">
        <span>比較</span>
        <select v-model="compareYear">
          <option v-for="item in archives" :key="item.year" :value="item.year">{{ item.year }} 年</option>
          <option :value="null">不比較</option>
        </select>
      </label>

      <div class="segmented" role="group" aria-label="比較範圍">
        <button
          v-for="option in BASIS_OPTIONS"
          :key="option.value"
          type="button"
          :class="{ active: basis === option.value }"
          :aria-pressed="basis === option.value"
          @click="basis = option.value"
        >
          {{ option.label }}
        </button>
      </div>

      <div class="filter-actions">
        <button type="button" class="btn-outline" :disabled="timelineEmpty" @click="exportPdf">
          匯出 PDF
        </button>
        <button
          type="button"
          class="btn-outline"
          :aria-expanded="importOpen"
          @click="importOpen ? closeImport() : (importOpen = true)"
        >
          {{ importOpen ? '收起匯入' : '匯入往年資料' }}
        </button>
      </div>
    </div>

    <div v-if="importOpen && !exporting" class="panel import-panel">
      <h2>匯入往年資料</h2>
      <p class="panel-copy">
        選擇往年匯出的訂單 Excel（.xlsx）。只會上傳圖表需要的欄位：下單時間、學校、年級、商品與金額；
        姓名、電話、Email、班級與座號都不會上傳。
      </p>
      <input class="file-input" type="file" accept=".xlsx,.xls" aria-label="選擇訂單 Excel" @change="onImportFile">

      <div v-if="importSummary" class="import-preview">
        <div class="import-stats">
          <div>
            <span>年度</span>
            <strong class="num">{{ importSummary.year || '—' }}</strong>
          </div>
          <div>
            <span>訂單</span>
            <strong class="num">{{ formatCount(importSummary.orderCount) }} 筆</strong>
          </div>
          <div>
            <span>營收</span>
            <strong class="num">{{ formatCurrency(importSummary.revenue) }}</strong>
          </div>
        </div>
        <div class="import-dates">
          <label>
            <span>開賣日</span>
            <input v-model="importDraft.openDate" type="date">
          </label>
          <label>
            <span>結束日</span>
            <input v-model="importDraft.closeDate" type="date">
          </label>
        </div>
        <p class="panel-copy">開賣日算第 1 天，年度取開賣日的年份。日期已依訂單時間自動帶入，可以修改。</p>
        <p v-if="importSummary.outside" class="import-note">
          有 {{ importSummary.outside }} 筆訂單不在這段期間內，圖表會把它們算在第一天或最後一天。
        </p>
        <p v-if="importSummary.skipped" class="import-note">
          有 {{ importSummary.skipped }} 筆訂單的建立時間無法辨識，不會匯入。
        </p>
        <p v-if="importSummary.replaces && !importSummary.error" class="import-note">
          已經匯入過 {{ importSummary.year }} 年的資料，這次匯入會取代它。
        </p>
        <p v-if="importSummary.error" class="import-error">{{ importSummary.error }}</p>
        <div class="import-actions">
          <button
            type="button"
            class="btn"
            :disabled="importing || !!importSummary.error"
            @click="saveImport"
          >
            {{ importing ? '匯入中...' : '確認匯入' }}
          </button>
          <button type="button" class="btn-outline" :disabled="importing" @click="closeImport">取消</button>
        </div>
      </div>
    </div>

    <div v-else-if="!archives.length && !exporting" class="panel hint-panel">
      <p class="panel-copy">
        還沒有匯入往年資料，目前只顯示今年的數據。按「匯入往年資料」選擇去年的訂單 Excel，就能逐年比較。
      </p>
    </div>

    <div class="report" :class="{ refreshing: archiveLoading }">
      <section class="kpi-grid" aria-label="重點指標">
        <article v-for="kpi in kpis" :key="kpi.key" class="kpi">
          <p class="kpi-label">{{ kpi.label }}</p>
          <p class="kpi-value">{{ kpi.value }}</p>
          <p v-if="hasPrevious" class="kpi-compare">
            <span v-if="kpi.change" class="kpi-change" :class="kpi.change.direction">
              <span aria-hidden="true">{{ ARROWS[kpi.change.direction] }}</span>
              <span class="sr-only">{{ CHANGE_WORDS[kpi.change.direction] }}</span>
              {{ kpi.change.text }}
            </span>
            <span v-if="kpi.progress" class="kpi-change flat">{{ kpi.progress }}</span>
            <span>{{ compareLabel }} {{ kpi.previous }}</span>
          </p>
          <p v-if="kpi.previousFull" class="kpi-note">{{ previous.year }} 年全期 {{ kpi.previousFull }}</p>
          <p v-if="kpi.note" class="kpi-note">{{ kpi.note }}</p>
        </article>
      </section>

      <section class="analytics-section">
        <div class="section-heading">
          <p class="eyebrow">時間與銷售</p>
        </div>
        <div class="stack">
          <ChartCard
            title="累積營收"
            :subtitle="report.sameTime ? `開賣後每天的累積營收，${previous.year} 年只算到同一時間` : '開賣後每天的累積營收'"
            :legend="legend"
            legend-shape="line"
            :table="cumulativeTable"
            :empty="timelineEmpty"
          >
            <LineChart
              :series="cumulativeSeries"
              label="累積營收折線圖"
              :format="formatCurrency"
              :axis-format="formatCompact"
              :x-label="dayTick"
              :tooltip-title="dayTitle"
              :x-step-offset="1"
              area
            />
          </ChartCard>

          <ChartCard
            title="每日表現"
            :subtitle="`每天的${slotMetric.label}`"
            :legend="legend"
            legend-shape="line"
            :table="slotTable"
            :empty="timelineEmpty"
          >
            <template #controls>
              <div class="segmented small" role="group" aria-label="指標">
                <button
                  v-for="metric in METRICS"
                  :key="metric.key"
                  type="button"
                  :class="{ active: slotMetricKey === metric.key }"
                  :aria-pressed="slotMetricKey === metric.key"
                  @click="slotMetricKey = metric.key"
                >
                  {{ metric.label }}
                </button>
              </div>
            </template>
            <LineChart
              :series="slotSeries"
              :label="`${slotMetric.label}折線圖`"
              :format="slotMetric.format"
              :axis-format="slotMetric.axis"
              :x-label="dayTick"
              :tooltip-title="dayTitle"
              :x-step-offset="1"
              :integer="slotMetricKey === 'orders'"
            />
          </ChartCard>

          <ChartCard
            title="下單時段"
            subtitle="各時段的訂單占比（台灣時間）"
            :legend="legend"
            :table="hourTable"
            :empty="isEmptyShares(hourRows)"
          >
            <ColumnChart
              :labels="HOUR_LABELS"
              :series="hourSeries"
              label="各時段訂單占比長條圖"
              :format="formatPercent"
              :axis-format="formatPercentTick"
              :tooltip-title="(hour) => `${hour}:00–${hour}:59`"
            />
          </ChartCard>

          <ChartCard
            title="下單熱力圖"
            :subtitle="`${yearPrefix(rhythmView)}各星期、各時段的訂單占比（台灣時間），可用來安排公告與社群貼文的時間`"
            :table="weekHourTable"
            :empty="weekHourEmpty"
          >
            <template v-if="hasPrevious" #controls>
              <div class="segmented small" role="group" aria-label="熱力圖年度">
                <button
                  v-for="option in yearOptions"
                  :key="option.value"
                  type="button"
                  :class="{ active: rhythmView.side === option.value }"
                  :aria-pressed="rhythmView.side === option.value"
                  @click="rhythmYear = option.value"
                >
                  {{ option.label }}
                </button>
              </div>
            </template>
            <HeatGrid
              :row-labels="WEEKDAY_LABELS"
              :column-labels="HOUR_LABELS"
              :values="weekHourValues"
              :fill="weekHourFill"
              :scale="weekHourScale"
              label="各星期、各時段訂單占比熱力圖"
              :label-width="40"
              thin-columns
              :tooltip-for="weekHourTooltip"
            />
          </ChartCard>
        </div>
      </section>

      <section class="analytics-section">
        <div class="section-heading">
          <p class="eyebrow">身分與銷售</p>
          <div v-if="!exporting" class="segmented small" role="group" aria-label="身分分析指標">
            <button
              v-for="metric in METRICS"
              :key="metric.key"
              type="button"
              :class="{ active: groupMetricKey === metric.key }"
              :aria-pressed="groupMetricKey === metric.key"
              @click="groupMetricKey = metric.key"
            >
              {{ metric.label }}
            </button>
          </div>
        </div>
        <div class="card-grid">
          <ChartCard
            title="各身分"
            :subtitle="`依訂購時選擇的學校／身分，比較${groupMetric.label}`"
            :legend="legend"
            :table="identityTable"
            :empty="!report.identities.length"
          >
            <BarList :rows="identityRows" :colors="colors" :series-labels="seriesLabels" :format="groupMetric.format" />
          </ChartCard>

          <ChartCard
            title="建中學生年級"
            :subtitle="`學校為建國中學的訂單，依班級判斷年級，比較${groupMetric.label}`"
            :legend="legend"
            :table="gradeTable"
            :empty="!report.grades.length"
          >
            <BarList :rows="gradeRows" :colors="colors" :series-labels="seriesLabels" :format="groupMetric.format" />
          </ChartCard>
        </div>
      </section>

      <section class="analytics-section">
        <div class="section-heading">
          <p class="eyebrow">客單價</p>
        </div>
        <div class="card-grid">
          <ChartCard
            title="訂單金額分布"
            subtitle="各金額區間（NT$）的訂單占比"
            :legend="legend"
            :table="valueTable"
            :empty="isEmptyShares(report.values)"
          >
            <BarList :rows="valueRows" :colors="colors" :series-labels="seriesLabels" :format="formatPercent" />
          </ChartCard>

          <ChartCard
            title="每筆訂單件數"
            subtitle="一筆訂單買了幾件商品"
            :legend="legend"
            :table="unitTable"
            :empty="isEmptyShares(report.units)"
          >
            <BarList :rows="unitRows" :colors="colors" :series-labels="seriesLabels" :format="formatPercent" />
          </ChartCard>
        </div>
      </section>

      <section class="analytics-section">
        <div class="section-heading">
          <p class="eyebrow">促銷成效</p>
        </div>
        <div class="card-grid">
          <ChartCard
            title="優惠使用率"
            subtitle="使用各項優惠的訂單占比；折扣率＝折抵金額 ÷ 商品原價合計"
            :legend="legend"
            :table="promotionUsageTable"
            :empty="promotionsEmpty"
          >
            <dl class="card-stats">
              <div v-for="stat in discountStats" :key="stat.label">
                <dt>{{ stat.label }}</dt>
                <dd>
                  <span class="stat-value">{{ stat.value }}</span>
                  <span v-if="hasPrevious" class="stat-compare">{{ compareLabel }} {{ stat.previous }}</span>
                </dd>
              </div>
            </dl>
            <BarList :rows="promotionUsageRows" :colors="colors" :series-labels="seriesLabels" :format="formatPercent" />
          </ChartCard>

          <ChartCard
            title="優惠與客單價"
            :subtitle="`使用與未使用組合優惠的訂單，比較${promotionMetric.label}`"
            :legend="legend"
            :table="promotionValueTable"
            :empty="promotionsEmpty"
          >
            <template #controls>
              <div class="segmented small" role="group" aria-label="優惠比較指標">
                <button
                  v-for="metric in PROMOTION_METRICS"
                  :key="metric.key"
                  type="button"
                  :class="{ active: promotionMetricKey === metric.key }"
                  :aria-pressed="promotionMetricKey === metric.key"
                  @click="promotionMetricKey = metric.key"
                >
                  {{ metric.label }}
                </button>
              </div>
            </template>
            <BarList :rows="promotionValueRows" :colors="colors" :series-labels="seriesLabels" :format="promotionMetric.format" />
          </ChartCard>
        </div>
      </section>

      <section class="analytics-section">
        <div class="section-heading">
          <p class="eyebrow">商品</p>
        </div>
        <div class="stack">
          <ChartCard
            title="熱銷商品"
            :subtitle="`售出件數前 ${TOP_PRODUCTS} 名，各尺寸合併計算`"
            :table="productTable"
            :empty="!report.products.current.length && !(hasPrevious && report.products.previous.length)"
          >
            <div class="product-columns">
              <div v-for="list in productLists" :key="list.label">
                <p class="list-title">
                  <span class="list-swatch" :style="{ background: list.color }" aria-hidden="true" />
                  {{ list.label }}
                </p>
                <BarList
                  v-if="list.rows.length"
                  :rows="list.rows"
                  :colors="[list.color]"
                  :series-labels="[list.label]"
                  :format="formatUnits"
                />
                <p v-else class="empty">尚無資料</p>
              </div>
            </div>
          </ChartCard>

          <ChartCard
            title="尺寸分布"
            subtitle="外套、短踢、帽踢等有尺寸的商品，各尺寸的件數占比"
            :legend="legend"
            :table="sizeTable"
            :empty="!report.sizes.length"
          >
            <ColumnChart
              :labels="report.sizes.map((row) => row.label)"
              :series="sizeSeries"
              label="各尺寸件數占比長條圖"
              :format="formatPercent"
              :axis-format="formatPercentTick"
              :tooltip-title="(i) => `尺寸 ${report.sizes[i].label}`"
            />
          </ChartCard>

          <ChartCard
            title="客群商品偏好"
            :subtitle="`${mixDimension.subtitle}買的商品類別，占該客群售出件數的比例`"
            :legend="mixLegend"
            :table="mixTable"
            :empty="mixEmpty"
          >
            <template #controls>
              <div class="segmented small" role="group" aria-label="客群">
                <button
                  v-for="dimension in MIX_DIMENSIONS"
                  :key="dimension.key"
                  type="button"
                  :class="{ active: mixDimensionKey === dimension.key }"
                  :aria-pressed="mixDimensionKey === dimension.key"
                  @click="mixDimensionKey = dimension.key"
                >
                  {{ dimension.label }}
                </button>
              </div>
            </template>
            <StackedBars
              :rows="mixRows"
              :colors="mixColors"
              label="各客群商品類別占比堆疊長條圖"
              :describe="(segment) => `${formatPercent(segment.share)}（${formatCount(segment.count)} 件）`"
            />
          </ChartCard>
        </div>
      </section>

      <section class="analytics-section">
        <div class="section-heading">
          <p class="eyebrow">購物籃分析</p>
        </div>
        <div class="card-grid">
          <ChartCard
            title="商品滲透率"
            subtitle="含有該類商品的訂單占全部訂單的比例"
            :legend="legend"
            :table="penetrationTable"
            :empty="isEmptyShares(report.basket.products)"
          >
            <BarList :rows="penetrationRows" :colors="colors" :series-labels="seriesLabels" :format="formatPercent" />
          </ChartCard>

          <ChartCard
            title="交叉購買"
            :subtitle="`${yearPrefix(basketView)}${pairMetric.subtitle}`"
            :table="pairTable"
            :empty="pairsEmpty"
          >
            <template #controls>
              <div class="control-row">
                <div class="segmented small" role="group" aria-label="交叉購買指標">
                  <button
                    v-for="metric in PAIR_METRICS"
                    :key="metric.key"
                    type="button"
                    :class="{ active: pairMetricKey === metric.key }"
                    :aria-pressed="pairMetricKey === metric.key"
                    @click="pairMetricKey = metric.key"
                  >
                    {{ metric.label }}
                  </button>
                </div>
                <div v-if="hasPrevious" class="segmented small" role="group" aria-label="交叉購買年度">
                  <button
                    v-for="option in yearOptions"
                    :key="option.value"
                    type="button"
                    :class="{ active: basketView.side === option.value }"
                    :aria-pressed="basketView.side === option.value"
                    @click="basketYear = option.value"
                  >
                    {{ option.label }}
                  </button>
                </div>
              </div>
            </template>
            <HeatGrid
              :row-labels="pairMatrix.labels"
              :column-labels="pairMatrix.labels"
              :values="pairValues"
              :fill="pairFill"
              :scale="pairScale"
              :label="`商品類別${pairMetric.label}熱力圖`"
              :cell-format="pairMetric.cell"
              :cell-height="36"
              :label-width="76"
              :tooltip-for="pairTooltip"
            />
          </ChartCard>
        </div>
      </section>

      <p class="page-footnote">
        日期與時段以台灣時間計算。「同期」只比較往年開賣後同一天、同一時刻為止的資料；「全期」比較往年整段銷售期間。
        開賣前成立的訂單算在第 1 天，往年結束日之後的訂單算在最後一天。平均客單價不含 NT$0 的訂單（例如公關品）。
        下單熱力圖、促銷成效、客群商品偏好與購物籃分析不含公關品訂單。往年匯入的資料沒有記錄滿額贈品，顯示為「—」。
        客群商品偏好與購物籃分析依商品類別計算，往年的商品依名稱歸入今年的類別（例如黑色短踢算短踢、各款鑰匙圈合併）。
        交叉購買的「倍」是提升度：買了左側類別的訂單也買上方類別的比例，除以全部訂單買上方類別的比例；大於 1 倍代表兩者常一起買，適合做成組合或加購。
      </p>
    </div>
  </div>
</template>

<script setup>
import { computed, nextTick, provide, ref } from 'vue'
import { taiwanDate } from 'shared/format'
import BarList from 'src/components/analytics/BarList.vue'
import ChartCard from 'src/components/analytics/ChartCard.vue'
import ColumnChart from 'src/components/analytics/ColumnChart.vue'
import HeatGrid from 'src/components/analytics/HeatGrid.vue'
import LineChart from 'src/components/analytics/LineChart.vue'
import StackedBars from 'src/components/analytics/StackedBars.vue'
import { INK, RAMPS, rampColor } from 'src/components/analytics/chart'
import { useSalesAnalytics } from 'src/composables/useSalesAnalytics'
import { useToastStore } from 'src/stores/toast'
import { downloadElementAsPdf } from 'src/utils/pdf'
import {
  formatCompact,
  formatCount,
  formatCurrency,
  formatDay,
  formatDecimal,
  formatPercent,
  OTHER_CATEGORY,
  WEEKDAY_LABELS
} from 'src/utils/salesAnalytics'

// This year is the accent; the year it's compared with is gray context.
const CURRENT_COLOR = '#06c'
const PREVIOUS_COLOR = '#86868b'
const TOP_PRODUCTS = 8
// Product categories in the mix chart, in catalog order. Neighbours in this
// order stay apart for color-blind readers (checked with the dataviz palette
// validator); 其他 is gray.
const CATEGORY_COLORS = ['#2a78d6', '#eb6834', '#1baf7a', '#eda100', '#e87ba4', '#008300', '#6250d6']
const OTHER_COLOR = '#aeaeb2'

// 全期: the compared year's whole sale. 同期: only up to the same day and time
// of its sale as now.
const BASIS_OPTIONS = [
  { value: 'full', label: '全期' },
  { value: 'same', label: '同期' }
]

// Totals (additive) grow through the sale; averages and rates don't.
const KPI_META = {
  revenue: { label: '營收', format: formatCurrency, additive: true },
  orders: { label: '訂單數', format: formatCount, additive: true },
  aov: { label: '平均客單價', format: formatCurrency, note: '不含 NT$0 訂單' },
  units: { label: '售出件數', format: formatCount, additive: true },
  unitsPerOrder: { label: '平均每單件數', format: formatDecimal },
  comboRate: { label: '組合優惠使用率', format: formatPercent }
}

const METRICS = [
  { key: 'revenue', label: '營收', format: formatCurrency, axis: formatCompact },
  { key: 'orders', label: '訂單數', format: formatCount, axis: formatCount },
  { key: 'aov', label: '平均客單價', format: formatCurrency, axis: formatCompact }
]

const PROMOTION_METRICS = [
  { key: 'aov', label: '平均客單價', format: formatCurrency },
  { key: 'unitsPerOrder', label: '平均每單件數', format: formatDecimal }
]

const PAIR_METRICS = [
  {
    key: 'share',
    label: '同時購買率',
    subtitle: '買了左側類別的訂單中，也買了上方類別的比例',
    cell: (value) => `${Math.round(value * 100)}%`
  },
  {
    key: 'lift',
    label: '提升度',
    subtitle: '同時購買率是上方類別整體購買率的幾倍：藍色高於 1 倍，常一起買；紅色低於 1 倍，很少一起買',
    cell: (value) => value.toFixed(1)
  }
]

const MIX_DIMENSIONS = [
  { key: 'identities', label: '身分', subtitle: '各身分' },
  { key: 'grades', label: '建中年級', subtitle: '建國中學各年級' }
]

const ARROWS = { up: '▲', down: '▼', flat: '－' }
const CHANGE_WORDS = { up: '成長', down: '減少', flat: '' }
const HOUR_LABELS = Array.from({ length: 24 }, (_, hour) => String(hour))

const {
  loading,
  liveError,
  updatedAt,
  basis,
  archives,
  compareYear,
  archiveLoading,
  current,
  previous,
  report,
  importDraft,
  importSummary,
  importing,
  readImportFile,
  cancelImport,
  confirmImport
} = useSalesAnalytics()

const slotMetricKey = ref('revenue')
const groupMetricKey = ref('revenue')
const promotionMetricKey = ref('aov')
const mixDimensionKey = ref('identities')
const pairMetricKey = ref('share')
const slotMetric = computed(() => METRICS.find((metric) => metric.key === slotMetricKey.value))
const groupMetric = computed(() => METRICS.find((metric) => metric.key === groupMetricKey.value))
const promotionMetric = computed(() => PROMOTION_METRICS.find((metric) => metric.key === promotionMetricKey.value))
const mixDimension = computed(() => MIX_DIMENSIONS.find((dimension) => dimension.key === mixDimensionKey.value))
const pairMetric = computed(() => PAIR_METRICS.find((metric) => metric.key === pairMetricKey.value))
// The year each heatmap shows; they show one at a time.
const rhythmYear = ref('current')
const basketYear = ref('current')

const hasPrevious = computed(() => report.value.hasPrevious)
const timeline = computed(() => report.value.timeline)
const seriesLabels = computed(() =>
  hasPrevious.value ? [`${current.value.year} 年`, `${previous.value.year} 年`] : [`${current.value.year} 年`]
)
const colors = computed(() => (hasPrevious.value ? [CURRENT_COLOR, PREVIOUS_COLOR] : [CURRENT_COLOR]))
const legend = computed(() => seriesLabels.value.map((label, i) => ({ label, color: colors.value[i] })))

function formatClock(date, short = false) {
  if (!date) return ''
  return date.toLocaleTimeString('zh-TW', {
    hour12: false,
    timeZone: 'Asia/Taipei',
    hour: '2-digit',
    minute: '2-digit',
    second: short ? undefined : '2-digit'
  })
}

function formatUnits(value) {
  return `${formatCount(value)} 件`
}

function formatPercentTick(value) {
  return `${Math.round(value * 100)}%`
}

function shortDate(isoDate) {
  const [, month, day] = isoDate.split('-').map(Number)
  return `${month}/${day}`
}

const periodNote = computed(() => {
  const cur = current.value
  const parts = [
    cur.elapsed < 0
      ? `今年 ${shortDate(cur.openDate)} 開賣，尚未開始`
      : `今年 ${shortDate(cur.openDate)} 開賣，今天是第 ${cur.days} 天`
  ]
  const prev = previous.value
  if (prev) {
    parts.push(`比較 ${prev.year} 年（${shortDate(prev.openDate)}–${shortDate(prev.closeDate)}，共 ${prev.days} 天）`)
    if (report.value.sameTime) parts.push(`同期：${prev.year} 年只算到開賣第 ${cur.days} 天 ${formatClock(new Date(), true)}`)
  }
  return parts.join('　·　')
})

// ---- KPI tiles ----

// What the compared year's numbers cover.
const compareLabel = computed(() => `${previous.value?.year} 年${report.value.sameTime ? '同期' : '全期'}`)

// Change against the compared year; none when it had nothing to compare with.
function change(value, previousValue) {
  if (value == null || !previousValue) return null
  const ratio = (value - previousValue) / previousValue
  if (Math.abs(ratio) < 0.0005) return { direction: 'flat', text: '持平' }
  return { direction: ratio > 0 ? 'up' : 'down', text: formatPercent(Math.abs(ratio)) }
}

const kpis = computed(() =>
  report.value.kpis.map((kpi) => {
    const meta = KPI_META[kpi.key]
    // A running total against a finished year's total is progress, not a drop.
    const progress = meta.additive && report.value.ongoing && !report.value.sameTime && kpi.previous > 0
    return {
      key: kpi.key,
      label: meta.label,
      note: meta.note,
      value: meta.format(kpi.value),
      previous: meta.format(kpi.previous),
      previousFull: kpi.previousFull == null ? '' : meta.format(kpi.previousFull),
      progress: progress ? `已達 ${formatPercent(kpi.value / kpi.previous)}` : '',
      change: progress ? null : change(kpi.value, kpi.previous)
    }
  })
)

// ---- Time ----

function dayTick(i) {
  return `第${i + 1}天`
}

function dayTitle(i) {
  return `開賣第 ${i + 1} 天`
}

function timeSeries(metric) {
  const series = [{
    key: 'current',
    label: seriesLabels.value[0],
    color: CURRENT_COLOR,
    values: timeline.value.current[metric],
    detail: (i) => formatDay(timeline.value.dayStart(current.value, i))
  }]
  if (timeline.value.previous) {
    series.push({
      key: 'previous',
      label: seriesLabels.value[1],
      color: PREVIOUS_COLOR,
      values: timeline.value.previous[metric],
      detail: (i) => formatDay(timeline.value.dayStart(previous.value, i))
    })
  }
  return series
}

const cumulativeSeries = computed(() => timeSeries('cumulative'))
const slotSeries = computed(() => timeSeries(slotMetricKey.value))
const timelineEmpty = computed(() =>
  !cumulativeSeries.value.some((series) => series.values.some((value) => value > 0))
)

// ---- Shares (hours, order values, items per order, sizes) ----

const hourRows = computed(() =>
  report.value.hours.current.map((entry, hour) => ({
    label: `${hour}:00–${hour}:59`,
    current: entry,
    previous: report.value.hours.previous[hour]
  }))
)

function isEmptyShares(rows) {
  return !rows.some((row) => row.current.count || (hasPrevious.value && row.previous.count))
}

// Column series from rows of { current: { count, share }, previous: {...} }.
function shareColumns(rows, unit) {
  const series = [{
    key: 'current',
    label: seriesLabels.value[0],
    color: CURRENT_COLOR,
    values: rows.map((row) => row.current.share),
    detail: (i) => `${formatCount(rows[i].current.count)} ${unit}`
  }]
  if (hasPrevious.value) {
    series.push({
      key: 'previous',
      label: seriesLabels.value[1],
      color: PREVIOUS_COLOR,
      values: rows.map((row) => row.previous.share),
      detail: (i) => `${formatCount(rows[i].previous.count)} ${unit}`
    })
  }
  return series
}

const hourSeries = computed(() => shareColumns(hourRows.value, '筆'))
const sizeSeries = computed(() => shareColumns(report.value.sizes, '件'))

// Bar rows from rows of { label, current, previous }.
function barRows(rows, pick) {
  return rows.map((row) => ({
    label: row.label,
    values: hasPrevious.value ? [pick(row.current), pick(row.previous)] : [pick(row.current)]
  }))
}

const identityRows = computed(() => barRows(report.value.identities, (summary) => summary[groupMetricKey.value]))
const gradeRows = computed(() => barRows(report.value.grades, (summary) => summary[groupMetricKey.value]))
const valueRows = computed(() => barRows(report.value.values, (entry) => entry.share))
const unitRows = computed(() => barRows(report.value.units, (entry) => entry.share))

// ---- Promotions ----

const promotionsEmpty = computed(() =>
  !report.value.promotions.some((row) => row.current?.orders || (hasPrevious.value && row.previous?.orders))
)
// The gift is missing (null) for imported years.
const promotionUsageRows = computed(() =>
  barRows(report.value.promotions.filter((row) => row.key !== 'none'), (entry) => entry?.share ?? null)
)
const promotionValueRows = computed(() =>
  barRows(report.value.promotions.filter((row) => row.key !== 'gift'), (entry) => entry?.[promotionMetricKey.value] ?? null)
)

const discountStats = computed(() => {
  const { current: now, previous: past } = report.value.discounts
  return [
    { label: '折扣率', value: formatPercent(now.rate), previous: formatPercent(past.rate) },
    { label: '折抵金額', value: formatCurrency(now.discount), previous: formatCurrency(past.discount) }
  ]
})

// ---- Product mix by customer group ----

const mixColors = computed(() =>
  Object.fromEntries(report.value.mix.categories.map((category, i) => [
    category,
    category === OTHER_CATEGORY ? OTHER_COLOR : CATEGORY_COLORS[i]
  ]))
)
const mixLegend = computed(() => report.value.mix.categories.map((label) => ({ label, color: mixColors.value[label] })))
const mixGroups = computed(() => report.value.mix[mixDimensionKey.value])
const mixEmpty = computed(() =>
  !mixGroups.value.some((row) => row.current.units || (hasPrevious.value && row.previous.units))
)
const mixRows = computed(() =>
  mixGroups.value.map((row) => ({
    label: row.label,
    bars: [row.current, row.previous]
      .slice(0, seriesLabels.value.length)
      .map((mix, i) => ({ label: seriesLabels.value[i], segments: mix.segments }))
  }))
)

// ---- Heatmaps (one year at a time) ----

const yearOptions = computed(() => [
  { value: 'current', label: seriesLabels.value[0] },
  { value: 'previous', label: seriesLabels.value[1] }
])
const shownSides = computed(() => (hasPrevious.value ? ['current', 'previous'] : ['current']))

function yearLabel(side) {
  return seriesLabels.value[side === 'current' ? 0 : 1]
}

// This year unless the compared year is picked: its blue ramp, or gray for the compared year.
function yearView(choice) {
  const side = hasPrevious.value ? choice : 'current'
  return { side, label: yearLabel(side), ramp: side === 'current' ? RAMPS.blue : RAMPS.gray }
}

// Names the year shown, when there are two to pick from (the PDF has no buttons).
function yearPrefix(view) {
  return hasPrevious.value ? `${view.label}，` : ''
}

// The top of a heatmap's scale, over both years so they shade alike.
function matrixMax(matrices) {
  return Math.max(0, ...matrices.flatMap((matrix) => matrix.flatMap((row) => row.map((cell) => cell?.share || 0))))
}

// Light to dark up to `max`. Zero is the surface wash, so "none" differs from "a little".
function sequentialFill(ramp, max) {
  return (value) => (value > 0 && max > 0 ? rampColor(ramp, value / max) : INK.hover)
}

const rhythmView = computed(() => yearView(rhythmYear.value))
const weekHourMax = computed(() => matrixMax(shownSides.value.map((side) => report.value.weekHours[side])))
const weekHourValues = computed(() =>
  report.value.weekHours[rhythmView.value.side].map((row) => row.map((cell) => cell.share))
)
const weekHourFill = computed(() => sequentialFill(rhythmView.value.ramp, weekHourMax.value))
const weekHourScale = computed(() => ({
  start: formatPercent(0),
  end: formatPercent(weekHourMax.value),
  colors: rhythmView.value.ramp
}))
const weekHourEmpty = computed(() =>
  !report.value.weekHours[rhythmView.value.side].some((row) => row.some((cell) => cell.count))
)

function weekHourTooltip(r, c) {
  const line = (side) => {
    const cell = report.value.weekHours[side][r][c]
    return `${yearLabel(side)} ${formatPercent(cell.share)}（${formatCount(cell.count)} 筆）`
  }
  return {
    title: `${WEEKDAY_LABELS[r]} ${c}:00–${c}:59`,
    // The shown year first.
    lines: (rhythmView.value.side === 'current' ? shownSides.value : ['previous', 'current']).map(line)
  }
}

const basketView = computed(() => yearView(basketYear.value))
const pairMatrix = computed(() => report.value.basket.pairs[basketView.value.side])
const pairValues = computed(() =>
  pairMatrix.value.cells.map((row) => row.map((cell) => cell?.[pairMetricKey.value] ?? null))
)
const pairsEmpty = computed(() => !pairMatrix.value.cells.some((row) => row.some(Boolean)))
const pairMax = computed(() => matrixMax(shownSides.value.map((side) => report.value.basket.pairs[side].cells)))

// Lift on a log scale around 1, out to the furthest cell (at least 2×, at
// most 4×, so one rare pair doesn't wash out the rest).
const liftSpan = computed(() => {
  const logs = shownSides.value.flatMap((side) =>
    report.value.basket.pairs[side].cells.flat().filter((cell) => cell?.lift > 0).map((cell) => Math.abs(Math.log2(cell.lift)))
  )
  return Math.min(Math.max(1, ...logs), 2)
})

function liftFill(lift) {
  // Never bought together (0) is the far red end.
  const t = Math.log2(lift) / liftSpan.value
  return t >= 0 ? rampColor(RAMPS.above, t) : rampColor(RAMPS.below, -t)
}

const pairFill = computed(() =>
  pairMetricKey.value === 'lift' ? liftFill : sequentialFill(basketView.value.ramp, pairMax.value)
)
const pairScale = computed(() => {
  if (pairMetricKey.value === 'lift') {
    const end = (power) => `${Number((2 ** power).toFixed(2))} 倍`
    return { start: end(-liftSpan.value), end: end(liftSpan.value), colors: [...RAMPS.below].reverse().concat(RAMPS.above.slice(1)) }
  }
  return { start: '0%', end: pairMetric.value.cell(pairMax.value), colors: basketView.value.ramp }
})

function formatLift(lift) {
  return lift == null ? '—' : `${lift.toFixed(1)} 倍`
}

function pairTooltip(r, c) {
  const cell = pairMatrix.value.cells[r][c]
  const [bought, also] = [pairMatrix.value.labels[r], pairMatrix.value.labels[c]]
  return {
    title: `${yearPrefix(basketView.value)}買了${bought}的 ${formatCount(cell.base)} 筆訂單`,
    lines: [
      `${formatPercent(cell.share)}（${formatCount(cell.count)} 筆）也買了${also}`,
      `提升度 ${formatLift(cell.lift)}`
    ]
  }
}

const penetrationRows = computed(() => barRows(report.value.basket.products, (entry) => entry.share))

const productLists = computed(() => {
  const list = (label, color, products) => ({
    label,
    color,
    rows: products.slice(0, TOP_PRODUCTS).map((product) => ({ label: product.label, values: [product.units] }))
  })
  const lists = [list(seriesLabels.value[0], CURRENT_COLOR, report.value.products.current)]
  if (hasPrevious.value) lists.push(list(seriesLabels.value[1], PREVIOUS_COLOR, report.value.products.previous))
  return lists
})

// ---- Table views ----

function seriesTable(series, format) {
  return {
    columns: ['天數', ...series.map((s) => s.label)],
    rows: Array.from({ length: timeline.value.days }, (_, i) => [
      dayTitle(i),
      ...series.map((s) => format(s.values[i] ?? null))
    ])
  }
}

function shareTable(header, rows, unit) {
  const cell = (entry) => `${formatPercent(entry.share)}（${formatCount(entry.count)} ${unit}）`
  return {
    columns: [header, ...seriesLabels.value],
    rows: rows.map((row) => [row.label, cell(row.current), ...(hasPrevious.value ? [cell(row.previous)] : [])])
  }
}

function groupTable(header, rows) {
  const columns = [header]
  seriesLabels.value.forEach((year) => columns.push(`${year}營收`, `${year}訂單`, `${year}客單價`))
  return {
    columns,
    rows: rows.map((row) => [
      row.label,
      ...[row.current, row.previous]
        .slice(0, seriesLabels.value.length)
        .flatMap((summary) => [formatCurrency(summary.revenue), formatCount(summary.orders), formatCurrency(summary.aov)])
    ])
  }
}

const cumulativeTable = computed(() => seriesTable(cumulativeSeries.value, formatCurrency))
const slotTable = computed(() => seriesTable(slotSeries.value, slotMetric.value.format))
const hourTable = computed(() => shareTable('時段', hourRows.value, '筆'))
const identityTable = computed(() => groupTable('身分', report.value.identities))
const gradeTable = computed(() => groupTable('年級', report.value.grades))
const valueTable = computed(() => shareTable('訂單金額（NT$）', report.value.values, '筆'))
const unitTable = computed(() => shareTable('件數', report.value.units, '筆'))
const sizeTable = computed(() => shareTable('尺寸', report.value.sizes, '件'))

const penetrationTable = computed(() => shareTable('商品類別', report.value.basket.products, '筆'))

const promotionUsageTable = computed(() => {
  const cell = (entry) => (entry ? `${formatPercent(entry.share)}（${formatCount(entry.orders)} 筆）` : '—')
  const years = (row) => [row.current, row.previous].slice(0, seriesLabels.value.length)
  const { current: now, previous: past } = report.value.discounts
  const totals = (label, format, key) => [label, ...[now, past].slice(0, seriesLabels.value.length).map((d) => format(d[key]))]
  return {
    columns: ['優惠', ...seriesLabels.value],
    rows: [
      ...report.value.promotions.filter((row) => row.key !== 'none').map((row) => [row.label, ...years(row).map(cell)]),
      totals('折扣率', formatPercent, 'rate'),
      totals('折抵金額', formatCurrency, 'discount')
    ]
  }
})

const promotionValueTable = computed(() => {
  const columns = ['訂單類型']
  seriesLabels.value.forEach((year) => columns.push(`${year}訂單`, `${year}客單價`, `${year}每單件數`))
  return {
    columns,
    rows: report.value.promotions
      .filter((row) => row.key !== 'gift')
      .map((row) => [
        row.label,
        ...[row.current, row.previous]
          .slice(0, seriesLabels.value.length)
          .flatMap((entry) => [formatCount(entry.orders), formatCurrency(entry.aov), formatDecimal(entry.unitsPerOrder)])
      ])
  }
})

const mixTable = computed(() => ({
  columns: ['客群', ...report.value.mix.categories, '售出件數'],
  rows: mixGroups.value.flatMap((row) =>
    [row.current, row.previous].slice(0, seriesLabels.value.length).map((mix, i) => [
      hasPrevious.value ? `${row.label}（${seriesLabels.value[i]}）` : row.label,
      ...mix.segments.map((segment) => `${formatPercent(segment.share)}（${formatCount(segment.count)}）`),
      formatCount(mix.units)
    ])
  )
}))

const weekHourTable = computed(() => ({
  columns: ['時段', ...WEEKDAY_LABELS],
  rows: HOUR_LABELS.map((hour, c) => [
    `${hour}:00–${hour}:59`,
    ...report.value.weekHours[rhythmView.value.side].map((row) => `${formatPercent(row[c].share)}（${formatCount(row[c].count)}）`)
  ])
}))

const pairTable = computed(() => {
  const { labels, cells } = pairMatrix.value
  return {
    columns: ['買了＼也買了', ...labels],
    rows: cells.map((row, r) => [
      labels[r],
      ...row.map((cell) => (cell ? `${formatPercent(cell.share)}（${formatLift(cell.lift)}）` : '—'))
    ])
  }
})

const productTable = computed(() => {
  const now = new Map(report.value.products.current.map((product) => [product.label, product]))
  const past = new Map(hasPrevious.value ? report.value.products.previous.map((product) => [product.label, product]) : [])
  const columns = ['商品']
  seriesLabels.value.forEach((year) => columns.push(`${year}件數`, `${year}金額（折扣前）`))
  return {
    columns,
    rows: [...new Set([...now.keys(), ...past.keys()])].map((label) => [
      label,
      ...[now, past]
        .slice(0, seriesLabels.value.length)
        .flatMap((products) => [formatCount(products.get(label)?.units || 0), formatCurrency(products.get(label)?.amount || 0)])
    ])
  }
})

// ---- PDF export ----

const toast = useToastStore()
const pageRoot = ref(null)
const exporting = ref(false)
const exportStamp = ref('')
// Chart cards hide their buttons too.
provide('exportingPdf', exporting)

function nextFrame() {
  return new Promise((resolve) => requestAnimationFrame(resolve))
}

// The report as shown, without the controls. html2pdf lays its copy out at
// the PDF's printable width, so the page is narrowed to that width first
// (.exporting) and the charts get a few frames to redraw at it.
async function exportPdf() {
  if (exporting.value) return
  toast.show('正在產生 PDF…')
  exportStamp.value = new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei', hour12: false })
  exporting.value = true
  try {
    await nextTick()
    for (let i = 0; i < 3; i++) await nextFrame()
    await downloadElementAsPdf(pageRoot.value, `財務報表_${taiwanDate()}.pdf`)
  } catch (error) {
    console.error('PDF export failed:', error)
    toast.show('PDF 匯出失敗，請再試一次')
  } finally {
    exporting.value = false
  }
}

// ---- Import ----

const importOpen = ref(false)

function onImportFile(event) {
  const [file] = event.target.files
  // Lets the same file be picked again after a cancel.
  event.target.value = ''
  if (file) readImportFile(file)
}

async function saveImport() {
  if (await confirmImport()) importOpen.value = false
}

function closeImport() {
  cancelImport()
  importOpen.value = false
}
</script>

<style scoped>
@import 'src/css/salesanalyticspage.scss';
</style>
