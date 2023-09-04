import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../App.css'
import { rem } from './Adcart'
import { Link } from 'react-router-dom'
const Cart = ({id,title,image,price}) => {
    const data=useSelector((state)=>state.Cart.cart)
    const dispatch=useDispatch();
  return (
    <div >
        {
            data.map((item,index)=>{
                return(
                    <div className='items1' key={index}>
              <h4>{item.title}</h4>
              <img src={item.image} alt='not found' className='imgc'/>
              <p>{item.price}</p>
              <button className='rm' onClick={()=>dispatch(rem({id:item.id}))}>Remove</button>
            
              
                    </div>
                )
            })
        }
        <Link to='/'>Go Back</Link>
    </div>
  )
}

export default Cart