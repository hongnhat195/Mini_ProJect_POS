import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  number: 0,
  cartItem: [],
  listCart: [],
  total: 0,
};
const todoCart = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    fetchCart: (state, action) => {
      state.listCart = action.payload;
    },
    addToCart: (state, action) => {
      const itemsIndex = state.cartItem.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemsIndex >= 0) {
        state.cartItem[itemsIndex].cartQuantity += 1;
        state.cartItem[itemsIndex].totalPriceItem =
          state.cartItem[itemsIndex].cartQuantity *
          state.cartItem[itemsIndex].price;
      } else {
        const tempCart = {
          ...action.payload,
          cartQuantity: 1,
          totalPriceItem: action.payload.price,
        };
        state.cartItem.push(tempCart);
      }
      state.number += 1;
      state.total += action.payload.price;
    },
    decreaseCart: (state, action) => {
      const itemsIndex = state.cartItem.findIndex(
        (item) => item.id === action.payload.id
      );
      state.cartItem[itemsIndex].cartQuantity -= 1;
      state.number -= 1;
      state.total -= state.cartItem[itemsIndex].price;
      if (state.cartItem[itemsIndex].cartQuantity === 0) {
        state.cartItem = state.cartItem.filter(
          (item) => item.id !== action.payload.id
        );
      } else {
        state.cartItem[itemsIndex].totalPriceItem -=
          state.cartItem[itemsIndex].price;
      }
    },
    removeCart(state, action) {
      const itemsIndex = state.cartItem.findIndex(
        (item) => item.id === action.payload.id
      );
      state.number -= state.cartItem[itemsIndex].cartQuantity;
      state.total -= state.cartItem[itemsIndex].totalPriceItem;
      state.cartItem = state.cartItem.filter(
        (item) => item.id !== action.payload.id
      );
    },
    deleteCart(state, action) {
      // Delete cart when click "Xoa don hang"
      state.number = 0;
      state.total = 0;
      state.cartItem = [];
    },
  },
});

const { actions, reducer } = todoCart;
export const { addToCart, removeCart, fetchCart, decreaseCart, deleteCart } =
  actions;
export default reducer;
