<template>
  <div ref="root" class="line-chart" :style="{ height: `${HEIGHT}px` }">
    <svg
      v-if="width"
      class="chart-svg"
      :width="width"
      :height="HEIGHT"
      :font-family="CHART_FONT"
      role="img"
      :aria-label="label"
      tabindex="0"
      @pointermove="pointAt"
      @pointerdown="pointAt"
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
      <text
        v-for="i in xTicks"
        :key="`x${i}`"
        :x="x(i)"
        :y="HEIGHT - 8"
        text-anchor="middle"
        :fill="INK.muted"
        font-size="11"
      >{{ xLabel(i) }}</text>

      <path v-if="area && areaPath" :d="areaPath" :fill="series[0].color" fill-opacity="0.1" />
      <path
        v-for="line in lines"
        :key="line.key"
        :d="line.d"
        :stroke="line.color"
        fill="none"
        stroke-width="2"
        stroke-linejoin="round"
        stroke-linecap="round"
      />
      <g v-for="end in ends" :key="`end${end.key}`">
        <circle :cx="end.x" :cy="end.y" r="4" :fill="end.color" stroke="#fff" stroke-width="2" />
        <text
          v-if="end.text"
          :x="end.labelX"
          :y="end.labelY"
          :text-anchor="end.anchor"
          dy="0.32em"
          :fill="INK.primary"
          font-size="12"
          font-weight="600"
          stroke="#fff"
          stroke-width="3"
          stroke-linejoin="round"
          paint-order="stroke"
        >{{ end.text }}</text>
      </g>

      <g v-if="active !== null">
        <line
          :x1="x(active)"
          :x2="x(active)"
          :y1="PAD.top"
          :y2="HEIGHT - PAD.bottom"
          :stroke="INK.muted"
          stroke-width="1"
          shape-rendering="crispEdges"
        />
        <circle
          v-for="dot in activeDots"
          :key="dot.key"
          :cx="dot.x"
          :cy="dot.y"
          r="4"
          :fill="dot.color"
          stroke="#fff"
          stroke-width="2"
        />
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
import { CHART_FONT, INK, niceScale, textWidth, useElementWidth } from './chart'

// Line chart over evenly spaced days. The first series is drawn on top; null
// values leave a gap (e.g. days that haven't come yet).
const props = defineProps({
  // [{ key, label, color, values: (number | null)[], detail?: (index) => string }]
  series: { type: Array, required: true },
  label: { type: String, required: true },
  format: { type: Function, required: true },
  axisFormat: { type: Function, required: true },
  xLabel: { type: Function, required: true },
  tooltipTitle: { type: Function, required: true },
  // Gaps between x-axis labels to choose from, smallest first.
  xSteps: { type: Array, default: () => [1, 2, 5, 10, 20, 50] },
  // Added to an index before checking it against the step (1 for 1-based days).
  xStepOffset: { type: Number, default: 0 },
  integer: { type: Boolean, default: false },
  // Shade under the first series.
  area: { type: Boolean, default: false }
})

const HEIGHT = 240
const PAD = { top: 16, right: 24, bottom: 28, left: 48 }
const PLOT_HEIGHT = HEIGHT - PAD.top - PAD.bottom

const root = ref(null)
const width = useElementWidth(root)
const active = ref(null)

const count = computed(() => Math.max(1, ...props.series.map((s) => s.values.length)))
const plotWidth = computed(() => Math.max(width.value - PAD.left - PAD.right, 1))
const scale = computed(() =>
  niceScale(Math.max(0, ...props.series.flatMap((s) => s.values.filter((v) => v != null))), {
    integer: props.integer
  })
)

function x(i) {
  return PAD.left + (count.value === 1 ? plotWidth.value / 2 : (i * plotWidth.value) / (count.value - 1))
}

function y(value) {
  return PAD.top + PLOT_HEIGHT * (1 - value / scale.value.max)
}

function lastIndex(values) {
  for (let i = values.length - 1; i >= 0; i--) if (values[i] != null) return i
  return -1
}

