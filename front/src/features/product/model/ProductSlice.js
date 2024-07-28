import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiService from "../../../configuration/api/apiService";

export const getAllProducts = createAsyncThunk(
  "products/getAllProducts",
  async () => {
    const response = await apiService.get("/products");
    return response.data;
  }
);

const initialState = {
  status: "pending",
  productList: [],
  error: undefined,
};

const productSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {
    initializeState: (state) => {
      Object.keys(state).forEach((key) => {
        state[key] = initialState[key];
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllProducts.pending, (state) => {
        state.status = "loading";
      });
      builder.addCase(getAllProducts.fulfilled, (state, action) => {
        state.productList = action.payload;
        state.status = "complete";
      });
      builder.addCase(getAllProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error;
      });
    }
});

export const { initializeState } = productSlice.actions;

export default productSlice.reducer;
