import { Action } from 'src/redux/type'
import * as Actions from './actions'
export interface NasaPhotosState {
   currentPhoto: string | null
   favouritePhotos: string[]
   isLoading: boolean
   isError: boolean
   isFavourite: boolean
}

const initialState: NasaPhotosState = {
   currentPhoto: null,
   favouritePhotos: [],
   isFavourite: false,
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
         return {
            ...state,
            isFavourite: state.currentPhoto?.includes(action.payload) ?? false,
            isLoading: false,
            currentPhoto: action.payload
         }
      }
      case Actions.FETCH_ERROR: {
         return { ...state, isLoading: false, isError: true }
      }
      case Actions.ADD_FAVOURITE: {
         return {
            ...state,
            isFavourite: true,
            favouritePhotos: [
               ...state.favouritePhotos.filter(
                  (photo: string): boolean => photo !== action.payload
               ),
               action.payload
            ]
         }
      }
      default:
         return state
   }
}
