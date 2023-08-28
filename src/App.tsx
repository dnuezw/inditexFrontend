import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Editor from './components/editor/Editor'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='editor/:ids' element={<Editor />}/>
        <Route path='*' element={<Navigate to='/editor/1' />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
