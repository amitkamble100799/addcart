import React from 'react'
import  {addtocart} from '../Cslice/Adcart'
import {useDispatch} from  'react-redux'
import '../App.css'
const Productitle = ({id,title,image,price}) => {
    const dispatch=useDispatch();
   
  return (
    <>
    <div className='item'>
        <h3 className='title'>{title}</h3>
        <img src={image} alt='not found' width={200} height={100}/>
        <p>{price}</p>
        <br/>
        <button onClick={()=>dispatch(addtocart({id,image,title,price}))}>Add To cart</button>
    </div>
    </>
  )
} 

export default Productitle