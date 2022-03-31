import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import * as NasaPhotoActions from 'src/redux/nasaPhotos/actions'
import { RootState } from 'src/redux/root'
import { config } from 'src/config'

function useNasaPhoto(count = 1) {
   const dispatch = useDispatch()
   const state = useSelector((state: RootState) => state.nasaPhotosReducer)
   const { currentPhoto, favouritePhotos, isFavourite, isLoading, isError } = state
   const { NASA_API_KEY } = config

   async function fetchPhoto() {
      try {
         dispatch({ type: NasaPhotoActions.FETCH_LOADING })
         const result = await axios.get(
            `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}&count=${count}`
         )
         const { url } = result.data[0]

         dispatch({ type: NasaPhotoActions.FETCH_SUCCESS, payload: url })
      } catch (err) {
         console.log(err)
         dispatch({ type: NasaPhotoActions.FETCH_ERROR })
      }
   }

   async function addFavourite(url?: string) {
      dispatch({ type: NasaPhotoActions.ADD_FAVOURITE, payload: url ?? currentPhoto })
   }

   return {
      fetchPhoto,
      addFavourite,
      currentPhoto,
      favouritePhotos,
      isFavourite,
      isLoading,
      isError
   }
}

export default useNasaPhoto
