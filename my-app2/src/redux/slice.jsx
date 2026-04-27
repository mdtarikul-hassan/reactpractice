import { createSlice } from "@reduxjs/toolkit"

const initialState={
    items : []
}

const addToCart= createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addItem:(state,action)=>{
            // state.value+=1;
            state.items.push(action.payload)
        },
        removeItem:(state,action)=>{
            // state.value>0? state.value-=1: null;
            state.items.length >0? state.items.pop(action.payload) : null
        },
        clearAllItems:(state)=>{
            state.value=0;
        }
    }
})

export const {addItem, removeItem, clearAllItems} = addToCart.actions;
export default addToCart.reducer