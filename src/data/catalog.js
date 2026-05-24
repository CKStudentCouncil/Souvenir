export const products = [
  { id: 1, textid: '1', no: 1, name: '棒球外套', price: 700, orPrice: 900, category: '棒球外套' },
  { id: '2_1', textid: '2_1', no: 2, name: '深藍色短踢', price: 300, orPrice: 500, category: '短踢' },
  { id: '2_2', textid: '2_2', no: 2, name: '白色短踢', price: 300, orPrice: 500, category: '短踢' },
  { id: '2_3', textid: '2_3', no: 2, name: '黑色短踢', price: 300, orPrice: 500, category: '短踢' },
  { id: 3, textid: '3', no: 3, name: '真皮證件套', price: 200, orPrice: 400, category: '證件套' },
  { id: '4_1', textid: '4_1', no: 4, name: '白色帽踢', price: 650, orPrice: 850, category: '帽踢' },
  { id: '4_2', textid: '4_2', no: 4, name: '黑色帽踢', price: 650, orPrice: 850, category: '帽踢' },
  { id: 5, textid: '5', no: 5, name: '雙色毛巾', price: 200, orPrice: 400, category: '毛巾' },
  { id: 6, textid: '6', no: 6, name: '黑色側背包', price: 750, orPrice: 950, category: '側背包' },
  { id: '7_1', textid: '7_1', no: 7, name: '不得外出鑰匙圈', price: 50, orprice: 50, category: '鑰匙圈' },
  { id: '7_2', textid: '7_2', no: 7, name: 'CKHS鑰匙圈', price: 50, orprice: 50, category: '鑰匙圈' },
  { id: 8, textid: '8', no: 8, name: '圓形徽章', price: 50, orprice: 50, category: '徽章' }
]

export const comboDeals = [
  {
    id: 'combo1',
    name: '套餐A',
    items: [2, 5],
    originalPrice: 750,
    comboPrice: 400,
    showdiscount: 350,
    discount: 100
  },
  {
    id: 'combo2',
    name: '套餐B',
    items: [1, 2, 2, 4],
    originalPrice: 2750,
    comboPrice: 1800,
    showdiscount: 950,
    discount: 150,
    note: '需兩件短踢，款式不限'
  },
  {
    id: 'combo3',
    name: '套餐C',
    items: [1, 2, 2, 3, 4, 5, 6, 8],
    originalPrice: 4550,
    comboPrice: 2800,
    showdiscount: 1750,
    discount: 350,
    note: '需兩件短踢，款式不限'
  }
]

export const sizeData1 = [
  { size: 'S', length: 64, sleeve: 51, chest: 114, shoulder: 50, productId: '1_1' },
  { size: 'M', length: 66, sleeve: 53, chest: 118, shoulder: 52, productId: '1_2' },
  { size: 'L', length: 68, sleeve: 55, chest: 122, shoulder: 54, productId: '1_3' },
  { size: 'XL', length: 70, sleeve: 57, chest: 126, shoulder: 56, productId: '1_4' },
  { size: '2L', length: 72, sleeve: 59, chest: 130, shoulder: 58, productId: '1_5' }
]

export const sizeData2_1 = [
  { size: 'S', length: 65, sleeve: 19, chest: 49, shoulder: 42, productId: '2_1' },
  { size: 'M', length: 69, sleeve: 20, chest: 52, shoulder: 46, productId: '2_2' },
  { size: 'L', length: 73, sleeve: 22, chest: 55, shoulder: 50, productId: '2_3' },
  { size: 'XL', length: 77, sleeve: 24, chest: 58, shoulder: 54, productId: '2_4' },
  { size: '2L', length: 81, sleeve: 25, chest: 63, shoulder: 57, productId: '2_5' }
]

export const sizeData2_2 = [
  { size: 'S', length: 65, sleeve: 19, chest: 49, shoulder: 42, productId: '2_6' },
  { size: 'M', length: 69, sleeve: 20, chest: 52, shoulder: 46, productId: '2_7' },
  { size: 'L', length: 73, sleeve: 22, chest: 55, shoulder: 50, productId: '2_8' },
  { size: 'XL', length: 77, sleeve: 24, chest: 58, shoulder: 54, productId: '2_9' },
  { size: '2L', length: 81, sleeve: 25, chest: 63, shoulder: 57, productId: '2_10' }
]

