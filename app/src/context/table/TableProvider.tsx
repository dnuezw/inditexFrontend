import { useState } from 'react'
import { ProductsTable } from '../../types/product'
import { reorderElementFromArray } from '../../utils/array'
import { TableContext, TableContextType } from './table'

type TableProviderProps = {
  children: React.ReactNode
}

const TableProvider: React.FC<TableProviderProps> = ({ children }) => {
  const [table, setTable] = useState<ProductsTable>([])

  const updateTable = (newTable: ProductsTable): void => {
    setTable(newTable)
  }

  const updateProductsOrder = (
    rowId: string,
    initialPosition: number,
    finalPosition: number
  ): void => {
    const tableCopy: ProductsTable = JSON.parse(JSON.stringify(table))
    const rowPosition = tableCopy.findIndex((row) => row.id === rowId)
    const products = tableCopy[rowPosition].products

    const result = reorderElementFromArray(products, initialPosition, finalPosition)
    tableCopy[rowPosition].products = result
    updateTable(tableCopy)
  }

  const updateRowsOrder = (initialPosition: number, finalPosition: number): void => {
    const tableCopy: ProductsTable = JSON.parse(JSON.stringify(table))

    const result = reorderElementFromArray(tableCopy, initialPosition, finalPosition)

    updateTable(result)
  }

  const value: TableContextType = {
    table,
    updateTable,
    updateProductsOrder,
    updateRowsOrder
  }

  return <TableContext.Provider value={value}>{children}</TableContext.Provider>
}

export { TableProvider }
