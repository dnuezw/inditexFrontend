import { Product } from '../../../types/product'
import './card.css'

type CardProps = {
  product: Product
}

const Card: React.FC<CardProps> = ({ product }) => {
  return (
    <div className='card' role='listitem' key={product.name}>
      <img src={product.img} alt={product.name}></img>
      <h1>{product.name}</h1>
      <p role='paragraph'>{product.price}</p>
    </div>
  )
}

export default Card
