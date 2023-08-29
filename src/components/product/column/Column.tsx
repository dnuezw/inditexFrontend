import { Product } from '../../../types/product'
import './column.css'

type ColumnProps = {
  product: Product
}

const Column: React.FC<ColumnProps> = ({ product }) => {
  return (
    <td role='gridcell' className='column' key={product.name}>
      <img src={product.img} alt={product.name}></img>
      <h1>{product.name}</h1>
      <p role='paragraph'>{product.price}</p>
    </td>
  )
}

export default Column
