import { createSlice } from "@reduxjs/toolkit";
const cartSlice=createSlice({
    name:"cart",
    initialState:{
        cartItems:[],
        total:0,
        totalAmt:0,
    },
    reducers:{
        add:(state,action)=>{
            console.log("Adding new post to cart");
            state.cartItems.push(action.payload);
            state.total+=1;
            state.totalAmt+=action.payload.price;
        },
        remove:(state,action)=>{
            console.log("Removing a post from cart");
            state.total-=1;
            state.totalAmt-=action.payload.price;
            const newcart=state.cartItems.filter((item)=>item.id!==action.payload.id);
            state.cartItems=newcart;
        }     
    }
});
export const {add,remove}=cartSlice.actions;
export default cartSlice;