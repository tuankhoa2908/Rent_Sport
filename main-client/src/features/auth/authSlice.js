import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";

const getUserfromLocalStorage = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;

export const login = createAsyncThunk(
    "auth/login",
    async (user, thunkAPI) => {
        try {
            return await authService.login(user);
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
);

export const logOut = createAsyncThunk(
    "auth/logOut",
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
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // login
            .addCase(login.pending, (state) => {
                state.isLoading = true
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.user = action.payload
                state.message = 'success'
                // localStorage.setItem('isAuthenticated', true);
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload.message
            })
            //logOut
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