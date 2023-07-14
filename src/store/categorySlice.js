import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL } from '../utils/apiURL';

const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  async () => {
    const response = await fetch(`${BASE_URL}/categories`);
    const data = await response.json();
    return data;
  }
);

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export { fetchCategories };
export default categoriesSlice.reducer;