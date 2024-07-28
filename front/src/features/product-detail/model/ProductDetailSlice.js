import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiService from "../../../configuration/api/apiService";

export const getProductById = createAsyncThunk(
  "product-detail/getProductById",
  async (request) => {
    const response = await apiService.get(`/products/${request.id}`);
    return response.data;
  }
);

const initialState = {
  status: "pending",
  productDetail: {},
  error: undefined,
};

const productDetailSlice = createSlice({
  name: "product-detail",
  initialState: initialState,
  reducers: {
    initializeState: (state) => {
      Object.keys(state).forEach((key) => {
        state[key] = initialState[key];
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProductById.pending, (state) => {
        state.status = "loading";
      });
      builder.addCase(getProductById.fulfilled, (state, action) => {
        state.productDetail = action.payload;
        state.status = "complete";
      });
      builder.addCase(getProductById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error;
      });
    }
});

export const { initializeState } = productDetailSlice.actions;

export default productDetailSlice.reducer;
