import { useNavigation } from "@react-navigation/native";
import { createSlice } from "@reduxjs/toolkit";

const prefix = 'session'

const initialState = {
    authenticated: false
}

export const sessionSlice = createSlice({
    name: prefix,
    initialState,
    reducers: {
        sessionIn: (state: any) => {
            state.authenticated = true;
        },
        sessionOut: (state: any) => {
            state.authenticated = false
        }
    }
});

export const { sessionIn, sessionOut } = sessionSlice.actions;

export default sessionSlice.reducer;