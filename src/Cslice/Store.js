import { configureStore } from "@reduxjs/toolkit";
import Adcart from "./Adcart";
export default configureStore({
    reducer:{
Cart:Adcart
    }
})