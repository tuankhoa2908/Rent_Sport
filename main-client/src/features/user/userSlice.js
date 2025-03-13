import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userService from "./userService";

export const getProfile = createAsyncThunk(
    "user/:id",
    async (id, thunkAPI) => {
        try {
            return await userService.getProfile(id);
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
);

export const updateProfile = createAsyncThunk(
    "user/update-profile/:id",
    async ({ id, data }, thunkAPI) => {
        try {
            console.log(data);
            return await userService.updateProfile(id, data);
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
);

export const addMoney = createAsyncThunk(
    "transaction/nap-tien",
    async (data, thunkAPI) => {
        try {
            return await userService.addMoney(data);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)

const initialState = {
    profile: {
        data: {},
        loading: false,
        error: null,
    },
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

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            //Get Profile User
            .addCase(getProfile.pending, (state) => {
                state.profile.loading = true;
                state.profile.error = null;
            })
            .addCase(getProfile.fulfilled, (state, action) => {
                state.profile.loading = false;
                state.profile.data = action.payload;
            })
            .addCase(getProfile.rejected, (state, action) => {
                state.profile.loading = false;
                state.profile.error = action.payload;
            })

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

export default userSlice.reducer;