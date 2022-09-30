import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface State {
    fetching: boolean
    error: boolean
    contextObtained: boolean
}

export const initialState: State = {
    fetching: false,
    error: false,
    contextObtained: false,
}


const slice = createSlice({
    name: 'ui/context',
    initialState,
    reducers: {
        setContextObtained: (state: State, action: PayloadAction<boolean>) => {
            state.contextObtained = action.payload
        },
    },
})

export default slice