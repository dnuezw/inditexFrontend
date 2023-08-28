import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ProductsActions } from "../../actions/products"
import { Product } from "../../types/product"
import Card from "../card/Card"
import Header from "../header/Header"
import './editor.css'

type EditorParams = {
  ids: string
}

const Editor: React.FC = () => {
  const { ids } = useParams<EditorParams>()
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    retrieveProducts()
  }, [ids])

  const retrieveProducts = async (): Promise<void> => {    
    const newProducts: Product[] = await ProductsActions.retrieveProducts(ids!)    
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