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
      const newCart = state.cart.concat([action.payload]);
      return {
        ...state,
        cart: newCart,
        cartOpen: true,
      };
    },
    addMultipleToCart: (state, action) => {
      state.cart.push(...action.payload);
    },
    updateCartQuantity: (state, action) => {
      const tmpCart = state.cart.map((product) => {
        return { ...product };
      });
      tmpCart
        .filter((product) => product._id === action.payload._id)
        .map((product) => {
          product.purchaseQuantity = action.payload.purchaseQuantity;
        });
      return {
        ...state,
        cart: tmpCart,
        cartOpen: true,
      };
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
      state.categories = action.payload;
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
