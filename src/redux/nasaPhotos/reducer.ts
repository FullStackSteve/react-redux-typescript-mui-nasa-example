import { Action } from 'src/redux/type'
import * as Actions from './actions'

export interface NasaPhotosState {
   currentPhoto: string | null
   favouritePhotos: string[]
   isLoading: boolean
   isError: boolean
}

const initialState: NasaPhotosState = {
   currentPhoto: null,
   favouritePhotos: [],
   isLoading: false,
   isError: false
}

export function nasaPhotosReducer(
   state: NasaPhotosState = initialState,
   action: Action
): NasaPhotosState {
   switch (action.type) {
      case Actions.FETCH_LOADING: {
         return { ...state, isLoading: true }
      }
      case Actions.FETCH_SUCCESS: {
         return { ...state, isLoading: false }
      }
      case Actions.FETCH_ERROR: {
         return { ...state, isLoading: false, isError: true }
      }
      case Actions.ADD_FAVOURITE: {
         return { ...state, favouritePhotos: [...state.favouritePhotos, action.payload] }
      }
      default:
         return state
   }
}
