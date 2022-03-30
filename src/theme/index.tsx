// When using TypeScript 4.x and above
import type {} from '@mui/lab/themeAugmentation'

import { createTheme, responsiveFontSizes } from '@mui/material/styles' // import { TypographyOptions } from '@mui/material/styles/createTypography'
import { palette } from './constants'

let theme = createTheme({
   // MUI Palette overrides
   palette: palette
})

theme = responsiveFontSizes(theme)

export default theme
