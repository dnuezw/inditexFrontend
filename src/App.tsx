import './App.css'
import { products } from './common/product'
import { titles } from './common/titles'

function App() {  
  return (
    <>
      <div className='header'>
        <h1>{titles.app}</h1>
        <h2>{titles.product}</h2>
      </div>
      <div role='list'>
        {products.map((product) => 
          <div className='card' role='listitem' key={product.name}>
            <img src={product.img} alt={product.name}></img>
            <h1>{product.name}</h1>
            <p role='paragraph'>{product.price}</p>
          </div>
        )}
      </div>
    </>
  )
}

export default App
