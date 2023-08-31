import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useEffect } from 'react'
import { TableProvider } from '../../src/context/table/TableProvider'
import { useTable } from '../../src/context/table/table'
import { ProductsFixture } from '../fixtures/products'

describe('TableProvider', () => {
  it('renders products data', () => {
    SUT.render()

    expect(SUT.productImage()).toBeInTheDocument()
    expect(SUT.productName()).toBeInTheDocument()
    expect(SUT.productPrice()).toBeInTheDocument()
  })

  it('reorders two rows', async () => {
    SUT.render()

    const products = SUT.allProducts()
    expect(products[0].compareDocumentPosition(products[1])).toEqual(4)

    await SUT.swapColumns()
    expect(products[0].compareDocumentPosition(products[1])).toEqual(2)
  })
})

class SUT {
  static render() {
    render(
      <TableProvider>
        <Test />
      </TableProvider>
    )
  }

  static productImage(): HTMLElement {
    return screen.getByText('an image')
  }

  static productName(): HTMLElement {
    return screen.getByText('a name')
  }

  static productPrice(): HTMLElement {
    return screen.getByText('1')
  }

  static allProducts(): HTMLElement[] {
    return screen.getAllByRole('gridcell')
  }

  static async swapColumns(): Promise<void> {
    await userEvent.click(screen.getByRole('button'))
  }
}

const Test: React.FC = () => {
  const { table, updateTable, updateProductsOrder } = useTable()

  useEffect(() => {
    updateTable(ProductsFixture.twoProductsTable)
  }, [])

  const handleClick = () => {
    updateProductsOrder(ProductsFixture.aRowId, 0, 1)
  }

  return (
    <>
      {table.map((row) => (
        <div key={row.id}>
          {row.products.map((product) => (
            <div key={product.id} role='gridcell'>
              <p>{product.name}</p>
              <p>{product.img}</p>
              <p>{product.price}</p>
            </div>
          ))}
        </div>
      ))}
      <button onClick={handleClick}></button>
    </>
  )
}
