import { DndContext, DragEndEvent, closestCenter } from '@dnd-kit/core'
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import { useEffect } from 'react'
import { ProductsActions } from '../../../actions/products'
import { useTable } from '../../../context/table/table'
import { ProductsTable } from '../../../types/product'
import Row from '../row/Row'
import './table.css'
import { restrictToFirstScrollableAncestor } from '@dnd-kit/modifiers'

type TableProps = {
  productIds: string
}

const Table: React.FC<TableProps> = ({ productIds }) => {
  const { table, updateTable, updateRowsOrder } = useTable()

  useEffect(() => {
    retrieveProducts()
  }, [])

  const retrieveProducts = async () => {
    const newProducts: ProductsTable = await ProductsActions.retrieveProducts(productIds)
    updateTable(newProducts)
  }

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event
    if (!over) return

    const initialPosition = table.findIndex((row) => row.id === active.id)
    const finalPosition = table.findIndex((row) => row.id === over.id)
    updateRowsOrder(initialPosition, finalPosition)
  }

  return (
    <DndContext
      collisionDetection={closestCenter}
      modifiers={[restrictToFirstScrollableAncestor]}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={table} strategy={verticalListSortingStrategy}>
        <div role='table' className='table'>
          {table.map((row) => (
            <Row products={row.products} rowId={row.id} key={`product-row-${row.id}`} />
          ))}
        </div>
      </SortableContext>
    </DndContext>
  )
}

export default Table
