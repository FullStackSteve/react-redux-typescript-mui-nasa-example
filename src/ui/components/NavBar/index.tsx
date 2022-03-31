import {
   Box,
   AppBar,
   Toolbar,
   IconButton,
   Button,
   Typography,
   useMediaQuery,
   useTheme,
   Drawer
} from '@mui/material'
import { Link } from 'react-router-dom'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'
import MenuIcon from '@mui/icons-material/Menu'
import { useState } from 'react'

function NavLinks({ isSmall, children }: { isSmall: boolean; children: any }) {
   const [drawerOpen, setDrawerOpen] = useState(false)
   if (isSmall) {
      return (
         <>
            <Button onClick={() => setDrawerOpen(true)}>
               <MenuIcon color="secondary" />
            </Button>
            <Drawer
               anchor={'right'}
               open={drawerOpen}
               onClose={() => setDrawerOpen(false)}
            >
               {children}
            </Drawer>
         </>
      )
   } else {
      return <>{children}</>
   }
}

function NavBar() {
   const theme = useTheme()
   const isSmall = useMediaQuery(theme.breakpoints.down('md'))

   return (
      <Box sx={{ flexGrow: 1 }}>
         <AppBar position="static">
            <Toolbar>
               <IconButton
                  size="large"
                  edge="start"
                  aria-label="menu"
                  component={Link}
                  to={'/'}
                  sx={{ mr: 2 }}
               >
                  <RocketLaunchIcon />
               </IconButton>
               <Box sx={{ flexGrow: 1 }}>
                  <Typography variant="h6">Nasa APOD</Typography>
               </Box>
               <NavLinks isSmall={isSmall}>
                  <Box mr={2} mt={isSmall ? 2 : 0}>
                     <Button
                        variant="contained"
                        color="secondary"
                        component={Link}
                        to={'/'}
                     >
                        APOD
                     </Button>
                  </Box>
                  <Box mt={isSmall ? 2 : 0}>
                     <Button
                        variant="contained"
                        color="secondary"
                        component={Link}
                        to={'/favourites'}
                     >
                        Favourites
                     </Button>
                  </Box>
               </NavLinks>
            </Toolbar>
         </AppBar>
      </Box>
   )
}

export default NavBar
