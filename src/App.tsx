import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Editor from './components/product/editor/Editor'
import Header from './components/header/Header'

const App: React.FC = () => {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='editor/:ids' element={<Editor />} />
          <Route path='*' element={<Navigate to='/editor/1' />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
