import React from 'react'
import Productitle from './Productitle'
import { useSelector } from 'react-redux'
import img1 from '../Assets/img1.webp'
import img5 from '../Assets/img5.jpg'
import img6 from '../Assets/img6.jfif'
import img4 from '../Assets/img4.jfif'
import img3 from '../Assets/img3.jfif'
import '../App.css'
import { Link } from 'react-router-dom'
const Product = () => {
    const CartItem=useSelector((state)=>state.Cart.cart)
    console.log(CartItem)
  return (
    <>
        
        <div className='d1'>
            <img src={img6} alt='not found' height={100} width={100}/>
            <h4><Link to='/checkout'>Cart:{CartItem.length}</Link></h4>
        </div>
        <div className='d2'>
            <Productitle id='1' title='Mobile1' image={img1} price={'$100'}/>
            <Productitle id='2' title='Mobile2' image={img3} price={'$200'}/>
            <Productitle id='3' title='Mobile3' image={img4} price={'$300'}/>
            <Productitle id='4' title='Mobile4' image={img5} price={'$400'}/>
            <Productitle id='5' title='Mobile5' image={img6} price={'$500'}/>
        </div> 
        </>
  )
}

export default Product