export const sizeData2_3 = [
  { size: 'S', length: 65, sleeve: 19, chest: 49, shoulder: 42, productId: '2_11' },
  { size: 'M', length: 69, sleeve: 20, chest: 52, shoulder: 46, productId: '2_12' },
  { size: 'L', length: 73, sleeve: 22, chest: 55, shoulder: 50, productId: '2_13' },
  { size: 'XL', length: 77, sleeve: 24, chest: 58, shoulder: 54, productId: '2_14' },
  { size: '2L', length: 81, sleeve: 25, chest: 63, shoulder: 57, productId: '2_15' }
]

export const sizeData4_1 = [
  { size: 'S', length: 65, sleeve: 52, chest: 110, shoulder: 56, productId: '4_1' },
  { size: 'M', length: 67, sleeve: 53, chest: 114, shoulder: 58, productId: '4_2' },
  { size: 'L', length: 69, sleeve: 54, chest: 118, shoulder: 60, productId: '4_3' },
  { size: 'XL', length: 71, sleeve: 55, chest: 122, shoulder: 62, productId: '4_4' },
  { size: '2L', length: 73, sleeve: 56, chest: 126, shoulder: 64, productId: '4_5' }
]

export const sizeData4_2 = [
  { size: 'S', length: 65, sleeve: 52, chest: 110, shoulder: 56, productId: '4_6' },
  { size: 'M', length: 67, sleeve: 53, chest: 114, shoulder: 58, productId: '4_7' },
  { size: 'L', length: 69, sleeve: 54, chest: 118, shoulder: 60, productId: '4_8' },
  { size: 'XL', length: 71, sleeve: 55, chest: 122, shoulder: 62, productId: '4_9' },
  { size: '2L', length: 73, sleeve: 56, chest: 126, shoulder: 64, productId: '4_10' }
]

export const product1s = [
  { id: '1_1', no: 1, name: '棒球外套S', price: 700, orPrice: 900 },
  { id: '1_2', no: 1, name: '棒球外套M', price: 700, orPrice: 900 },
  { id: '1_3', no: 1, name: '棒球外套L', price: 700, orPrice: 900 },
  { id: '1_4', no: 1, name: '棒球外套XL', price: 700, orPrice: 900 },
  { id: '1_5', no: 1, name: '棒球外套XXL', price: 700, orPrice: 900 }
]

export const product2_1s = [
  { id: '2_1', no: 2, name: '深藍色短踢-S', price: 300, orPrice: 500 },
  { id: '2_2', no: 2, name: '深藍色短踢-M', price: 300, orPrice: 500 },
  { id: '2_3', no: 2, name: '深藍色短踢-L', price: 300, orPrice: 500 },
  { id: '2_4', no: 2, name: '深藍色短踢-XL', price: 300, orPrice: 500 },
  { id: '2_5', no: 2, name: '深藍色短踢-2L', price: 300, orPrice: 500 }
]

export const product2_2s = [
  { id: '2_6', no: 2, name: '白色短踢-S', price: 300, orPrice: 500 },
  { id: '2_7', no: 2, name: '白色短踢-M', price: 300, orPrice: 500 },
  { id: '2_8', no: 2, name: '白色短踢-L', price: 300, orPrice: 500 },
  { id: '2_9', no: 2, name: '白色短踢-XL', price: 300, orPrice: 500 },
  { id: '2_10', no: 2, name: '白色短踢-2L', price: 300, orPrice: 500 }
]

export const product2_3s = [
  { id: '2_11', no: 2, name: '黑色短踢-S', price: 300, orPrice: 500 },
  { id: '2_12', no: 2, name: '黑色短踢-M', price: 300, orPrice: 500 },
  { id: '2_13', no: 2, name: '黑色短踢-L', price: 300, orPrice: 500 },
  { id: '2_14', no: 2, name: '黑色短踢-XL', price: 300, orPrice: 500 },
  { id: '2_15', no: 2, name: '黑色短踢-2L', price: 300, orPrice: 500 }
]

