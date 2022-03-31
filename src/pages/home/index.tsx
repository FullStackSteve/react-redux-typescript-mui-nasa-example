import { Layout, ButtonGroup } from 'src/ui/components'
import { useEffect } from 'react'
import useNasaPhoto from 'src/hooks/useNasaPhoto'

function Home() {
   const { fetchPhoto, addFavourite, currentPhoto, isFavourite, isLoading } =
      useNasaPhoto(1)

   useEffect(() => {
      fetchPhoto()
   }, [])

   function Image() {
      if (isLoading) {
         return <>Loading.</>
      } else {
         if (currentPhoto) {
            return <img src={currentPhoto} alt="logo" width="100%" height="auto" />
         } else {
            return <>Loading..</>
         }
      }
   }

   return (
      <Layout>
         <ButtonGroup
            onNextClick={() => fetchPhoto()}
            onSaveClick={() => addFavourite()}
            isFavourite={isFavourite}
         />
         <Image />
      </Layout>
   )
}

export default Home
