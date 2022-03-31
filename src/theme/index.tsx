// When using TypeScript 4.x and above
import type {} from '@mui/lab/themeAugmentation'

import { createTheme, responsiveFontSizes } from '@mui/material/styles'
import { palette, typography } from './constants'

let theme = createTheme({
   // MUI Palette overrides
   palette: palette,
   // Typography styles overrides
   typography: typography
})

theme = responsiveFontSizes(theme)

export { default as GlobalStyles } from './global'

export default theme
