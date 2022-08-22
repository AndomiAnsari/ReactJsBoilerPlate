import { configureStore } from "@reduxjs/toolkit";
import Product from "../reducers/Product";
import Cart from "../reducers/Cart";

export const store = configureStore({
  reducer: {
    product: Product,
    cart: Cart,
    // dbUser: DbUser,
  },
});
