import slice from './reducer'
import * as selectors from './selectors'

export * from './reducer'
const actions = slice.actions
const reducer = slice.reducer

export { actions, reducer, selectors }

export default slice