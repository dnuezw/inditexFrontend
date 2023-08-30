import { useEffect } from 'react'
import { ProductsActions } from '../../../actions/products'
import { useTable } from '../../../context/table/table'
import { ProductsTable } from '../../../types/product'
import Row from '../row/Row'

type TableProps = {
  productIds: string
}

const Table: React.FC<TableProps> = ({ productIds }) => {
  const { table, updateTable, updateProductsOrder } = useTable()

  useEffect(() => {
    retrieveProducts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const retrieveProducts = async () => {
    const newProducts: ProductsTable = await ProductsActions.retrieveProducts(productIds)
    updateTable(newProducts)
  }

  const handleUpdateProductsOrder = (
    rowId: string,
    initialPosition: number,
    finalPosition: number
  ) => {
    updateProductsOrder(rowId, initialPosition, finalPosition)
  }

  return (
    <div role='table'>
      {table.map((row) => (
        <Row
          products={row.products}
          rowId={row.id}
          key={`product-row-${row.id}`}
          onUpdateProductsOrder={handleUpdateProductsOrder}
        />
      ))}
    </div>
  )
}

export default Table
