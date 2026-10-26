<template>
  <div
    ref="root"
    class="stacked-bars"
    role="img"
    :aria-label="label"
    tabindex="0"
    @pointerleave="active = null"
    @focus="onFocus"
    @blur="active = null"
    @keydown="onKeydown"
  >
    <div v-for="(row, r) in shown" :key="row.label" class="stack-row">
      <span class="stack-label">{{ row.label }}</span>
      <div class="stack-bars">
        <div v-for="(bar, b) in row.bars" :key="b" class="stack-line" :class="{ 'with-year': withYear }">
          <span v-if="withYear" class="stack-year">{{ bar.label }}</span>
          <div v-if="bar.segments.length" class="stack-track">
            <span
              v-for="(segment, s) in bar.segments"
              :key="segment.label"
              class="stack-segment"
              :data-segment="`${r}-${b}-${s}`"
              :style="segmentStyle(segment, r, b, s)"
              @pointerenter="active = { r, b, s }"
              @pointerdown="active = { r, b, s }"
            >{{ segmentText(segment) }}</span>
          </div>
          <span v-else class="stack-empty">尚無資料</span>
        </div>
      </div>
    </div>

    <div v-if="tooltip" class="chart-tooltip" :style="tooltip.style" aria-hidden="true">
      <p class="tooltip-title">{{ tooltip.title }}</p>
      <p class="tooltip-row">
        <span class="tooltip-key rect" :style="{ background: tooltip.color }" />
        <strong>{{ tooltip.label }}</strong>
        <span>{{ tooltip.detail }}</span>
      </p>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { INK, inkOn, textWidth, tooltipBeside, useElementWidth } from './chart'

// 100% stacked horizontal bars: one row per group, one bar per year, each
// split into the shares of its segments, with a 2px gap between them. A
// segment's percentage is printed inside it where it fits.
const props = defineProps({
  // [{ label, bars: [{ label, segments: [{ label, share, count }] }] }]
  rows: { type: Array, required: true },
  // Segment label → #rrggbb.
  colors: { type: Object, required: true },
  label: { type: String, required: true },
  // Tooltip text after the segment's name, e.g. "32.1%（120 件）".
  describe: { type: Function, required: true }
})

const LABEL = 96
const YEAR = 48
const GAP = 12

const root = ref(null)
const width = useElementWidth(root)
const active = ref(null)

// Empty segments are left out.
const shown = computed(() =>
  props.rows.map((row) => ({
    label: row.label,
    bars: row.bars.map((bar) => ({ ...bar, segments: bar.segments.filter((segment) => segment.share > 0) }))
  }))
)
const withYear = computed(() => props.rows.some((row) => row.bars.length > 1))
const trackWidth = computed(() => width.value - LABEL - GAP - (withYear.value ? YEAR + 8 : 0))

function segmentText(segment) {
  const text = `${Math.round(segment.share * 100)}%`
  return segment.share * trackWidth.value - 2 >= textWidth(text) + 8 ? text : ''
}

function segmentStyle(segment, r, b, s) {
  const fill = props.colors[segment.label] || INK.baseline
  const isActive = active.value?.r === r && active.value?.b === b && active.value?.s === s
  return {
    flexGrow: segment.share,
    background: fill,
    color: inkOn(fill),
    boxShadow: isActive ? `inset 0 0 0 2px ${INK.primary}` : 'none'
  }
}

const tooltip = computed(() => {
  if (!active.value || !width.value) return null
  const { r, b, s } = active.value
  const row = shown.value[r]
  const segment = row?.bars[b]?.segments[s]
  if (!segment) return null
  const style = tooltipBeside(root.value, root.value?.querySelector(`[data-segment="${r}-${b}-${s}"]`))
  if (!style) return null
  return {
    style,
    title: withYear.value ? `${row.label} · ${row.bars[b].label}` : row.label,
    color: props.colors[segment.label] || INK.baseline,
    label: segment.label,
    detail: props.describe(segment)
  }
})

// Bars in reading order, for the arrow keys.
const lines = computed(() =>
  shown.value.flatMap((row, r) => row.bars.map((bar, b) => ({ r, b, count: bar.segments.length })))
)

function onFocus() {
  if (active.value !== null) return
  const first = lines.value.find((line) => line.count)
  if (first) active.value = { r: first.r, b: first.b, s: 0 }
}

function onKeydown(event) {
  if (event.key === 'Escape') {
    active.value = null
    return
  }
  const index = active.value ? lines.value.findIndex((line) => line.r === active.value.r && line.b === active.value.b) : -1
  let next = null
  if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
    const step = event.key === 'ArrowUp' ? -1 : 1
    // The next bar up or down that has segments.
    for (let i = index + step; i >= 0 && i < lines.value.length; i += step) {
      if (lines.value[i].count) {
        next = { ...lines.value[i], s: Math.min(active.value?.s ?? 0, lines.value[i].count - 1) }
        break
      }
    }
  } else if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
    if (index < 0) return
    const line = lines.value[index]
    const s = Math.min(Math.max(active.value.s + (event.key === 'ArrowLeft' ? -1 : 1), 0), line.count - 1)
    next = { r: line.r, b: line.b, s }
  } else {
    return
  }
  event.preventDefault()
  if (next) active.value = { r: next.r, b: next.b, s: next.s }
}
</script>

<style scoped>
@import 'src/css/charts.scss';

.stacked-bars {
  display: grid;
  gap: 14px;
}

.stack-row {
  display: grid;
  grid-template-columns: 96px minmax(0, 1fr);
  align-items: center;
  gap: 12px;
}

.stack-label {
  color: #1d1d1f;
  font-size: .85rem;
  line-height: 1.3;
}

.stack-bars {
  display: grid;
  gap: 4px;
}

.stack-line {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  align-items: center;
}

.stack-line.with-year {
  grid-template-columns: 48px minmax(0, 1fr);
  gap: 8px;
}

.stack-year {
  color: #6e6e73;
  font-size: .75rem;
  white-space: nowrap;
}

.stack-track {
  display: flex;
  gap: 2px;
  height: 20px;
  overflow: hidden;
  border-radius: 0 4px 4px 0;
}

.stack-segment {
  display: flex;
  flex-basis: 0;
  align-items: center;
  justify-content: center;
  min-width: 0;
  font-size: .72rem;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
}

.stack-empty {
  color: #86868b;
  font-size: .78rem;
}
</style>
