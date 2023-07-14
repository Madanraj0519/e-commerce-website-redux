import { createSlice } from "@reduxjs/toolkit";


export const authSlice = createSlice({
    name: 'auth',
    initialState:{
        user: null,
        isLog : false
    },
    reducers:{
        login(state, action){
            state.user = action.payload;
            localStorage.setItem('user',JSON.stringify(action.payload)); 
        },
        logout(state){
            state.user = null;
            localStorage.removeItem('user');
        },
        register(state, action){
            state.user = action.payload;
            localStorage.setItem('user', JSON.stringify(action.payload));
        }
    }
})

export const {login, logout, register, user} = authSlice.actions;
export default authSlice.reducer;