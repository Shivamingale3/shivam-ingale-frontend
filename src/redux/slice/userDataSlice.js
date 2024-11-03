import { createSlice } from "@reduxjs/toolkit";
export const userDataSlice = createSlice({
    name: "userDataSlice",
    initialState: {
        userDetails: {},
    },

    reducers: {
        setUserDetails: (state, action) => {
            state.userDetails = action.payload;
        },
    },
});
export const { setUserDetails } = userDataSlice.actions;
