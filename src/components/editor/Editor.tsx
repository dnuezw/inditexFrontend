import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ProductsActions } from '../../actions/products'
import { ProductsRow } from '../../types/product'
import Header from '../header/Header'
import './editor.css'
import ProductRow from '../row/ProductRow'

type EditorParams = {
  ids: string
}

const Editor: React.FC = () => {
  const { ids } = useParams<EditorParams>()
  const [productsRows, setProductsRows] = useState<ProductsRow[]>([])

  const retrieveProducts = useCallback(async () => {
    const newProducts: ProductsRow[] = await ProductsActions.retrieveProducts(ids!)
    setProductsRows(() => {
      return newProducts.map((product) => product)
    })
  }, [ids])

  useEffect(() => {
    retrieveProducts()
  }, [retrieveProducts])

  return (
    <>
      <Header />
      {productsRows.map((row, index) => {
        return <ProductRow products={row} key={`product-row-${index}`} />
      })}
    </>
  )
}

export default Editor
