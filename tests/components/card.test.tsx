import { render, screen } from "@testing-library/react"
import Card from "../../src/components/card/Card"

describe('Card', () => {
  it('renders a product', () => {
    SUT.render()

    expect(SUT.productImage()).toBeInTheDocument()
    expect(SUT.productName()).toBeInTheDocument()
    expect(SUT.productPrice()).toBeInTheDocument()
  })
})

class SUT {
  static render(): void {
    render(<Card product={
      {
        img: 'an img',
        name: 'a name',
        price: 1
      }
    }/>)
  }

  static productImage(): HTMLElement {
    return screen.getByAltText('a name')
  }

  static productName(): HTMLElement {
    return screen.getByRole('heading', {name: 'a name'})
  }

  static productPrice(): HTMLElement {
    return screen.getByRole('paragraph')
  }
}