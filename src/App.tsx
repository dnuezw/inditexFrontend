import './App.css'
import { titles } from './common/titles'

function App() {
  return (
    <div className='header'>
      <h1>{titles.app}</h1>
      <h2>{titles.product}</h2>
    </div>
  )
}

export default App
