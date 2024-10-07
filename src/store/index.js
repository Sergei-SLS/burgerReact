import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./category/categorySlice.js";
import productReducer from "./product/productSlice.js";
import orderReducer, { LocalStorageMiddleware } from "./order/orderSlice.js";

export const store = configureStore({
  reducer: {
    category: categoryReducer,
    product: productReducer,
    order: orderReducer,
  },

  middleware: (getDefaultMiddlewere) =>
    getDefaultMiddlewere().concat(LocalStorageMiddleware),
});
