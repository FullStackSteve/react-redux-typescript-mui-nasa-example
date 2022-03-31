import { Button, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import useNasaPhoto from 'src/hooks/useNasaPhoto'
import { ImageGrid, Layout } from 'src/ui/components'

function Favourites() {
   const { favouritePhotos } = useNasaPhoto()
   return (
      <Layout>
         <Typography variant="h1" component="h1" textAlign="center" gutterBottom>
            Favourites
         </Typography>
         <ImageGrid images={favouritePhotos} />
         <Button variant="contained" color="secondary" component={Link} to={'/'}>
            See more photos
         </Button>
      </Layout>
   )
}

export default Favourites
