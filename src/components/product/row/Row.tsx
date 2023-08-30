import { DndContext, DragEndEvent, closestCenter } from '@dnd-kit/core'
import { SortableContext, horizontalListSortingStrategy } from '@dnd-kit/sortable'
import Settings from '../../../infraestructure/settings'
import { Product } from '../../../types/product'
import Column from '../column/Column'
import { useTable } from '../../../context/table/table'

type RowProps = {
  products: Product[]
  rowId: string
}

const Row: React.FC<RowProps> = ({ products, rowId }) => {
  const { updateProductsOrder } = useTable()

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event
    if (!over) return

    const initialPosition = products.findIndex((product) => product.id === active.id)
    const finalPosition = products.findIndex((product) => product.id === over.id)
    updateProductsOrder(rowId, initialPosition, finalPosition)
  }

  if (products.length < Settings.rowMinProducts() || products.length > Settings.rowMaxProducts()) {
    return
  }

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={products} strategy={horizontalListSortingStrategy}>
        <div role='row'>
          {products.map((product) => (
            <Column product={product} key={product.name} />
          ))}
        </div>
      </SortableContext>
    </DndContext>
  )
}

export default Row
