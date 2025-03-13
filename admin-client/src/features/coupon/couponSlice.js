import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import couponService from "./couponService";

export const getAllCoupon = createAsyncThunk(
    "coupon/getAllCoupon",
    async (_, thunkAPI) => {
        try {
            return await couponService.getAllCoupon();
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const addCoupon = createAsyncThunk(
    "coupon/addCoupon",
    async (coupon, thunkAPI) => {
        try {
            return await couponService.addCoupon(coupon);
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

const initialState = {
    coupons: {
        data: [],
        loading: false,
        error: null,
    },
    newCoupon: {
        data: {},
        loading: false,
        error: null,
    }
};

export const couponSlice = createSlice({
    name: "coupon",
    initialState,
    reducers: {
        resetNewCouponState: (state) => {
            state.newCoupon = initialState.newCoupon;
        },
    },
    extraReducers: (builder) => {
        builder
            //Get All Coupon
            .addCase(getAllCoupon.pending, (state) => {
                state.coupons.loading = true;
            })
            .addCase(getAllCoupon.fulfilled, (state, action) => {
                state.coupons.loading = false;
                state.coupons.data = action.payload;
            })
            .addCase(getAllCoupon.rejected, (state, action) => {
                state.coupons.loading = false;
                state.coupons.error = action.payload;
            })
            //Add New Coupon
            .addCase(addCoupon.pending, (state) => {
                state.newCoupon.loading = true;
            })
            .addCase(addCoupon.fulfilled, (state, action) => {
                state.newCoupon.loading = false;
                state.newCoupon.data = action.payload;
            })
            .addCase(addCoupon.rejected, (state, action) => {
                state.newCoupon.loading = false;
                state.newCoupon.error = action.payload;
            });
    }
})

export const { resetNewCouponState } = couponSlice.actions;

export default couponSlice.reducer;
