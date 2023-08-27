import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/card/Card'
import Header from './components/header/Header'
import { Product } from './types/product'
import { ProductsActions } from './actions/products'

function App() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    retrieveProducts()
  }, [])

  const retrieveProducts = async (): Promise<void> => {
    const newProducts: Product[] = await ProductsActions.retrieveProducts()    
    setProducts(() => {
      return newProducts.map((product) => product)
    })
  }

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
