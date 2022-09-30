import { combineReducers, PayloadAction } from "@reduxjs/toolkit";
import { initialState as sessionInitState, reducer as sessionReducer, State } from "./session";

export interface StoreState {
    session: State
}

export const initialState: StoreState = {
    session: sessionInitState
}

export const rootReducer = (state: StoreState, action: PayloadAction) => {
    if (action.type === 'RESET_STORE') {
        state = {
            session: { 
                ...sessionInitState,
                touchIdEnabled: state.session.touchIdEnabled,
                touchIdSupported: state.session.touchIdSupported
            }
        }
    }

    return combineReducers<StoreState>({
        session: sessionReducer
    })(state, action)
}