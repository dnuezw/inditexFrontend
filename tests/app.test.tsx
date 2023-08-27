import { render, screen } from "@testing-library/react"
import App from "../src/App"
import { titles } from "../src/common/titles"

vi.mock('/src/common/product', () => {
  return {
    product: {
      img: 'an img',
      name: 'a name',
      price: 1
    }
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

    const productImg = screen.getByRole('img')
    const productName = screen.getByRole('heading', {name: 'a name'})
    const productPrice = screen.getByText(1)

    expect(productImg).toBeInTheDocument()
    expect(productName).toBeInTheDocument()
    expect(productPrice).toBeInTheDocument()
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
}