import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ProductsActions } from '../../../actions/products'
import { titles } from '../../../common/titles'
import { ProductsTable } from '../../../types/product'
import Table from '../table/Table'
import './editor.css'

type EditorParams = {
  ids: string
}

const Editor: React.FC = () => {
  const { ids } = useParams<EditorParams>()
  const [productsTable, setProductsTable] = useState<ProductsTable>()

  const retrieveProducts = useCallback(async () => {
    const newProducts: ProductsTable = await ProductsActions.retrieveProducts(ids!)
    setProductsTable(() => {
      return newProducts.map((product) => product)
    })
  }, [ids])

  useEffect(() => {
    retrieveProducts()
  }, [retrieveProducts])

  if (!productsTable) return <></>

  const handleUpdateProductsOrder = (
    rowId: string,
    initialPosition: number,
    finalPosition: number
  ) => {
    const productsTableCopy: ProductsTable = JSON.parse(JSON.stringify(productsTable))
    const rowPosition = productsTableCopy.findIndex((row) => row.id === rowId)

    const products = productsTableCopy[rowPosition].products
    const secondProduct = products[finalPosition]
    products[finalPosition] = products[initialPosition]
    products[initialPosition] = secondProduct

    setProductsTable(productsTableCopy)
  }

  return (
    <div className='editor'>
      <h1>{titles.product}</h1>
      <Table productsTable={productsTable} onUpdateProductsOrder={handleUpdateProductsOrder} />
    </div>
  )
}

export default Editor
