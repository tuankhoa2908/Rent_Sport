import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import profileService from "./profileService";

export const updateProfile = createAsyncThunk(
    "user/update-profile/:id",
    async ({ id, data }, thunkAPI) => {
        try {
            console.log(data);
            return await profileService.updateProfile(id, data);
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
);

export const addMoney = createAsyncThunk(
    "transaction/nap-tien",
    async (data, thunkAPI) => {
        try {
            return await profileService.addMoney(data);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)

const initialState = {
    updateProfile: {
        data: {},
        loading: false,
        error: null,
    },
    money: {
        data: {},
        loading: false,
        error: null
    }
};

export const profileSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Update Profile
            .addCase(updateProfile.pending, (state) => {
                state.updateProfile.loading = true;
                state.updateProfile.error = null;
            })
            .addCase(updateProfile.fulfilled, (state, action) => {
                state.updateProfile.loading = false;
                state.updateProfile.data = action.payload;
            })
            .addCase(updateProfile.rejected, (state, action) => {
                state.updateProfile.loading = false;
                state.updateProfile.error = action.payload;
            })

            // Add money
            .addCase(addMoney.pending, (state) => {
                state.money.loading = true;
            })
            .addCase(addMoney.fulfilled, (state, action) => {
                state.money.loading = false;
                state.money.data = action.payload;
            })
            .addCase(addMoney.rejected, (state, action) => {
                state.money.loading = false;
                state.money.error = action.payload;
            })
    }
})

export default profileSlice.reducer;