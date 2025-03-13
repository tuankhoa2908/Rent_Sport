import { configureStore } from "@reduxjs/toolkit";

import authReducer from "../redux-features/auth/authSlice";
import profifleReducer from "../redux-features/profile/profileSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        profile: profifleReducer,
    }
});