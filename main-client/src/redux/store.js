import { configureStore } from "@reduxjs/toolkit";

import authReducer from "../features/auth/authSlice";
import userReducer from "../features/user/userSlice";

// const saveToLocalStorage = (state) => {
//     try {
//         const serializedState = JSON.stringify(state);
//         localStorage.setItem('reduxState', serializedState);
//     } catch (e) {
//         console.error('Could not save state', e);
//     }
// };

// const loadFromLocalStorage = () => {
//     try {
//         const serializedState = localStorage.getItem('reduxState');
//         if (serializedState === null) return undefined; // Trả về undefined để sử dụng initial state mặc định
//         return JSON.parse(serializedState);
//     } catch (e) {
//         console.error('Could not load state', e);
//         return undefined;
//     }
// };


export const store = configureStore({
    reducer: {
        auth: authReducer,
        user: userReducer,
    },
    // preloadedState: loadFromLocalStorage()
});

// store.subscribe(() => saveToLocalStorage(store.getState()));