import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ProductsActions } from '../../../actions/products'
import { titles } from '../../../common/titles'
import { ProductsRow } from '../../../types/product'
import Table from '../table/Table'
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
    <div className='editor'>
      <h1>{titles.product}</h1>
      <Table productsRows={productsRows} />
    </div>
  )
}

export default Editor
