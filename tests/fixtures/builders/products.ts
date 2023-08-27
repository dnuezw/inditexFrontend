import { Product } from "../../../src/types/product";

export class ProductsBuilder {
  product: Product = {
    img: 'an image',
    name: 'a name',
    price: 1
  }

  img(newImg: string): ProductsBuilder {
    this.product.img = newImg
    return this
  }

  name(newName: string): ProductsBuilder {
    this.product.name = newName
    return this
  }

  price(newPrice: number): ProductsBuilder {
    this.product.price = newPrice
    return this
  }

  build(): Product {
    return this.product
  }

  with(): ProductsBuilder {
    return this
  }

  and(): ProductsBuilder {
    return this
  }
}