import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    id: null,
    username: null,
    email: null,
    mobile: null,
    role: null,
    firstName: null,
    lastName: null,
    jwtToken: null,
    isAuthenticated: false,
};

const userDataSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserData: (state, action) => {
            const { id, username, email, mobile, role, firstName, lastName, jwtToken } = action.payload; // Fixed key to jwtToken
            state.id = id;
            state.username = username;
            state.email = email;
            state.mobile = mobile;
            state.role = role;
            state.firstName = firstName;
            state.lastName = lastName;
            state.jwtToken = jwtToken; // Corrected key
            state.isAuthenticated = true;
        },
        clearUserData: (state) => {
            return initialState; // Reset to initial state
        },
    },
});

export const { setUserData, clearUserData } = userDataSlice.actions;

export default userDataSlice.reducer;
