import { Grid, Box, Button } from '@mui/material'
import { GlobalStyles } from 'src/theme'
import { Link } from 'react-router-dom'

interface Props {
   onNextClick?: () => void
   onSaveClick?: () => void
   isFavourite?: boolean
}

function ButtonGroup({ onNextClick, onSaveClick, isFavourite = false }: Props) {
   return (
      <Grid container spacing={2} my={5} sx={{ maxWidth: 600 }}>
         <Grid item xs={12} md={4}>
            <Box sx={{ ...GlobalStyles.flexBox }}>
               <Button variant="contained" color="secondary" onClick={onNextClick}>
                  Next
               </Button>
            </Box>
         </Grid>
         <Grid item xs={12} md={4}>
            <Box sx={{ ...GlobalStyles.flexBox }}>
               <Button
                  variant="contained"
                  color={isFavourite ? 'success' : 'secondary'}
                  onClick={onSaveClick}
               >
                  Save
               </Button>
            </Box>
         </Grid>
         <Grid item xs={12} md={4}>
            <Box sx={{ ...GlobalStyles.flexBox }}>
               <Button
                  variant="contained"
                  color={isFavourite ? 'info' : 'secondary'}
                  component={Link}
                  to={'/favourites'}
               >
                  Favourites
               </Button>
            </Box>
         </Grid>
      </Grid>
   )
}

export default ButtonGroup
