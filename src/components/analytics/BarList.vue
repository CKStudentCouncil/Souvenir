<template>
  <ul class="bar-list">
    <li v-for="row in rows" :key="row.label" class="bar-row">
      <span class="bar-label">{{ row.label }}</span>
      <div class="bar-values">
        <div v-for="(value, i) in row.values" :key="i" class="bar-line">
          <span class="sr-only">{{ seriesLabels[i] }}</span>
          <span class="bar-fill" :style="{ width: barWidth(value), background: colors[i] }" />
          <span class="bar-value">{{ format(value) }}</span>
        </div>
      </div>
    </li>
  </ul>
</template>

<script setup>
import { computed } from 'vue'

// Horizontal bars with the value at each bar's tip: one row per category,
// one bar per series (this year on top). Every value is printed, so no tooltip.
const props = defineProps({
  // [{ label, values: (number | null)[] }]
  rows: { type: Array, required: true },
  colors: { type: Array, required: true },
  seriesLabels: { type: Array, default: () => [] },
  format: { type: Function, required: true }
})

const max = computed(() => Math.max(0, ...props.rows.flatMap((row) => row.values.map((value) => value || 0))))

// Room is kept after the longest bar for its value.
function barWidth(value) {
  return max.value && value > 0 ? `calc((100% - 104px) * ${value / max.value})` : '0px'
}
</script>

<style scoped>
.bar-list {
  display: grid;
  gap: 12px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.bar-row {
  display: grid;
  grid-template-columns: minmax(4.5em, 8em) minmax(0, 1fr);
  align-items: center;
  gap: 12px;
}

.bar-label {
  color: #1d1d1f;
  font-size: .85rem;
  line-height: 1.3;
}

.bar-values {
  display: grid;
  gap: 2px;
}

.bar-line {
  display: flex;
  align-items: center;
  gap: 6px;
  min-height: 15px;
}

.bar-fill {
  flex: none;
  height: 10px;
  border-radius: 0 4px 4px 0;
}

.bar-value {
  color: #6e6e73;
  font-size: .78rem;
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
}

.bar-line:first-child .bar-value {
  color: #1d1d1f;
  font-weight: 600;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
}
</style>
