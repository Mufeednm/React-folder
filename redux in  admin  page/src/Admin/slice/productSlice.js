import { createSlice } from "@reduxjs/toolkit";
import { DummyProducts } from "../../pages/data";
const productSlice = createSlice({
    name : "Products",
    initialState : {value :DummyProducts},
    reducers: {
        productedit:(state,action)=>{
            state.value=action.payload
        },
        productremove:(state,action)=>{
             const removeitem =action.payload;
             if (removeitem>=0 && removeitem < state.value.length) {
                state.value.splice(removeitem,1)
             }

             },
             
        }
    }

) 
export const {productedit,productremove}=productSlice.actions
export default productSlice.reducer