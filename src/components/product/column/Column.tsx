import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { Product } from '../../../types/product'
import './column.css'

type ColumnProps = {
  product: Product
}

const Column: React.FC<ColumnProps> = ({ product }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id: product.id
  })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition
  }

  return (
    <div
      {...attributes}
      {...listeners}
      ref={setNodeRef}
      style={style}
      role='gridcell'
      className='column'
      key={product.name}
    >
      <img src={product.img} alt={product.name}></img>
      <h1>{product.name}</h1>
      <p role='paragraph'>{product.price}</p>
    </div>
  )
}

export default Column
