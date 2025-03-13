import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import sellerService from "./sellerService.js";

export const getAllSeller = createAsyncThunk(
    "seller/getAllSeller",
    async (_, thunkAPI) => {
        try {
            return await sellerService.getAllSeller();
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const getFieldfromOnwer = createAsyncThunk(
    "field/getFieldfromOwner",
    async (id, thunkAPI) => {
        try {
            return await sellerService.getFieldfromOnwer(id);
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

const initialState = {
    sellers: {
        data: [],
        loading: false,
        error: null
    },
    fields: {
        data: [],
        loading: false,
        error: null,
    }
};

export const sellerSlice = createSlice({
    name: "seller",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Get All seller
            .addCase(getAllSeller.pending, (state) => {
                state.sellers.loading = true;
            })
            .addCase(getAllSeller.fulfilled, (state, action) => {
                state.sellers.data = action.payload;
                state.sellers.loading = false;
            })
            .addCase(getAllSeller.rejected, (state, action) => {
                state.sellers.error = action.payload;
                state.sellers.loading = false;
            })
            // Get Field from Owner
            .addCase(getFieldfromOnwer.pending, (state) => {
                state.fields.loading = true;
            })
            .addCase(getFieldfromOnwer.fulfilled, (state, action) => {
                state.fields.data = action.payload;
                state.fields.loading = false;
            })
            .addCase(getFieldfromOnwer.rejected, (state, action) => {
                state.fields.error = action.payload;
                state.fields.loading = false;
            })
    }
})

export default sellerSlice.reducer;