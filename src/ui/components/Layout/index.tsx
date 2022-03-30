import { CacheProvider, ThemeProvider } from '@emotion/react'
import { createEmotionCache } from 'src/ui/functions'
import { ReactChild } from 'react'
import { CssBaseline, Container, Box } from '@mui/material'
import theme, { GlobalStyles } from 'src/theme'
import { palette } from 'src/theme/constants'
// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

interface Props {
   children: ReactChild[] | ReactChild
}

function Layout({ children }: Props) {
   const emotionCache = clientSideEmotionCache
   const { background } = palette
   return (
      <CacheProvider value={emotionCache}>
         <ThemeProvider theme={theme}>
            <CssBaseline />
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
                     ...GlobalStyles.flexBox,
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
