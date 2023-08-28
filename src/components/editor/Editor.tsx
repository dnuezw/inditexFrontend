import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ProductsActions } from "../../actions/products"
import { Product } from "../../types/product"
import Header from "../header/Header"
import ProductRow from "../row/ProductRow"
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
      <ProductRow products={products}/>
    </>
  )
}

export default Editor