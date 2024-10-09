import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./category/categorySlice.js";
import productReducer from "./product/productSlice.js";
import orderReducer, { LocalStorageMiddleware } from "./order/orderSlice.js";
import modalReducer from "./category/modalDelivery/modalDeliverySlice.js";

export const store = configureStore({
  reducer: {
    category: categoryReducer,
    product: productReducer,
    order: orderReducer,
    modal: modalReducer,
  },

  middleware: (getDefaultMiddlewere) =>
    getDefaultMiddlewere().concat(LocalStorageMiddleware),
});
