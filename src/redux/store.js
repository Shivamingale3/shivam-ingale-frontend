import { configureStore } from '@reduxjs/toolkit';
import userDataReducer from './slice/userDataSlice';

const store = configureStore({
    reducer: {
        user: userDataReducer,
    },
});

export default store;
