import { configureStore } from '@reduxjs/toolkit';

import renterReducer from "../features/renter/renterSlice";
import authReducer from "../features/auth/authSlice";
import sellerReducer from "../features/seller/sellerSlice";
import couponReducer from "../features/coupon/couponSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        renter: renterReducer,
        seller: sellerReducer,
        coupon: couponReducer,
    },
})