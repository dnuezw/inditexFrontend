export type Product = {
  id: string
  img: string
  name: string
  price: number
}

export type ProductsRow = {
  id: string
  products: Product[]
}

export type ProductsTable = ProductsRow[]
