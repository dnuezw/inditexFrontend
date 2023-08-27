import { render, screen, within } from "@testing-library/react"
import App from "../src/App"

vi.mock('/src/common/product', () => {
  return {
    products: [
      {
        img: 'an img',
        name: 'a name',
        price: 1
      },
      {
        img: 'another img',
        name: 'another name',
        price: 2
      }
    ]
  }
})

describe('App', () => {
  it('renders multiple products', () => {
    SUT.render()

    const cardList = screen.getByRole('list')
    expect(SUT.allProductsImagesFrom(cardList).length).toEqual(2)
    expect(SUT.allProductsNamesFrom(cardList).length).toEqual(2)
    expect(SUT.allProductsPricesFrom(cardList).length).toEqual(2)
  })
})

class SUT {
  static render(): void {
    render(<App />)
  }

  static allProductsImagesFrom(node: HTMLElement): HTMLElement[] {
    return within(node).getAllByRole('img')
  }

  static allProductsNamesFrom(node: HTMLElement): HTMLElement[] {
    return within(node).getAllByRole('heading')
  }

  static allProductsPricesFrom(node: HTMLElement): HTMLElement[] {
    return within(node).getAllByRole('paragraph')
  }
}