import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  products: [],
  cart: [],
  cartOpen: false,
  categories: [],
  currentCategory: "",
};

const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    updateProducts: (state, action) => {
      state.products.push(...action.payload);
    },
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    addMultipleToCart: (state, action) => {
      state.cart.push(...action.payload);
    },
    updateCartQuantity: (state, action) => {
      state.cart.cartOpen = true;
      state.cart
        .filter((product) => product._id === action.payload._id)
        .map((product) => {
          product.purchaseQuantity = action.payload.purchaseQuantity;
        });
    },
    removeFromCart: (state, action) => {
      const newCart = state.cart.filter(
        (product) => product._id != action.payload
      );
      state.cart = newCart;
      state.cartOpen = newState.length > 0;
    },
    toggleCart: (state) => {
      state.cart.cartOpen = !state.cart.cartOpen;
    },
    updateCategories: (state, action) => {
      state.categories.push(...action.payload);
    },
    updateCurrentCategory: (state, action) => {
      state.currentCategory = action.payload;
    },
    clearCart: (state) => {
      state.cartOpen = false;
      state.cart = [];
    },
  },
});

export const {
  updateProducts,
  addToCart,
  addMultipleToCart,
  updateCartQuantity,
  removeFromCart,
  toggleCart,
  updateCategories,
  updateCurrentCategory,
  clearCart,
} = shopSlice.actions;

export default shopSlice.reducer;
