import { State } from './reducer'

export const isFetching = (state: State) => state.fetching
export const isContainerObtained = (state: State) => {
    return state.contextObtained
}