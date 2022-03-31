import { Grid, Box, Button } from '@mui/material'
import { GlobalStyles } from 'src/theme'
import { Link } from 'react-router-dom'

interface Props {
   onNextClick?: () => void
   onSaveClick?: () => void
}

function ButtonGroup({ onNextClick }: Props) {
   return (
      <Grid container spacing={2} sx={{ maxWidth: 600 }}>
         <Grid item xs={12} md={4} mt={5}>
            <Box sx={{ ...GlobalStyles.flexBox }}>
               <Button variant="contained" color="secondary" onClick={onNextClick}>
                  Next
               </Button>
            </Box>
         </Grid>
         <Grid item xs={12} md={4} mt={5}>
            <Box sx={{ ...GlobalStyles.flexBox }}>
               <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => alert('Save button pressed')}
               >
                  Save
               </Button>
            </Box>
         </Grid>
         <Grid item xs={12} md={4} mt={5}>
            <Box sx={{ ...GlobalStyles.flexBox }}>
               <Button
                  variant="contained"
                  color="secondary"
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
