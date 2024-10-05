import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(item => item.id === newItem.id);
      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += Number(newItem.price);  
      } else {
        state.cartItems.push({
          id: newItem.id,
          name :newItem.name,
          subname: newItem.subname,
          image:newItem.image, 
          price: Number(newItem.price),  
          quantity: 1,
          totalPrice: Number(newItem.price),  
        });
      }
      state.totalQuantity++;
    },
    increaseQuantity(state, action) {
      const itemId = action.payload;
      const existingItem = state.cartItems.find(item => item.id === itemId);
      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += Number(existingItem.price); 
        state.totalQuantity++;
        state.totalAmount += Number(existingItem.price);  
      }
    },
    decreaseQuantity(state, action) {
      const itemId = action.payload;
      const existingItem = state.cartItems.find(item => item.id === itemId);
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity--;
        existingItem.totalPrice -= Number(existingItem.price);  
        state.totalQuantity--;
        state.totalAmount -= Number(existingItem.price);  
      }
    },
    removeFromCart(state, action) {
      const itemId = action.payload;
      const existingItem = state.cartItems.find(item => item.id === itemId);
      if (existingItem) {
        state.cartItems = state.cartItems.filter(item => item.id !== itemId);
        state.totalQuantity -= existingItem.quantity;
        state.totalAmount -= Number(existingItem.totalPrice);  
      }
    },
    clearCart(state) {
      state.cartItems = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;
    },
  },
});

export const { addToCart, increaseQuantity, decreaseQuantity, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
