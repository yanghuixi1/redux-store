import { createSlice } from "@reduxjs/toolkit";

const shopSlice = createSlice({
  name: "shop",
  initialState: {
    products: [],
    cart: [],
    cartOpen: false,
    categories: [],
    currentCategory: "",
  },
  reducers: {
    updateProducts: (state, action) => {
      state.products = action.payload;
    },
    addToCart_: (state, action) => {
      state.cart.push(action.payload);
    },
    addMultipleToCart: (state, action) => {
      state.cart.push(...action.payload);
    },
    updateCartQuantity: (state, action) => {
      //state.cart.cartOpen = true;
      state.cart
        .filter((product) => product._id === action.payload._id)
        .map((product) => {
          product.purchaseQuantity = action.payload.purchaseQuantity;
        });
    },
    removeFromCart_: (state, action) => {
      const newCart = state.cart.filter(
        (product) => product._id != action.payload
      );
      return {
        ...state,
        cart: newCart,
        cartOpen: newCart.length > 0,
      };
    },
    toggleCart_: (state) => {
      return {
        ...state,
        cartOpen: !state.cartOpen,
      };
    },
    updateCategories: (state, action) => {
      state.categories.push(...action.payload);
    },
    updateCurrentCategory: (state, action) => {
      state.currentCategory = action.payload;
    },
    clearCart: (state) => {
      return {
        ...state,
        cartOpen: !state.cartOpen,
        cart: [],
      };
    },
  },
});

export const {
  updateProducts,
  addToCart_,
  addMultipleToCart,
  updateCartQuantity,
  removeFromCart_,
  toggleCart_,
  updateCategories,
  updateCurrentCategory,
  clearCart,
} = shopSlice.actions;

export default shopSlice.reducer;
