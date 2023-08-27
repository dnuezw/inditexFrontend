import './App.css'
import { products } from './common/product'
import Card from './components/card/Card'
import Header from './components/header/Header'

function App() {  
  return (
    <>
      <Header />
      <div role='list'>
        {products.map((product) => 
          <Card product={product} key={product.name} />
        )}
      </div>
    </>
  )
}

export default App
