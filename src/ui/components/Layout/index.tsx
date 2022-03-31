import { CacheProvider, ThemeProvider } from '@emotion/react'
import { createEmotionCache } from 'src/ui/functions'
import { ReactChild } from 'react'
import { CssBaseline, Container, Box, useMediaQuery, useTheme } from '@mui/material'
import { default as customTheme, GlobalStyles } from 'src/theme'
import { palette } from 'src/theme/constants'
import NavBar from '../NavBar'
// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

interface Props {
   children: ReactChild[] | ReactChild
}

function Layout({ children }: Props) {
   const theme = useTheme()
   const isBig = useMediaQuery(theme.breakpoints.up('md'))
   const emotionCache = clientSideEmotionCache
   const { background } = palette
   const responsiveBoxStyles = isBig
      ? {
           ...GlobalStyles.flexBox
        }
      : {}

   return (
      <CacheProvider value={emotionCache}>
         <ThemeProvider theme={customTheme}>
            <CssBaseline />
            <NavBar />
            <Container
               sx={{
                  width: '100vw',
                  background,
                  marginTop: 0
               }}
               disableGutters={true}
            >
               <Box
                  alignItems="center"
                  sx={{
                     ...responsiveBoxStyles,
                     width: '100%',
                     minHeight: '100vh'
                  }}
               >
                  {children}
               </Box>
            </Container>
         </ThemeProvider>
      </CacheProvider>
   )
}

export default Layout
