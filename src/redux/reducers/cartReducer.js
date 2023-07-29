import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : {
      kotheyMomos: {
          quantity: 0,
          price: 200,
        },
        steamedMomos: {
          quantity: 0,
          price: 500,
        },
        friedMomos: {
          quantity: 0,
          price: 1800,
        },
      },
  subTotal: localStorage.getItem("cartPrices")
    ? JSON.parse(localStorage.getItem("cartPrices")).subTotal
    : 0,
  tax: localStorage.getItem("cartPrices")
    ? JSON.parse(localStorage.getItem("cartPrices")).tax
    : 0,
  shippingCharges: localStorage.getItem("cartPrices")
    ? JSON.parse(localStorage.getItem("cartPrices")).shippingCharges
    : 0,
  total: localStorage.getItem("cartPrices")
    ? JSON.parse(localStorage.getItem("cartPrices")).total
    : 0,
  shippingInfo: localStorage.getItem("shippingInfo")
    ? JSON.parse(localStorage.getItem("shippingInfo"))
    : {},
};

export const cartReducer = createReducer(initialState, {
  kotheyMomosIncrement: (state) => {
    state.cartItems.kotheyMomos.quantity += 1;
  },
  steamedMomosIncrement: (state) => {
    state.cartItems.steamedMomos.quantity += 1;
  },
  friedMomosIncrement: (state) => {
    state.cartItems.friedMomos.quantity += 1;
  },
  kotheyMomosDecrement: (state) => {
    state.cartItems.kotheyMomos.quantity -= 1;
  },
  steamedMomosDecrement: (state) => {
    state.cartItems.steamedMomos.quantity -= 1;
  },
  friedMomosDecrement: (state) => {
    state.cartItems.friedMomos.quantity -= 1;
  },

  calculatePrice: (state) => {
    state.subTotal =
      state.cartItems.kotheyMomos.price *
        state.cartItems.kotheyMomos.quantity +
      state.cartItems.steamedMomos.price *
        state.cartItems.steamedMomos.quantity +
      state.cartItems.friedMomos.price *
        state.cartItems.friedMomos.quantity;

    state.tax = state.subTotal * 0.18;
    state.shippingCharges = state.subTotal > 1000 ? 0 : 200;
    state.total = state.subTotal + state.tax + state.shippingCharges;
  },

  emptyState: (state) => {
    state.cartItems = {
      kotheyMomos: {
        quantity: 0,
        price: 200,
      },
      steamedMomos: {
        quantity: 0,
        price: 500,
      },
      friedMomos: {
        quantity: 0,
        price: 1800,
      },
    };

    state.subTotal = 0;
    state.shippingCharges = 0;
    state.tax = 0;
    state.total = 0;
  },

  addShippingInfo: (state, action) => {
    state.shippingInfo = {
      hNo: action.payload.hNo,
      city: action.payload.city,
      state: action.payload.state,
      country: action.payload.country,
      pinCode: action.payload.pinCode,
      phoneNo: action.payload.phoneNo,
    };
  },
});
