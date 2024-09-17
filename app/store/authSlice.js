// app/store/authSlice.js

import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

const initialState = {
    user: JSON.parse(Cookies.get('user')) || null,
    token: Cookies.get('token') || null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuth: (state, action) => {
            state.user = action.payload.user;
            Cookies.set('token', action.payload.token, { expires: 7 });
            Cookies.set('user', JSON.stringify(action.payload.user), { expires: 7 });
        },
        // setToken: (state, action) => {
        //     state.token = action.payload;
        //     Cookies.set('token', action.payload, { expires: 7 });
        // },
        clearAuth: (state) => {
            state.user = null;
            state.token = null;
            Cookies.remove('token');
            Cookies.remove('user');
        },
    },
});

export const { setAuth, clearAuth } = authSlice.actions;
export default authSlice.reducer;
