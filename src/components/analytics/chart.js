import { onBeforeUnmount, onMounted, ref } from 'vue'

// Helpers shared by the analytics chart components.
//
// The charts style their SVG with attributes, not CSS classes: the PDF export
// (html2canvas) draws each <svg> as a standalone image, where the page's
// stylesheets don't apply.

// The site's font (css/app.scss).
export const CHART_FONT = "-apple-system, BlinkMacSystemFont, 'SF Pro TC', 'PingFang TC', 'Noto Sans TC', 'Microsoft JhengHei', sans-serif"

export const INK = {
  primary: '#1d1d1f',
  muted: '#86868b',
  grid: '#ececee',
  baseline: '#d2d2d7',
  hover: '#f5f5f7'
}

// 0 up to a round maximum, with about `count` gridlines.
export function niceScale(max, { count = 4, integer = false } = {}) {
  if (!(max > 0)) return { max: 1, ticks: [0] }
  const raw = max / count
  const power = 10 ** Math.floor(Math.log10(raw))
  let step = [1, 2, 2.5, 5, 10].map((m) => m * power).find((s) => s >= raw)
  if (integer) step = Math.max(1, Math.ceil(step))
  const top = Math.ceil(max / step) * step
  const ticks = []
  for (let i = 0; i * step <= top * (1 + 1e-9); i++) ticks.push(Number((i * step).toPrecision(12)))
  return { max: top, ticks }
}

// Rough rendered width of 12px chart text (CJK characters are wider).
export function textWidth(text) {
  return [...String(text)].reduce((sum, char) => sum + (char.charCodeAt(0) > 255 ? 12 : 7), 0)
}

// A bar with 4px rounded top corners, square at the baseline.
export function barPath(x, y, width, height) {
  if (height <= 0 || width <= 0) return ''
  const r = Math.min(4, width / 2, height)
  return `M${x},${y + height}V${y + r}Q${x},${y} ${x + r},${y}H${x + width - r}` +
    `Q${x + width},${y} ${x + width},${y + r}V${y + height}Z`
}

// Width of an element, kept up to date as it resizes. The new width is applied
// on the next frame: redrawing the chart inside the observer callback would
// resize the element again in the same frame ("ResizeObserver loop" error).
export function useElementWidth(target) {
  const width = ref(0)
  let observer = null
  let frame = 0
  onMounted(() => {
    observer = new ResizeObserver(([entry]) => {
      const next = Math.floor(entry.contentRect.width)
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        if (next !== width.value) width.value = next
      })
    })
    observer.observe(target.value)
  })
  onBeforeUnmount(() => {
    observer?.disconnect()
    cancelAnimationFrame(frame)
  })
  return width
}
