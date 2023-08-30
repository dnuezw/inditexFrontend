import { useState } from 'react'
import { ProductsTable } from '../../types/product'
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
    const result: ProductsTable = JSON.parse(JSON.stringify(table))
    const rowPosition = result.findIndex((row) => row.id === rowId)

    const products = result[rowPosition].products

    const secondProduct = products[finalPosition]
    products[finalPosition] = products[initialPosition]
    products[initialPosition] = secondProduct

    updateTable(result)
  }

  const updateRowsOrder = (initialPosition: number, finalPosition: number): void => {
    const result: ProductsTable = JSON.parse(JSON.stringify(table))

    const secondRow = result[finalPosition]
    result[finalPosition] = result[initialPosition]
    result[initialPosition] = secondRow

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
