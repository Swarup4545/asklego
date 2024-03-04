import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductListning from './components/ProductListning'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import ProductComponents from './components/ProductComponents'

function App() {
  const [count, setCount] = useState(0)

  return (
    <> <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<ProductListning/>}/>
    </Routes>
  </BrowserRouter>
  
    </>
  )
}

export default App
