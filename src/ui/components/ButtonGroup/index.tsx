import { Grid, Box, Button } from '@mui/material'
import { GlobalStyles } from 'src/theme'
import { Link } from 'react-router-dom'
function ButtonGroup() {
   return (
      <Grid container spacing={2} sx={{ maxWidth: 600 }}>
         <Grid item xs={12} md={4} mt={5}>
            <Box sx={{ ...GlobalStyles.flexBox }}>
               <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => alert('Next Button pressed')}
               >
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
