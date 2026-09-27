// Product catalog, prices and schools.
//
// This folder is shared by the web app (imported as `shared/...`) and the
// Cloud Functions, which re-check every order against these prices. Edit the
// catalog here only; both sides pick up the change.

export const MAX_ITEM_QUANTITY = 99

// Buying items whose `no` is listed here lets one of them be free once the
// rest of the order reaches GIFT_THRESHOLD.
export const GIFT_ITEM_NOS = [7]
export const GIFT_THRESHOLD = 1000

// Combo deals. Empty = no combos this year. Shape:
// { id: 'combo1', name: '套餐A', items: [1, 2, 2], discount: 150,
//   comboPrice: 1200, originalPrice: 1350, showdiscount: 150, note: '' }
// `items` lists product `no`s; repeat a number to require it more than once.
export const comboDeals = []

// Cards on the home page. `id` is also the product page URL and image name
// (public/images/product-<id>.png).
export const products = [
  { id: '1', no: 1, name: '衝鋒外套', category: '衝鋒外套', price: 700, orPrice: 900 },
  { id: '2', no: 2, name: '短踢', category: '短踢', price: 300, orPrice: 500 },
  { id: '3', no: 3, name: '飲料提袋', category: '飲料提袋', price: 200, orPrice: 400 },
  { id: '4', no: 4, name: '帆布袋', category: '帆布袋', price: 200, orPrice: 400 },
  { id: '5_1', no: 7, name: 'Q版建中生', category: '鑰匙圈', price: 50, orPrice: 50 },
  { id: '5_2', no: 7, name: '建中校徽', category: '鑰匙圈', price: 50, orPrice: 50 }
]

// Size charts (cm). `productId` is the id of the variant added to the cart.
const jacketSizes = [
  { size: 'M', length: 67, sleeve: 60, chest: 106, shoulder: 44, productId: '1_1' },
  { size: 'L', length: 69, sleeve: 62.5, chest: 110, shoulder: 45.5, productId: '1_2' },
  { size: 'XL', length: 71, sleeve: 64, chest: 114, shoulder: 47, productId: '1_3' },
  { size: '2XL', length: 73, sleeve: 65.5, chest: 118, shoulder: 48.5, productId: '1_4' },
  { size: '3XL', length: 75, sleeve: 67, chest: 122, shoulder: 50, productId: '1_5' },
  { size: '4XL', length: 77, sleeve: 68.5, chest: 126, shoulder: 51.5, productId: '1_6' },
  { size: '5XL', length: 78.5, sleeve: 69, chest: 131, shoulder: 53, productId: '1_7' }
]

const teeSizes = [
  { size: 'S', length: 63, sleeve: 20, chest: 46, shoulder: 44, productId: '2_1' },
  { size: 'M', length: 65, sleeve: 20.5, chest: 48, shoulder: 47, productId: '2_2' },
  { size: 'L', length: 68, sleeve: 21, chest: 51, shoulder: 50, productId: '2_3' },
  { size: 'XL', length: 71, sleeve: 21.5, chest: 54, shoulder: 53, productId: '2_4' },
  { size: '2XL', length: 73, sleeve: 22, chest: 57, shoulder: 56, productId: '2_5' },
  { size: '3XL', length: 75, sleeve: 22.5, chest: 60, shoulder: 59, productId: '2_6' },
  { size: '4XL', length: 77, sleeve: 23, chest: 63, shoulder: 62, productId: '2_7' }
]

function sizedProduct({ no, title, price, orPrice, imageId, sizes }) {
  return {
    type: 'sized',
    title,
    price,
    orPrice,
    imageId,
    sizeData: sizes,
    variants: sizes.map((row) => ({ id: row.productId, no, name: `${title}${row.size}`, price, orPrice }))
  }
}

function simpleProduct({ id, no, title, price, orPrice, imageId = id }) {
  return {
    type: 'simple',
    title,
    price,
    orPrice,
    imageId,
    product: { id, no, name: title, price, orPrice }
  }
}

const keychains = {
  type: 'multi',
  title: '鑰匙圈',
  price: 50,
  variants: [
    { id: '5_1', no: 7, name: 'Q版建中生', price: 50, orPrice: 50 },
    { id: '5_2', no: 7, name: '建中校徽', price: 50, orPrice: 50 }
  ]
}

// Product pages, keyed by the id in /product/:id.
export const productPageConfigs = {
  1: sizedProduct({ no: 1, title: '衝鋒外套', price: 700, orPrice: 900, imageId: '1', sizes: jacketSizes }),
  2: sizedProduct({ no: 2, title: '短踢', price: 300, orPrice: 500, imageId: '2', sizes: teeSizes }),
  3: simpleProduct({ id: '3', no: 3, title: '飲料提袋', price: 200, orPrice: 400 }),
  4: simpleProduct({ id: '4', no: 4, title: '帆布袋', price: 200, orPrice: 400 }),
  '5_1': keychains,
  '5_2': keychains
}

function pageItems(config) {
  if (config.type === 'simple') return [config.product]
  return config.variants
}

// Everything that can be put in the cart, keyed by item id.
const purchasableItems = new Map(
  Object.values(productPageConfigs).flatMap(pageItems).map((item) => [item.id, item])
)

export function findPurchasableItem(id) {
  return purchasableItems.get(String(id)) || null
}

// School -> prefix used in order IDs (e.g. CKS202611050001).
export const SCHOOL_CODES = {
  建國中學: 'CKS',
  北一女中: 'TFG',
  中山女高: 'ZS',
  景美女中: 'JM',
  成功高中: 'CG',
  師大附中: 'HSNU',
  建中家長會: 'CKP',
  建中老師: 'CKT',
  其他學校或社會人士: 'O'
}

export const schools = Object.keys(SCHOOL_CODES)

// Which extra checkout fields a school needs: students give class + seat
// number, teachers give their office, everyone else gives neither.
export function schoolFields(school) {
  if (school === '建中老師') return { needsClass: false, needsOffice: true }
  if (school === '建中家長會' || school === '其他學校或社會人士') {
    return { needsClass: false, needsOffice: false }
  }
  return { needsClass: true, needsOffice: false }
}
