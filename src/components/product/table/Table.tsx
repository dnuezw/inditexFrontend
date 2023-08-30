import { useEffect } from 'react'
import { ProductsActions } from '../../../actions/products'
import { useTable } from '../../../context/table/table'
import { ProductsTable } from '../../../types/product'
import Row from '../row/Row'

type TableProps = {
  productIds: string
}

const Table: React.FC<TableProps> = ({ productIds }) => {
  const { table, updateTable } = useTable()

  useEffect(() => {
    retrieveProducts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const retrieveProducts = async () => {
    const newProducts: ProductsTable = await ProductsActions.retrieveProducts(productIds)
    updateTable(newProducts)
  }

  return (
    <div role='table'>
      {table.map((row) => (
        <Row products={row.products} rowId={row.id} key={`product-row-${row.id}`} />
      ))}
    </div>
  )
}

export default Table
