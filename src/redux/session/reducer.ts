import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { useSelector } from "react-redux"

export interface State {
    authenticated: boolean
    touchIdEnabled: boolean
    touchIdSupported: boolean
}

export const initialState: State = {
    authenticated: false,
    touchIdEnabled: false,
    touchIdSupported: false
}

export type Actions = 'authSuccess' | 'logoutError'

type ReducerType = {
    [type in Actions]: (state: State, action: PayloadAction<string | undefined>) => void
}

const session = createSlice({
    name: 'session',
    initialState,
    reducers: {
        authSuccess: (state: State) => {
            state.authenticated = true
        },
        logoutSuccess: (state: State) => {
            state.authenticated = false
        },
        setTouchIdEnabled: (state: State, action: PayloadAction<boolean>) => {
            state.touchIdEnabled = action.payload
        },
        setTouchIdSupported: (state: State, action: PayloadAction<boolean>) => {
            state.touchIdSupported = action.payload
        }
    }
})

export const { authSuccess, logoutSuccess } = session.actions;

export default session;