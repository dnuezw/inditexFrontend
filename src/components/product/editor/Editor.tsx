import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ProductsActions } from '../../../actions/products'
import { ProductsRow } from '../../../types/product'
import Header from '../../header/Header'
import Row from '../row/Row'
import './editor.css'

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
        return <Row products={row} key={`product-row-${index}`} />
      })}
    </>
  )
}

export default Editor
