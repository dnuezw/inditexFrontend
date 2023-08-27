import { render, screen } from "@testing-library/react"
import App from "../src/App"
import { titles } from "../src/common/titles"

describe("App", () => {
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
    render(<App />)
  }

  static appTitle(): HTMLElement {
    return screen.getByRole('heading', {name: titles.app})
  }

  static articleTitle(): HTMLElement {
    return screen.getByRole('heading', {name: titles.product})
  }
}