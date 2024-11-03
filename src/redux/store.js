import { userDataSlice } from "./slice/userDataSlice";
import { configureStore } from "@reduxjs/toolkit";
import { snackbarSlice } from "./snackbarSlice";

const store = configureStore({
    reducer:{
        userDataStore:userDataSlice.reducer,
        snackbarStore: snackbarSlice.reducer
    }
})

export default store;