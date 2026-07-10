import { useState } from 'react'
import ProductDetail from './pages/ProductDetail.jsx'
import './App.css'
import Footer from"./pages/Footer.jsx"
import Home from './pages/Home'
import Header from './pages/Header.jsx'
import NewsTicker from "./pages/NewsTicker";
import Aboutus from './pages/Aboutus.jsx'
import ProductPage from './pages/ProductPage.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import{ToastContainer,toast} from 'react-toastify'
import Cart from './pages/Cart.jsx'


function App() {
  const[cartItems,setCartItems]=useState([]);
 

  return (
    
    <>
       <div className="App">
      
      <div>
        <ToastContainer theme="dark" position="bottom-center"/>
      <Header cartItems={cartItems}/>
          <NewsTicker /> 
      <Routes>
        <Route path="/" element={ <Home />}/>
        <Route path="/search" element={<Home />}/>
        <Route path="/products" element={<ProductPage />}/>
        <Route path="/product/:id" element={<ProductDetail cartItems={cartItems} setCartItems={setCartItems}/>}/>
        <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems}/>}/>
    <Route path="/aboutus" element={<Aboutus />}/>
      </Routes>
    <Footer />
      </div>
 
      </div>
    </>
  )
}

export default App
