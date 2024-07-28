import { combineReducers, configureStore } from "@reduxjs/toolkit";
import ProductSlice from "../../features/product/model/ProductSlice";
import { APP_ENVIRONMENT } from "../constants";
import ProductDetailSlice from "../../features/product-detail/model/ProductDetailSlice";

const appReducer = combineReducers({
    productState: ProductSlice,
    productDetailState: ProductDetailSlice,
});

export const store = configureStore({
  reducer: appReducer,
  devTools: APP_ENVIRONMENT === "development",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
