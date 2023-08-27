import { render, screen, within } from "@testing-library/react"
import App from "../src/App"
import { titles } from "../src/common/titles"

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

describe("App", () => {
  it("renders app header with title", () => {
    SUT.render()

    expect(SUT.appTitle()).toBeInTheDocument()
  })

  it("renders article title", () => {
    SUT.render()

    expect(SUT.articleTitle()).toBeInTheDocument()
  })

  it('renders a product', () => {
    SUT.render()

    expect(SUT.productImage()).toBeInTheDocument()
    expect(SUT.productName()).toBeInTheDocument()
    expect(SUT.productPrice()).toBeInTheDocument()
  })

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

  static appTitle(): HTMLElement {
    return screen.getByRole('heading', {name: titles.app})
  }

  static articleTitle(): HTMLElement {
    return screen.getByRole('heading', {name: titles.product})
  }

  static productImage(): HTMLElement {
    return screen.getByAltText('a name')
  }

  static productName(): HTMLElement {
    return screen.getByRole('heading', {name: 'a name'})
  }

  static productPrice(): HTMLElement {
    return screen.getByText(1)
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