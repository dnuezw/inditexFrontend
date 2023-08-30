import { ProductsTable } from '../../../types/product'
import Row from '../row/Row'

type TableProps = {
  productsTable: ProductsTable
  onUpdateProductsOrder: (rowId: string, initialPosition: number, finalPosition: number) => void
}

const Table: React.FC<TableProps> = ({ productsTable, onUpdateProductsOrder }) => {
  return (
    <div role='table'>
      {productsTable.map((row) => (
        <Row
          products={row.products}
          rowId={row.id}
          key={`product-row-${row.id}`}
          onUpdateProductsOrder={onUpdateProductsOrder}
        />
      ))}
    </div>
  )
}

export default Table
