import { Grid, Box, Button } from '@mui/material'
import { GlobalStyles } from 'src/theme'
function ButtonGroup() {
   return (
      <Grid container spacing={2} sx={{ maxWidth: 600 }}>
         <Grid item xs={12} md={4} mt={5}>
            <Box sx={{ ...GlobalStyles.flexBox }}>
               <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => alert('Button pressed')}
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
                  onClick={() => alert('Button pressed')}
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
                  onClick={() => alert('Button pressed')}
               >
                  Favourites
               </Button>
            </Box>
         </Grid>
      </Grid>
   )
}

export default ButtonGroup
