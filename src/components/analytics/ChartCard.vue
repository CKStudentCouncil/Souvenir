<template>
  <section class="chart-card">
    <header class="chart-head">
      <div>
        <h3>{{ title }}</h3>
        <p v-if="subtitle" class="chart-subtitle">{{ subtitle }}</p>
      </div>
      <button
        v-if="table && !empty && !exportingPdf"
        type="button"
        class="table-toggle"
        :aria-pressed="showTable"
        @click="showTable = !showTable"
      >
        {{ showTable ? '顯示圖表' : '顯示表格' }}
      </button>
    </header>

    <div v-if="$slots.controls && !exportingPdf" class="chart-controls">
      <slot name="controls" />
    </div>

    <ul v-if="legend.length > 1 && !empty" class="chart-legend">
      <li v-for="item in legend" :key="item.label">
        <span class="legend-key" :class="legendShape" :style="{ background: item.color }" />
        {{ item.label }}
      </li>
    </ul>

    <p v-if="empty" class="chart-empty">{{ emptyText }}</p>
    <div v-else-if="showTable" class="chart-table-wrap">
      <table class="chart-table">
        <thead>
          <tr>
            <th v-for="column in table.columns" :key="column" scope="col">{{ column }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, i) in table.rows" :key="i">
            <th scope="row">{{ row[0] }}</th>
            <td v-for="(cell, j) in row.slice(1)" :key="j">{{ cell }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else class="chart-body">
      <slot />
    </div>
  </section>
</template>

<script setup>
import { inject, ref } from 'vue'

// Card around one chart: title, legend, and a table view of the same numbers.
// Its buttons are left out of the PDF export (provided by the page).
const exportingPdf = inject('exportingPdf', ref(false))

defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
  // [{ label, color }]; shown for two or more series.
  legend: { type: Array, default: () => [] },
  // Mirrors the marks: 'line' for line charts, 'rect' for bars.
  legendShape: { type: String, default: 'rect' },
  // { columns: string[], rows: string[][] }, first column is the row label.
  table: { type: Object, default: null },
  empty: { type: Boolean, default: false },
  emptyText: { type: String, default: '尚無資料' }
})

const showTable = ref(false)
</script>

<style scoped>
.chart-card {
  min-width: 0;
  padding: 22px 24px;
  border: 1px solid #e5e5e7;
  border-radius: 20px;
  background: #fff;
}

.chart-head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
}

.chart-head h3 {
  margin: 0;
  color: #1d1d1f;
  font-size: 1.05rem;
  font-weight: 700;
  line-height: 1.4;
}

.chart-subtitle {
  margin: 2px 0 0;
  color: #6e6e73;
  font-size: .82rem;
  line-height: 1.5;
}

.table-toggle {
  flex: none;
  padding: 5px 12px;
  border: 1px solid #e5e5e7;
  border-radius: 999px;
  background: #fff;
  color: #1d1d1f;
  font: inherit;
  font-size: .78rem;
  cursor: pointer;
}

.table-toggle:hover {
  background: #f5f5f7;
}

.chart-controls {
  margin-top: 12px;
}

.chart-legend {
  display: flex;
  flex-wrap: wrap;
  gap: 4px 16px;
  margin: 12px 0 0;
  padding: 0;
  list-style: none;
  color: #515154;
  font-size: .8rem;
}

.chart-legend li {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.legend-key.rect {
  width: 10px;
  height: 10px;
  border-radius: 3px;
}

.legend-key.line {
  width: 16px;
  height: 2px;
  border-radius: 1px;
}

.chart-body {
  margin-top: 14px;
}

.chart-empty {
  margin: 28px 0 12px;
  color: #6e6e73;
  font-size: .9rem;
  text-align: center;
}

.chart-table-wrap {
  max-height: 380px;
  margin-top: 14px;
  overflow: auto;
  border: 1px solid #ececee;
  border-radius: 12px;
}

.chart-table {
  width: 100%;
  border-collapse: collapse;
  font-size: .82rem;
}

.chart-table th,
.chart-table td {
  padding: 8px 12px;
  border-bottom: 1px solid #ececee;
  text-align: right;
  white-space: nowrap;
  font-variant-numeric: tabular-nums;
}

.chart-table th:first-child {
  text-align: left;
  font-weight: 500;
}

.chart-table thead th {
  position: sticky;
  top: 0;
  background: #fafafa;
  color: #6e6e73;
  font-weight: 600;
}

.chart-table tbody tr:last-child th,
.chart-table tbody tr:last-child td {
  border-bottom: 0;
}
</style>
