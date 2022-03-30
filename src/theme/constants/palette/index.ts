import { PaletteMode, PaletteOptions } from '@mui/material'
import { blue, red, yellow, orange, green } from '@mui/material/colors'
import { black, white } from '../colors'

declare module '@mui/material/styles' {
   interface Palette {
      gradient: Palette['background']
      black: Palette['primary']
      white: Palette['primary']
   }

   // allow configuration using `createTheme`
   interface PaletteOptions {
      gradient?: PaletteOptions['background']
      black: PaletteOptions['primary']
      white: PaletteOptions['primary']
   }
}

const paletteMode: PaletteMode = 'dark'

export const palette: PaletteOptions = {
   primary: {
      main: black['A700']
   },
   secondary: {
      main: blue['A700']
   },
   error: {
      main: red['900']
   },
   warning: {
      main: yellow['A700']
   },
   info: {
      main: orange['900']
   },
   success: {
      main: green['600']
   },
   mode: paletteMode,
   background: {
      default: black['A700'],
      paper: black['A700']
   },
   black: {
      main: black['A700']
   },
   white: {
      main: white['A700']
   }
}