// As many labels as fit at about 56px apart, on round steps.
const xTicks = computed(() => {
  const fit = Math.max(2, Math.floor(plotWidth.value / 56))
  const step = props.xSteps.find((s) => Math.ceil(count.value / s) <= fit) ?? props.xSteps[props.xSteps.length - 1]
  const ticks = []
  for (let i = 0; i < count.value; i++) {
    if (i !== 0 && (i + props.xStepOffset) % step !== 0) continue
    if (ticks.length && i - ticks[ticks.length - 1] < step * 0.6) continue
    ticks.push(i)
  }
  return ticks
})

function pathOf(values) {
  let d = ''
  values.forEach((value, i) => {
    if (value == null) return
    d += `${i > 0 && values[i - 1] != null ? 'L' : 'M'}${x(i).toFixed(1)},${y(value).toFixed(1)}`
  })
  return d
}

// Last year first, so this year's line sits on top.
const lines = computed(() =>
  [...props.series].reverse().map((s) => ({ key: s.key, color: s.color, d: pathOf(s.values) }))
)

const areaPath = computed(() => {
  const values = props.series[0]?.values || []
  const end = lastIndex(values)
  if (end < 1) return ''
  const base = y(0).toFixed(1)
  return `${pathOf(values.slice(0, end + 1))}L${x(end).toFixed(1)},${base}L${x(0).toFixed(1)},${base}Z`
})

// Marker and value at the end of each line. Labels go right of the marker, or
// above it near the right edge; if two would overlap only this year's stays.
const ends = computed(() => {
  const result = props.series
    .map((s) => {
      const i = lastIndex(s.values)
      if (i < 0) return null
      const px = x(i)
      const py = y(s.values[i])
      const text = props.format(s.values[i])
      const fits = px + 8 + textWidth(text) <= width.value
      return {
        key: s.key,
        color: s.color,
        x: px,
        y: py,
        text,
        anchor: fits ? 'start' : 'end',
        labelX: fits ? px + 8 : px,
        labelY: fits ? py : py - 14
      }
    })
    .filter(Boolean)
  for (let i = 1; i < result.length; i++) {
    const [a, b] = [result[0], result[i]]
    if (Math.abs(a.labelY - b.labelY) < 16 && Math.abs(a.labelX - b.labelX) < 96) b.text = ''
  }
  return result
})

const activeDots = computed(() =>
  props.series
    .filter((s) => s.values[active.value] != null)
    .map((s) => ({ key: s.key, color: s.color, x: x(active.value), y: y(s.values[active.value]) }))
)

const tooltipRows = computed(() =>
  props.series.map((s) => ({
    key: s.key,
    color: s.color,
    value: props.format(s.values[active.value] ?? null),
    label: s.detail ? `${s.label} · ${s.detail(active.value)}` : s.label
  }))
)

const tooltipStyle = computed(() => {
  const px = x(active.value)
  return px > width.value / 2 ? { right: `${width.value - px + 12}px` } : { left: `${px + 12}px` }
})

function clampIndex(i) {
  return Math.min(Math.max(i, 0), count.value - 1)
}

// The crosshair snaps to the nearest day.
function pointAt(event) {
  const left = event.currentTarget.getBoundingClientRect().left
  const ratio = (event.clientX - left - PAD.left) / plotWidth.value
  active.value = clampIndex(Math.round(ratio * (count.value - 1)))
}

function onFocus() {
  if (active.value === null) active.value = clampIndex(Math.max(...props.series.map((s) => lastIndex(s.values))))
}

function onKeydown(event) {
  const moves = { ArrowLeft: -1, ArrowRight: 1, Home: -Infinity, End: Infinity }
  if (event.key === 'Escape') {
    active.value = null
  } else if (event.key in moves) {
    event.preventDefault()
    active.value = clampIndex((active.value ?? 0) + moves[event.key])
  }
}
</script>

<style scoped>
@import 'src/css/charts.scss';
</style>
