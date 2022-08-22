import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../utils/api";
import {
  getDataByBody,
  getRequest,
  postRequest,
  putRequest,
} from "../../utils/fetch";

const initialState = {
  Products: [],
  fetchingAccounts: false,
};

// GET REQUESTS
export const GetProducts = createAsyncThunk("GetProducts", async () => {
  const result = await getRequest(`${BASE_URL}/products`, "get");
  return result;
});

const productsReducer = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: {
    [GetProducts.fulfilled]: (state, action) => {
      state.fetchingAccounts = false;
      const data = action.payload;
      state.Products = data;
      return state;
    },
    [GetProducts.pending]: (state, action) => {
      state.fetchingAccounts = true;
      return state;
    },
    // [GetProducts.rejected]: (state, action) => {
    //   state.fetchingAccounts = false;
    //   return state;
    // },
  },
});

export default productsReducer.reducer;
