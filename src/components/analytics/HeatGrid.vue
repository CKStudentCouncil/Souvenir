<template>
  <div
    ref="root"
    class="heat-grid"
    role="img"
    :aria-label="label"
    tabindex="0"
    @pointerleave="active = null"
    @focus="onFocus"
    @blur="active = null"
    @keydown="onKeydown"
  >
    <div
      class="heat-table"
      :class="{ thin: thinColumns }"
      :style="{ gridTemplateColumns: `${labelWidth}px repeat(${columnLabels.length}, minmax(0, 1fr))` }"
    >
      <span />
      <span v-for="(column, c) in columnLabels" :key="`c${c}`" class="heat-column">
        {{ c % columnEvery === 0 ? column : '' }}
      </span>
      <template v-for="(row, r) in rowLabels" :key="`r${r}`">
        <span class="heat-row">{{ row }}</span>
        <span
          v-for="(value, c) in values[r]"
          :key="c"
          class="heat-cell"
          :data-cell="`${r}-${c}`"
          :style="cellStyle(value, r, c)"
          @pointerenter="active = { r, c }"
          @pointerdown="active = { r, c }"
        >{{ cellText && value != null ? cellFormat(value) : '' }}</span>
      </template>
    </div>

    <div class="heat-scale" aria-hidden="true">
      <span>{{ scale.start }}</span>
      <span class="heat-ramp" :style="{ background: `linear-gradient(to right, ${scale.colors.join(', ')})` }" />
      <span>{{ scale.end }}</span>
    </div>

    <div v-if="tooltip" class="chart-tooltip" :style="tooltip.style" aria-hidden="true">
      <p class="tooltip-title">{{ tooltip.title }}</p>
      <p v-for="line in tooltip.lines" :key="line" class="tooltip-line">{{ line }}</p>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { INK, inkOn, textWidth, tooltipBeside, useElementWidth } from './chart'

// A grid of cells shaded by value. Null cells (e.g. a category against itself)
// stay blank. Built from HTML, which the PDF export draws as it is.
const props = defineProps({
  rowLabels: { type: Array, required: true },
  columnLabels: { type: Array, required: true },
  // values[row][column]: number | null
  values: { type: Array, required: true },
  // value => #rrggbb
  fill: { type: Function, required: true },
  // The key under the grid: { start, end, colors } (gradient stops, start to end).
  scale: { type: Object, required: true },
  label: { type: String, required: true },
  // Text inside each cell; none when left out.
  cellFormat: { type: Function, default: null },
  cellHeight: { type: Number, default: 24 },
  labelWidth: { type: Number, default: 48 },
  // Column labels are thinned out when they don't fit (otherwise they wrap).
  thinColumns: { type: Boolean, default: false },
  // (row, column) => { title, lines: string[] }
  tooltipFor: { type: Function, required: true }
})

const GAP = 2

const root = ref(null)
const width = useElementWidth(root)
const active = ref(null)

const cellWidth = computed(() => {
  const n = props.columnLabels.length
  return (width.value - props.labelWidth - GAP * n) / n
})

// Every n-th column label when they don't all fit.
const columnEvery = computed(() => {
  if (!props.thinColumns || !width.value) return 1
  const needed = Math.max(...props.columnLabels.map((text) => textWidth(text))) + 6
  return [1, 2, 3, 4, 6, 12].find((step) => cellWidth.value * step + GAP * (step - 1) >= needed) ?? 12
})

// Cell text only where it fits ("100%" is about the widest); the tooltip and
// the table view still have every value.
const cellText = computed(() => !!props.cellFormat && cellWidth.value >= textWidth('100%') + 6)

function cellStyle(value, r, c) {
  const style = { height: `${props.cellHeight}px` }
  if (value == null) return { ...style, background: '#fafafa' }
  const fill = props.fill(value)
  const isActive = active.value?.r === r && active.value?.c === c
  return {
    ...style,
    background: fill,
    color: inkOn(fill),
    boxShadow: isActive ? `inset 0 0 0 2px ${INK.primary}` : 'none'
  }
}

const tooltip = computed(() => {
  if (!active.value || !width.value) return null
  const { r, c } = active.value
  if (props.values[r]?.[c] == null) return null
  const style = tooltipBeside(root.value, root.value?.querySelector(`[data-cell="${r}-${c}"]`))
  return style ? { style, ...props.tooltipFor(r, c) } : null
})

function onFocus() {
  if (active.value === null) active.value = { r: 0, c: props.values[0]?.[0] == null ? 1 : 0 }
}

function onKeydown(event) {
  const moves = {
    ArrowLeft: [0, -1],
    ArrowRight: [0, 1],
    ArrowUp: [-1, 0],
    ArrowDown: [1, 0],
    Home: [0, -Infinity],
    End: [0, Infinity]
  }
  if (event.key === 'Escape') {
    active.value = null
  } else if (event.key in moves) {
    event.preventDefault()
    const [dr, dc] = moves[event.key]
    const { r, c } = active.value ?? { r: 0, c: 0 }
    const clamp = (value, count) => Math.min(Math.max(value, 0), count - 1)
    active.value = { r: clamp(r + dr, props.rowLabels.length), c: clamp(c + dc, props.columnLabels.length) }
  }
}
</script>

<style scoped>
@import 'src/css/charts.scss';

.heat-table {
  display: grid;
  gap: 2px;
  align-items: end;
}

.heat-column {
  padding-bottom: 4px;
  color: #86868b;
  font-size: .72rem;
  line-height: 1.2;
  text-align: center;
  word-break: break-all;
}

/* A thinned-out label has empty neighbours to spread into. */
.thin .heat-column {
  white-space: nowrap;
  word-break: normal;
}

.heat-row {
  align-self: center;
  padding-right: 8px;
  color: #1d1d1f;
  font-size: .8rem;
  line-height: 1.25;
}

.heat-cell {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 0;
  border-radius: 3px;
  font-size: .72rem;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
}

.heat-scale {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 12px;
  color: #86868b;
  font-size: .72rem;
  font-variant-numeric: tabular-nums;
}

.heat-ramp {
  width: 120px;
  height: 8px;
  border-radius: 4px;
}
</style>
