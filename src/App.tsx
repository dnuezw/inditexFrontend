import './App.css'
import { product } from './common/product'
import { titles } from './common/titles'

function App() {  
  return (
    <>
      <div className='header'>
        <h1>{titles.app}</h1>
        <h2>{titles.product}</h2>
      </div>
      <div className='card'>
        <img src={product.img}></img>
        <h1>{product.name}</h1>
        <p>{product.price}</p>
      </div>
    </>
  )
}

export default App
