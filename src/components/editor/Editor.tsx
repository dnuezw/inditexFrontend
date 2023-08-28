import { useEffect, useState } from "react"
import { ProductsActions } from "../../actions/products"
import { Product } from "../../types/product"
import Card from "../card/Card"
import Header from "../header/Header"
import './editor.css'

const Editor: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    retrieveProducts()
  }, [])

  const retrieveProducts = async (): Promise<void> => {
    const newProducts: Product[] = await ProductsActions.retrieveProducts('')    
    setProducts(() => {
      return newProducts.map((product) => product)
    })
  }

  return (
    <>
      <Header />
      <div role='list'>
        {products.map((product) => 
          <Card product={product} key={product.name} />
        )}
      </div>
    </>
  )
}

export default Editor