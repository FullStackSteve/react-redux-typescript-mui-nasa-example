import { combineReducers, Reducer } from 'redux'
import { Action } from 'src/redux/type'
import { nasaPhotosReducer } from '../nasaPhotos'
import * as Actions from './actions'

const reducer: Reducer = combineReducers({ nasaPhotosReducer })

export interface State {
   nasaPhotosReducer: Reducer
}

export function rootReducer(state: State | undefined, action: Action): State {
   switch (action.type) {
      case Actions.CLEAR:
         return reducer({}, action)
      default:
         return reducer(state, action)
   }
}
