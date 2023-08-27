import { render, screen } from "@testing-library/react"
import Header from "../../src/components/header/Header"

vi.mock('/src/common/titles', () => {
  return {
    titles: {
      app: 'an application name',
      product: 'a product title'
    }
  }
})

describe('Header', () => {
  it("renders app header with title", () => {
    SUT.render()

    expect(SUT.appTitle()).toBeInTheDocument()
  })

  it("renders article title", () => {
    SUT.render()

    expect(SUT.articleTitle()).toBeInTheDocument()
  })
})

class SUT {
  static render(): void {
    render(<Header />)
  }

  static appTitle(): HTMLElement {
    return screen.getByRole('heading', {name: 'an application name'})
  }

  static articleTitle(): HTMLElement {
    return screen.getByRole('heading', {name: 'a product title'})
  }
}