import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../utils/apiURL";


export const fetchAllProducts = createAsyncThunk(
    'allProducts/fetchAllProducts',
     async () => {
        const response = await fetch(`${BASE_URL}`);
        const data = await response.json();
        return data;
        // console.log(data);
    }
)


const allProductSlice = createSlice({
    name:'allProducts',
    initialState:{
        product: [],
        loading: false,
        error: null,
    },
    reducers:{},
    extraReducers:(builder) => {
        builder
        .addCase(fetchAllProducts.pending, (state) => {
            state.loading = true;
        })
        .addCase(fetchAllProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.product = action.payload;
        })
        .addCase(fetchAllProducts.rejected, (state, action) =>{
            state.loading = false;
            state.error = action.error.message;
        })
    }

})

export default allProductSlice.reducer;