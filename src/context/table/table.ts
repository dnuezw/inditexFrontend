import { Context, createContext, useContext } from 'react'
import { ProductsTable } from '../../types/product'

export interface TableContextType {
  table: ProductsTable
  updateTable: (newTable: ProductsTable) => void
  updateProductsOrder: (rowId: string, initialPosition: number, finalPosition: number) => void
  updateRowsOrder: (initialPosition: number, finalPosition: number) => void
}

const emptyTable: TableContextType = {
  table: [],
  updateTable: () => {},
  updateProductsOrder: () => {},
  updateRowsOrder: () => {}
}

export const TableContext: Context<TableContextType> = createContext<TableContextType>(emptyTable)

const useTable = (): TableContextType => {
  return useContext(TableContext)
}

export { useTable }
