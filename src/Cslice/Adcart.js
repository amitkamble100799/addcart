import {createSlice} from '@reduxjs/toolkit'
export const Adcart=createSlice({
    name:'Cart',
    initialState:{
        cart:[],
    },
    reducers:{
addtocart:(state,action)=>{
state.cart.push(action.payload)
},
rem:(state,action)=>{
    state.cart=state.cart.filter((item)=>item.id!==action.payload.id)
    }
    }
})
export default Adcart.reducer;
export const {addtocart,rem} =Adcart.actions
