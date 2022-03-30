import React from 'react'
import logo from './logo.svg'
import './App.css'
import { createEmotionCache } from './ui/functions'
import { CacheProvider, ThemeProvider } from '@emotion/react'
import theme, { GlobalStyles } from './theme'
import { Container, CssBaseline, Box, Typography } from '@mui/material'
import { palette } from './theme/constants'
import { ButtonGroup } from './ui/components'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

function App() {
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
                  <img src={logo} className="App-logo" alt="logo" />
                  <Typography variant="h1" component="h1" textAlign="center" gutterBottom>
                     Edit <code>src/App.tsx</code> and save to reload.
                  </Typography>
                  <ButtonGroup />
               </Box>
            </Container>
         </ThemeProvider>
      </CacheProvider>
   )
}

export default App
