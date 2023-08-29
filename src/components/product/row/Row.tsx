import Settings from '../../../infraestructure/settings'
import { ProductsRow } from '../../../types/product'
import Column from '../column/Column'

type RowProps = {
  products: ProductsRow
}

const Row: React.FC<RowProps> = ({ products }) => {
  if (products.length < Settings.rowMinProducts() || products.length > Settings.rowMaxProducts()) {
    return
  }

  return (
    <div role='list'>
      {products.map((product) => (
        <Column product={product} key={product.name} />
      ))}
    </div>
  )
}

export default Row
