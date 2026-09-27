import { comboDeals, GIFT_ITEM_NOS, GIFT_THRESHOLD } from './catalog.js'

function countByNo(cartItems) {
  const quantities = {}
  cartItems.forEach((item) => {
    if (item.no) {
      quantities[item.no] = (quantities[item.no] || 0) + item.quantity
    }
  })
  return quantities
}

function requiredQuantities(combo) {
  const required = {}
  combo.items.forEach((no) => {
    required[no] = (required[no] || 0) + 1
  })
  return required
}

function maxApplications(required, quantities) {
  return Math.min(
    ...Object.entries(required).map(([no, qty]) => Math.floor((quantities[no] || 0) / qty))
  )
}

// Picks the combination of combo deals that gives the biggest discount.
export function checkComboDeals(cartItems) {
  const itemQuantities = countByNo(cartItems)

  const possibleCombos = comboDeals
    .map((combo) => ({ ...combo, requiredQuantities: requiredQuantities(combo) }))
    .filter((combo) => maxApplications(combo.requiredQuantities, itemQuantities) > 0)

  const findOptimalCombination = (combos, quantities) => {
    let bestResult = { totalDiscount: 0, appliedCombos: [], remainingItems: quantities }

    combos.forEach((combo) => {
      for (let count = maxApplications(combo.requiredQuantities, quantities); count >= 1; count--) {
        const newQuantities = { ...quantities }
        Object.entries(combo.requiredQuantities).forEach(([no, qty]) => {
          newQuantities[no] -= qty * count
        })

        const remainingCombos = combos.filter((c) => c.id !== combo.id)
        const rest = findOptimalCombination(remainingCombos, newQuantities)
        const totalDiscount = combo.discount * count + rest.totalDiscount

        if (totalDiscount > bestResult.totalDiscount) {
          bestResult = {
            totalDiscount,
            appliedCombos: [{ ...combo, applicableCount: count }, ...rest.appliedCombos],
            remainingItems: rest.remainingItems
          }
        }
      }
    })

    return bestResult
  }

  return findOptimalCombination(possibleCombos, itemQuantities)
}

export function calculatePricing(cartItems, options = {}) {
  const { usePRPackage = false, isAdmin = false } = options
  const originalTotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  if (isAdmin && usePRPackage) {
    return {
      originalTotal,
      finalTotal: 0,
      totalDiscount: 0,
      appliedCombos: [],
      prPackageApplied: true,
      prPackageDiscount: originalTotal,
      qualifiesForGift: false,
      giftDiscount: 0,
      hasAvailableGift: false,
      amountNeededForGift: 0
    }
  }

  const comboResult = checkComboDeals(cartItems)
  const giftItems = cartItems.filter((item) => GIFT_ITEM_NOS.includes(item.no))
  const totalGiftQuantity = giftItems.reduce((sum, item) => sum + item.quantity, 0)
  const giftUsedInCombo = comboResult.appliedCombos.reduce(
    (sum, combo) =>
      sum + combo.items.filter((no) => GIFT_ITEM_NOS.includes(no)).length * combo.applicableCount,
    0
  )
  const hasAvailableGift = totalGiftQuantity - giftUsedInCombo > 0

  const totalAfterCombo = originalTotal - comboResult.totalDiscount
  // One gift item is free when the rest of the order reaches the threshold.
  const giftPrice = hasAvailableGift ? giftItems[0].price : 0
  const qualifiesForGift = hasAvailableGift && totalAfterCombo - giftPrice >= GIFT_THRESHOLD
  const giftDiscount = qualifiesForGift ? giftPrice : 0

  return {
    originalTotal,
    finalTotal: totalAfterCombo - giftDiscount,
    totalDiscount: comboResult.totalDiscount,
    appliedCombos: comboResult.appliedCombos,
    prPackageApplied: false,
    prPackageDiscount: 0,
    qualifiesForGift,
    giftDiscount,
    hasAvailableGift,
    amountNeededForGift: Math.max(0, GIFT_THRESHOLD - (totalAfterCombo - giftPrice))
  }
}
