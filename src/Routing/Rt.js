import React from 'react'
import Product from '../Addtocart/Product'
import Cart from '../Cslice/Cart'
import { Route,Routes } from 'react-router-dom'
const Rt = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Product/>}/>
        <Route path='/checkout' element={<Cart/>}/>
    </Routes>
    </>
  )
}

export default Rt