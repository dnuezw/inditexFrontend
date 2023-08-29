import { ProductsRow } from '../../../types/product'
import Row from '../row/Row'

type TableProps = {
  productsRows: ProductsRow[]
}

const Table: React.FC<TableProps> = ({ productsRows }) => {
  return (
    <div>
      {productsRows.map((row, index) => (
        <Row products={row} key={`product-row-${index}`} />
      ))}
    </div>
  )
}

export default Table
