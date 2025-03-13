import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";

const getUserfromLocalStorage = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;

export const adminLogin = createAsyncThunk(
    "auth/adminLogin",
    async (userData, thunkAPI) => {
        try {
            return await authService.adminLogin(userData);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const logOut = createAsyncThunk(
    "auth/logout",
    async (_, thunkAPI) => {
        try {
            return await authService.logOut();
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

const initialState = {
    user: getUserfromLocalStorage,
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: "",
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // admin-login
            .addCase(adminLogin.pending, (state) => {
                state.isLoading = true;
                state.isSuccess = false;
                state.isError = false;
            })
            .addCase(adminLogin.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.user = action.payload;
                state.message = "success";
            })
            .addCase(adminLogin.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.payload.message;
            })
            // admin-logout
            .addCase(logOut.pending, (state) => {
                state.isLoading = true;
                state.isSuccess = false;
                state.isError = false;
            })
            .addCase(logOut.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.user = null;
                state.message = "success";
            })
            .addCase(logOut.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.payload.message;
            })
    }
})

export default authSlice.reducer;