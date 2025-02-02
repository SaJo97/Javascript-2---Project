import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./features/products/productsSlice";
import shoppingCartSlice from "./shoppingcart/shoppingCartSlice";
import authReducer from "./features/auth/authSlice";
import orderReducer from "./features/orders/orderSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    productList: productsSlice,
    shoppingCart: shoppingCartSlice,
    orders: orderReducer,
  },
});
