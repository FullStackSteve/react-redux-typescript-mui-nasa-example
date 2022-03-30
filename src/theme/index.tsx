// When using TypeScript 4.x and above
import type {} from '@mui/lab/themeAugmentation'

import { createTheme, responsiveFontSizes } from '@mui/material/styles' // import { TypographyOptions } from '@mui/material/styles/createTypography'

let theme = createTheme({})

theme = responsiveFontSizes(theme)

export default theme
