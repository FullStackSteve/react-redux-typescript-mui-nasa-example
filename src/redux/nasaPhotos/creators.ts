import { Action } from 'src/redux/type'
import * as Actions from './actions'

export const getPhoto = () => (dispatch: (arg0: Action) => void) => {
   // TODO Axios implementation
   dispatch({ type: Actions.FETCH_LOADING })
   dispatch({ type: Actions.FETCH_SUCCESS })
   dispatch({ type: Actions.FETCH_ERROR })
}
