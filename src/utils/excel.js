import { saveAs } from 'file-saver'
import * as XLSX from 'xlsx'
import { taiwanDate } from 'shared/format'
import { formatOrderDate, getOrderClass } from 'src/utils/orders'

function lineTotal(item) {
  return (Number(item.price) || 0) * (Number(item.quantity) || 0)
}

// Quantity/amount per product, combo usage, discounts and revenue.
export function calculateStatistics(orders) {
  const productCounts = {}
  const productCosts = {}
  const comboCounts = {}
  const comboDiscounts = {}
  let itemsTotal = 0
  let totalDiscount = 0

  orders.forEach((order) => {
    totalDiscount += Number(order.totalDiscount || 0)
    ;(order.items || []).forEach((item) => {
      productCounts[item.name] = (productCounts[item.name] || 0) + item.quantity
      productCosts[item.name] = (productCosts[item.name] || 0) + lineTotal(item)
      itemsTotal += lineTotal(item)
    })
    ;(order.appliedCombos || []).forEach((combo) => {
      const count = Number(combo.applicableCount || 1)
      comboCounts[combo.name] = (comboCounts[combo.name] || 0) + count
      comboDiscounts[combo.name] = (comboDiscounts[combo.name] || 0) + Number(combo.discount || 0) * count
    })
  })

  return {
    productCounts,
    productCosts,
    comboCounts,
    comboDiscounts,
    totalDiscount,
    totalRevenue: itemsTotal - totalDiscount
  }
}

// Orders and total amount per staff member who marked them delivered.
export function calculateDeliveryStats(orders) {
  const stats = {}
  orders
    .filter((order) => order.delivered && order.deliveryUpdatedByName)
    .forEach((order) => {
      const name = order.deliveryUpdatedByName
      if (!stats[name]) stats[name] = { count: 0, totalAmount: 0 }
      stats[name].count += 1
      stats[name].totalAmount += Number(order.finalTotal || 0)
    })
  return stats
}

function summarySheet(orders, onlyDelivered) {
  const stats = calculateStatistics(orders)
  const rows = []

  Object.entries(stats.productCounts).forEach(([name, total]) => {
    rows.push({ 項目名稱: name, 總數量: total, 總金額: stats.productCosts[name] || 0, 類型: '商品' })
  })
  Object.entries(stats.comboCounts).forEach(([name, count]) => {
    rows.push({ 項目名稱: name, 總數量: count, 總金額: -stats.comboDiscounts[name], 類型: '套餐' })
  })

  rows.push({})
  rows.push({ 項目名稱: '折扣總額', 總數量: '-', 總金額: stats.totalDiscount })
  rows.push({ 項目名稱: '總營收', 總數量: '-', 總金額: stats.totalRevenue })

  const deliveryStats = onlyDelivered ? calculateDeliveryStats(orders) : {}
  if (Object.keys(deliveryStats).length > 0) {
    rows.push({})
    rows.push({ 項目名稱: '=== 交貨人員統計 ===', 總數量: '', 總金額: '' })
    Object.entries(deliveryStats).forEach(([name, s]) => {
      rows.push({ 項目名稱: `${name} (交貨員)`, 總數量: `${s.count} 筆訂單`, 總金額: `NT$ ${s.totalAmount}`, 類型: '交貨統計' })
    })
  }

  return XLSX.utils.json_to_sheet(rows)
}

// One row per item; the order columns are merged across an order's rows.
function ordersSheet(orders) {
  const rows = []
  const merges = []

  orders.forEach((order) => {
    const orderColumns = {
      訂單ID: order.id,
      建立時間: formatOrderDate(order.createdAt),
      訂單原價: order.originalTotal,
      組合包: (order.appliedCombos || []).map((c) => `${c.name} x ${c.applicableCount}`).join(', '),
      折扣金額: order.totalDiscount,
      訂單總金額: order.finalTotal,
      交貨狀態: order.delivered ? '已交貨' : '未交貨',
      付款狀態: order.paid ? '已付款' : '未付款',
      交貨更新時間: formatOrderDate(order.deliveryUpdatedAt),
      付款更新時間: formatOrderDate(order.paymentUpdatedAt),
      更新者: order.deliveryUpdatedByName || '',
      客戶姓名: order.customerName || '',
      電話: order.customerPhone || '',
      Email: order.customerEmail || '',
      學校: order.school || '',
      班級: getOrderClass(order),
      座號: order.number || '',
      辦公室: order.office || ''
    }
    const items = order.items || []
    const startRow = rows.length + 1 // row 0 is the header

    if (items.length > 1) {
      Object.keys(orderColumns).forEach((_, col) => {
        merges.push({ s: { r: startRow, c: col }, e: { r: startRow + items.length - 1, c: col } })
      })
    }

    const blankOrderColumns = Object.fromEntries(Object.keys(orderColumns).map((key) => [key, '']))
    items.forEach((item, index) => {
      rows.push({
        ...(index === 0 ? orderColumns : blankOrderColumns),
        商品名稱: item.name,
        數量: item.quantity,
        單價: item.price,
        小計: lineTotal(item)
      })
    })
  })

  const sheet = XLSX.utils.json_to_sheet(rows)
  if (merges.length > 0) sheet['!merges'] = merges
  return sheet
}

// Per school: item quantities for each class, with a total row on top.
function schoolSheets(orders) {
  const schoolData = {}
  const allItems = new Set()

  orders.forEach((order) => {
    if (!order.school) return
    const classKey = getOrderClass(order) || order.office || '(無班級)'
    schoolData[order.school] ??= {}
    schoolData[order.school][classKey] ??= {}
    ;(order.items || []).forEach((item) => {
      allItems.add(item.name)
      const row = schoolData[order.school][classKey]
      row[item.name] = (row[item.name] || 0) + item.quantity
    })
  })

  const sortedItems = [...allItems].sort()
  return Object.entries(schoolData).map(([school, classData]) => {
    const sortedClasses = Object.keys(classData).sort()
    const totals = { 班級: '合計' }
    sortedItems.forEach((item) => {
      totals[item] = sortedClasses.reduce((sum, classKey) => sum + (classData[classKey][item] || 0), 0)
    })
    const classRows = sortedClasses.map((classKey) => ({
      班級: classKey,
      ...Object.fromEntries(sortedItems.map((item) => [item, classData[classKey][item] || 0]))
    }))
    // Sheet names: max 31 chars, no / \ ? * : [ ]
    return [school.replace(/[/\\?*:[\]]/g, '').slice(0, 31), XLSX.utils.json_to_sheet([totals, ...classRows])]
  })
}

export function exportOrdersToExcel(orders, { onlyDelivered = false, school = 'all' } = {}) {
  const workbook = XLSX.utils.book_new()
  const sheetPrefix = onlyDelivered ? '已交貨' : '全部'

  XLSX.utils.book_append_sheet(workbook, summarySheet(orders, onlyDelivered), `${sheetPrefix}商品統計`)
  XLSX.utils.book_append_sheet(workbook, ordersSheet(orders), `${sheetPrefix}訂單明細`)
  schoolSheets(orders).forEach(([name, sheet]) => XLSX.utils.book_append_sheet(workbook, sheet, name))

  const schoolPrefix = school !== 'all' ? `${school}_` : ''
  const filename = `${schoolPrefix}${onlyDelivered ? '已交貨' : ''}訂單統計_${taiwanDate()}.xlsx`
  const buffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' })
  saveAs(new Blob([buffer], { type: 'application/octet-stream' }), filename)
}