export const product4_1s = [
  { id: '4_1', no: 4, name: '白色帽踢-S', price: 650, orPrice: 850 },
  { id: '4_2', no: 4, name: '白色帽踢-M', price: 650, orPrice: 850 },
  { id: '4_3', no: 4, name: '白色帽踢-L', price: 650, orPrice: 850 },
  { id: '4_4', no: 4, name: '白色帽踢-XL', price: 650, orPrice: 850 },
  { id: '4_5', no: 4, name: '白色帽踢-2L', price: 650, orPrice: 850 }
]

export const product4_2s = [
  { id: '4_6', no: 4, name: '黑色帽踢-S', price: 650, orPrice: 850 },
  { id: '4_7', no: 4, name: '黑色帽踢-M', price: 650, orPrice: 850 },
  { id: '4_8', no: 4, name: '黑色帽踢-L', price: 650, orPrice: 850 },
  { id: '4_9', no: 4, name: '黑色帽踢-XL', price: 650, orPrice: 850 },
  { id: '4_10', no: 4, name: '黑色帽踢-2L', price: 650, orPrice: 850 }
]

export const productPageConfigs = {
  1: {
    type: 'sized',
    title: '棒球外套',
    orPrice: 900,
    price: 700,
    imageId: '1',
    sizeData: sizeData1,
    variants: product1s
  },
  '2_1': {
    type: 'sized',
    title: '深藍色短踢',
    orPrice: 500,
    price: 300,
    imageId: '2_1',
    sizeData: sizeData2_1,
    variants: product2_1s
  },
  '2_2': {
    type: 'sized',
    title: '白色短踢',
    orPrice: 500,
    price: 300,
    imageId: '2_2',
    sizeData: sizeData2_2,
    variants: product2_2s
  },
  '2_3': {
    type: 'sized',
    title: '黑色短踢',
    orPrice: 500,
    price: 300,
    imageId: '2_3',
    sizeData: sizeData2_3,
    variants: product2_3s
  },
  3: {
    type: 'simple',
    product: { no: 3, id: 3, name: '真皮證件套', price: 200, orPrice: 400 },
    orPrice: 400,
    price: 200,
    imageId: '3'
  },
  '4_1': {
    type: 'sized',
    title: '白色帽踢',
    orPrice: 850,
    price: 650,
    imageId: '4_1',
    sizeData: sizeData4_1,
    variants: product4_1s
  },
  '4_2': {
    type: 'sized',
    title: '黑色帽踢',
    orPrice: 850,
    price: 650,
    imageId: '4_2',
    sizeData: sizeData4_2,
    variants: product4_2s
  },
  5: {
    type: 'simple',
    product: { no: 5, id: 5, name: '雙色毛巾', price: 200, orPrice: 400 },
    orPrice: 400,
    price: 200,
    imageId: '5'
  },
  6: {
    type: 'simple',
    product: { no: 6, id: 6, name: '黑色側背包', price: 750, orPrice: 950 },
    orPrice: 950,
    price: 750,
    imageId: '6'
  },
  '7_1': {
    type: 'multi',
    title: '鑰匙圈',
    price: 50,
    variants: [
      { id: '7_1', no: 7, name: '不得外出鑰匙圈', price: 50, orPrice: 50 },
      { id: '7_2', no: 7, name: 'CKHS鑰匙圈', price: 50, orPrice: 50 }
    ]
  },
  '7_2': {
    type: 'multi',
    title: '鑰匙圈',
    price: 50,
    variants: [
      { id: '7_1', no: 7, name: '不得外出鑰匙圈', price: 50, orPrice: 50 },
      { id: '7_2', no: 7, name: 'CKHS鑰匙圈', price: 50, orPrice: 50 }
    ]
  },
  8: {
    type: 'simple',
    product: { no: 8, id: 8, name: '圓形徽章', price: 50, orPrice: 50 },
    orPrice: 50,
    price: 50,
    imageId: '8',
    hideOrPrice: true
  }
}

export const schools = [
  '建國中學',
  '北一女中',
  '中山女高',
  '景美女中',
  '成功高中',
  '師大附中',
  '建中家長會',
  '其他學校或社會人士'
]
