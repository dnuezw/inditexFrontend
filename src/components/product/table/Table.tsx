import { ProductsTable } from '../../../types/product'
import Row from '../row/Row'

type TableProps = {
  productsTable: ProductsTable
}

const Table: React.FC<TableProps> = ({ productsTable }) => {
  return (
    <table role='table'>
      <tbody>
        {productsTable.map((row) => (
          <Row products={row.products} key={`product-row-${row.id}`} />
        ))}
      </tbody>
    </table>
  )
}

export default Table
