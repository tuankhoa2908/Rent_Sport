import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import renterService from "./renterService";

export const getAllRenter = createAsyncThunk(
    "renter/getAllRenter",
    async (_, thunkAPI) => {
        try {
            return await renterService.getAllRenter();
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

const initialState = {
    renters: {
        data: [],
        loading: false,
        error: null
    },
};

export const renterSlice = createSlice({
    name: "renter",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Get All Renter
            .addCase(getAllRenter.pending, (state) => {
                state.renters.loading = true;
            })
            .addCase(getAllRenter.fulfilled, (state, action) => {
                state.renters.data = action.payload;
                state.renters.loading = false;
            })
            .addCase(getAllRenter.rejected, (state, action) => {
                state.renters.error = action.payload;
                state.renters.loading = false;
            });
    }
})

export default renterSlice.reducer;