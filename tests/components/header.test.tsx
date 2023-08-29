import { render, screen } from "@testing-library/react"
import Header from "../../src/components/header/Header"

vi.mock('/src/common/titles', () => {
  return {
    titles: {
      app: 'an application name'
    }
  }
})

describe('Header', () => {
  it("renders app header with title", () => {
    SUT.render()

    expect(SUT.appTitle()).toBeInTheDocument()
  })
})

class SUT {
  static render(): void {
    render(<Header />)
  }

  static appTitle(): HTMLElement {
    return screen.getByRole('heading', {name: 'an application name'})
  }
}