import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    totalQuantity: 0,
    totalPrice: 0
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
      addToCart: (state, action) => {
        const product = action.payload;
        const existingItem = state.cartItems.find(item => item.id === product.id);
  
        if (existingItem) {
          existingItem.quantity += 1;
        } else {
          state.cartItems.push({ ...product, quantity: 1 });
        }
  
        state.totalQuantity += 1;
        state.totalPrice += product.price;
      },
  
      removeFromCart: (state, action) => {
        const id = action.payload;
        const existingItem = state.cartItems.find(item => item.id === id);
  
        if (existingItem) {
          state.totalQuantity -= existingItem.quantity;
          state.totalPrice -= existingItem.price * existingItem.quantity;
          state.cartItems = state.cartItems.filter(item => item.id !== id);
        }
      },
  
      increaseQuantity: (state, action) => {
        const id = action.payload;
        const existingItem = state.cartItems.find(item => item.id === id);
  
        if (existingItem) {
          existingItem.quantity += 1;
          state.totalQuantity += 1;
          state.totalPrice += existingItem.price;
        }
      },
  
      decreaseQuantity: (state, action) => {
        const id = action.payload;
        const existingItem = state.cartItems.find(item => item.id === id);
  
        if (existingItem && existingItem.quantity > 1) {
          existingItem.quantity -= 1;
          state.totalQuantity -= 1;
          state.totalPrice -= existingItem.price;
        } else {
          state.cartItems = state.cartItems.filter(item => item.id !== id);
          state.totalQuantity -= 1;
          state.totalPrice -= existingItem.price;
        }
      }
    }
  });  

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
