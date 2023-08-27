import './App.css'
import { products } from './common/product'
import Header from './components/header/Header'

function App() {  
  return (
    <>
      <Header />
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
