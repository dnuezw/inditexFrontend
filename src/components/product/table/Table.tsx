import { ProductsRow } from '../../../types/product'
import Row from '../row/Row'

type TableProps = {
  productsRows: ProductsRow[]
}

const Table: React.FC<TableProps> = ({ productsRows }) => {
  return (
    <table role='table'>
      <tbody>
        {productsRows.map((row, index) => (
          <Row products={row} key={`product-row-${index}`} />
        ))}
      </tbody>
    </table>
  )
}

export default Table
