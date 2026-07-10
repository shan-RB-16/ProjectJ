import React from 'react'
import logo from '../assets/logo.png'
import './mainpg.css'

export default function mainpg() {
  return (
    <div className="main">
      <h1 className='name'>FIT-FOR-YOU</h1>
      <div className='logo-con'>
        <img className='logoo' src={logo} alt="Logo" />
      </div>
    <div className='head'>
        
    <h1 className='welcome'>Finally, Clothing That Actually Fits You</h1>
    <h2 className='head'>Welcome To Fit For You,</h2>
    <p className='para'>We craft custom-tailored clothing that celebrates your unique body and style, ensuring a perfect, comfortable fit.</p>
    <img src="https://i.pinimg.com/736x/e3/85/6f/e3856f4608e7139ce2b0ee4ca752f4a3.jpg" alt="imgame" className='imagee' />
    <h1 className='welcome'>Shop Now at just @499</h1>
    </div>

    </div>
  )
}
  