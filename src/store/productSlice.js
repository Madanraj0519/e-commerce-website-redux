import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL } from '../utils/apiURL';

export const fetchProductsByCategory = createAsyncThunk(
  'products/fetchProductsByCategory',
  async (category) => {
    const response = await fetch(`${BASE_URL}/category/${category}`);
    const data = await response.json();
    return data;
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsByCategory.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProductsByCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchProductsByCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});


export default productsSlice.reducer;