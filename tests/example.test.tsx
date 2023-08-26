import { render, screen } from '@testing-library/react';
import App from '../src/App';

describe("App", () => {
  it("renders header", () => {
    render(<App />)

    const header = screen.getByRole('heading')

    expect(header).toBeInTheDocument()
  })
})