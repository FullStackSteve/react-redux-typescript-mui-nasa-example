// When using TypeScript 4.x and above
import type {} from '@mui/lab/themeAugmentation'

import { createTheme, responsiveFontSizes } from '@mui/material/styles' // import { TypographyOptions } from '@mui/material/styles/createTypography'
import { palette, typography } from './constants'

let theme = createTheme({
   // MUI Palette overrides
   palette: palette,
   // Typography styles overrides
   typography: typography
})

theme = responsiveFontSizes(theme)

export default theme
