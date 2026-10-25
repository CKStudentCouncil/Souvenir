<template>
  <div ref="root" class="column-chart" :style="{ height: `${HEIGHT}px` }">
    <svg
      v-if="width"
      class="chart-svg"
      :width="width"
      :height="HEIGHT"
      :font-family="CHART_FONT"
      role="img"
      :aria-label="label"
      tabindex="0"
      @pointerleave="active = null"
      @focus="onFocus"
      @blur="active = null"
      @keydown="onKeydown"
    >
      <line
        v-for="tick in scale.ticks"
        :key="tick"
        :x1="PAD.left"
        :x2="width - PAD.right"
        :y1="y(tick)"
        :y2="y(tick)"
        :stroke="tick === 0 ? INK.baseline : INK.grid"
        stroke-width="1"
        shape-rendering="crispEdges"
      />
      <text
        v-for="tick in scale.ticks"
        :key="`y${tick}`"
        :x="PAD.left - 8"
        :y="y(tick)"
        dy="0.32em"
        text-anchor="end"
        :fill="INK.muted"
        font-size="11"
      >{{ axisFormat(tick) }}</text>

      <g
        v-for="group in groups"
        :key="group.index"
        @pointerenter="active = group.index"
        @pointerdown="active = group.index"
      >
        <!-- The whole band is the hover target; it lights up behind the bars. -->
        <rect
          :x="group.x"
          :y="PAD.top"
          :width="band"
          :height="PLOT_HEIGHT"
          :fill="active === group.index ? INK.hover : 'transparent'"
        />
        <path v-for="bar in group.bars" :key="bar.key" :d="bar.d" :fill="bar.color" />
        <text
          v-if="group.showLabel"
          :x="group.x + band / 2"
          :y="HEIGHT - 8"
          text-anchor="middle"
          :fill="INK.muted"
          font-size="11"
        >{{ labels[group.index] }}</text>
      </g>
    </svg>

    <div v-if="width && active !== null" class="chart-tooltip" :style="tooltipStyle" aria-hidden="true">
      <p class="tooltip-title">{{ tooltipTitle(active) }}</p>
      <p v-for="row in tooltipRows" :key="row.key" class="tooltip-row">
        <span class="tooltip-key" :style="{ background: row.color }" />
        <strong>{{ row.value }}</strong>
        <span>{{ row.label }}</span>
      </p>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { CHART_FONT, INK, barPath, niceScale, textWidth, useElementWidth } from './chart'

// Grouped columns: one group per label, one bar per series.
const props = defineProps({
  labels: { type: Array, required: true },
  // [{ key, label, color, values: number[], detail?: (index) => string }]
  series: { type: Array, required: true },
  label: { type: String, required: true },
  format: { type: Function, required: true },
  axisFormat: { type: Function, required: true },
  tooltipTitle: { type: Function, required: true }
})

const HEIGHT = 220
const PAD = { top: 16, right: 8, bottom: 28, left: 48 }
const PLOT_HEIGHT = HEIGHT - PAD.top - PAD.bottom
const MAX_BAR = 24
const GAP = 2

const root = ref(null)
const width = useElementWidth(root)
const active = ref(null)

const band = computed(() => Math.max(width.value - PAD.left - PAD.right, 1) / Math.max(props.labels.length, 1))
const scale = computed(() => niceScale(Math.max(0, ...props.series.flatMap((s) => s.values))))

function y(value) {
  return PAD.top + PLOT_HEIGHT * (1 - value / scale.value.max)
}

const groups = computed(() => {
  const k = props.series.length
  const groupWidth = Math.min(band.value * 0.72, k * MAX_BAR + (k - 1) * GAP)
  const barWidth = Math.max((groupWidth - (k - 1) * GAP) / k, 1)
  // Every n-th label when they don't all fit.
  const needed = Math.max(...props.labels.map((text) => textWidth(text))) + 8
  const labelEvery = [1, 2, 3, 4, 6, 12].find((n) => band.value * n >= needed) ?? 12

  return props.labels.map((_, i) => {
    const x = PAD.left + i * band.value
    const start = x + (band.value - groupWidth) / 2
    return {
      index: i,
      x,
      showLabel: i % labelEvery === 0,
      bars: props.series.map((s, j) => {
        const top = y(s.values[i] || 0)
        return { key: s.key, color: s.color, d: barPath(start + j * (barWidth + GAP), top, barWidth, y(0) - top) }
      })
    }
  })
})

const tooltipRows = computed(() =>
  props.series.map((s) => ({
    key: s.key,
    color: s.color,
    value: props.format(s.values[active.value] || 0),
    label: s.detail ? `${s.label} · ${s.detail(active.value)}` : s.label
  }))
)

const tooltipStyle = computed(() => {
  const center = PAD.left + (active.value + 0.5) * band.value
  return center > width.value / 2
    ? { right: `${width.value - center + band.value / 2 + 8}px` }
    : { left: `${center + band.value / 2 + 8}px` }
})

function onFocus() {
  if (active.value === null) active.value = 0
}

function onKeydown(event) {
  const moves = { ArrowLeft: -1, ArrowRight: 1, Home: -Infinity, End: Infinity }
  if (event.key === 'Escape') {
    active.value = null
  } else if (event.key in moves) {
    event.preventDefault()
    active.value = Math.min(Math.max((active.value ?? 0) + moves[event.key], 0), props.labels.length - 1)
  }
}
</script>

<style scoped>
@import 'src/css/charts.scss';
</style>
