import { State } from './reducer'

export const isAuthenticated = (state: State) => state.authenticated
export const isTouchIdEnabled = (state: State) => state.touchIdEnabled
export const isTouchIdSupported = (state: State) => state.touchIdSupported