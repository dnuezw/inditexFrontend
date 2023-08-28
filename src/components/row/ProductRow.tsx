import Settings from "../../infraestructure/settings"
import { Product } from "../../types/product"
import Card from "../card/Card"

type ProductRowProps = {
  products: Product[]
}

const ProductRow: React.FC<ProductRowProps> = ({products}) => {
  if(products.length < Settings.rowMinProducts() || 
    products.length > Settings.rowMaxProducts()) {
    return
  }

  return (
    <div role='list'>
      {products.map((product) => (
        <Card product={product} key={product.name}/>
      ))}
    </div>
  )
}

export default ProductRow