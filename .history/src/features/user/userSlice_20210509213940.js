import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    name: "",
    email: "",
    photo: "",

}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUserLogin: (state, action) => {
            state.name = action.
        },
        setSignOut: (state) => {
            state.name = null;
            state.email = null;
            state.photo = null;
        }
    }
})
