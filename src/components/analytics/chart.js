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

// Sequential ramps for heatmaps, light (near zero) to dark: blue for this
// year, gray for the year it's compared with. The diverging arms share a gray
// midpoint: blue above it, red below.
export const RAMPS = {
  blue: ['#cde2fb', '#9ec5f4', '#6da7ec', '#3987e5', '#256abf', '#184f95', '#0d366b'],
  gray: ['#ececee', '#d2d2d7', '#aeaeb2', '#8e8e93', '#6e6e73', '#48484a', '#2c2c2e'],
  above: ['#ececee', '#b7d3f6', '#6da7ec', '#2a78d6', '#1c5cab', '#104281'],
  below: ['#ececee', '#f6c4c0', '#ec8f8a', '#e34948', '#b8302f', '#8a2121']
}

function rgbOf(hex) {
  const n = parseInt(hex.slice(1), 16)
  return [n >> 16, (n >> 8) & 255, n & 255]
}

// The color t (0–1) of the way along a ramp, as #rrggbb.
export function rampColor(ramp, t) {
  const position = Math.min(Math.max(t, 0), 1) * (ramp.length - 1)
  const i = Math.min(Math.floor(position), ramp.length - 2)
  const [from, to] = [rgbOf(ramp[i]), rgbOf(ramp[i + 1])]
  return `#${from.map((v, k) => Math.round(v + (to[k] - v) * (position - i)).toString(16).padStart(2, '0')).join('')}`
}

function luminance(hex) {
  const [r, g, b] = rgbOf(hex).map((v) => {
    const c = v / 255
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4
  })
  return 0.2126 * r + 0.7152 * g + 0.0722 * b
}

// Text color on a #rrggbb fill: white or primary ink, whichever contrasts more.
export function inkOn(fill) {
  const l = luminance(fill)
  return 1.05 / (l + 0.05) >= (l + 0.05) / (luminance(INK.primary) + 0.05) ? '#fff' : INK.primary
}

// Position of a tooltip inside `root` (which is positioned), level with `mark`:
// right of it, or left of it past the middle.
export function tooltipBeside(root, mark) {
  if (!root || !mark) return null
  const box = root.getBoundingClientRect()
  const rect = mark.getBoundingClientRect()
  const top = `${rect.top - box.top}px`
  return rect.left + rect.width / 2 - box.left > box.width / 2
    ? { top, right: `${box.right - rect.left + 8}px` }
    : { top, left: `${rect.right - box.left + 8}px` }
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
