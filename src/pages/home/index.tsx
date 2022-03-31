import { Typography } from '@mui/material'
import { Layout, ButtonGroup } from 'src/ui/components'
import { useEffect } from 'react'
import useNasaPhoto from 'src/hooks/useNasaPhoto'

function Home() {
   const { fetchPhoto, currentPhoto, isLoading } = useNasaPhoto({ count: 1 })

   useEffect(() => {
      fetchPhoto()
   }, [])

   function Image() {
      if (isLoading) {
         return <>Loading.</>
      } else {
         if (currentPhoto) {
            return <img src={currentPhoto} alt="logo" />
         } else {
            return <>Loading..</>
         }
      }
   }

   return (
      <Layout>
         <Image />
         <Typography variant="h1" component="h1" textAlign="center" gutterBottom>
            {currentPhoto}
         </Typography>
         <ButtonGroup onNextClick={() => fetchPhoto()} />
      </Layout>
   )
}

export default Home
