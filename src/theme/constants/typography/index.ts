import { TypographyOptions } from '@mui/material/styles/createTypography'
import sizes from '../sizes'

export const typography: TypographyOptions = {
   fontFamily: ['Roboto'].join(','),
   h1: { fontSize: sizes.largest, fontWeight: 'bold' },
   h2: { fontSize: sizes.larger },
   h3: { fontSize: sizes.large },
   h4: { fontSize: sizes.regular },
   h5: { fontSize: sizes.medium },
   h6: { fontSize: sizes.small },
   subtitle1: { fontSize: sizes.regular },
   subtitle2: { fontSize: sizes.smallest },
   body1: { fontSize: sizes.regular },
   body2: { fontSize: sizes.small },
   caption: { fontSize: sizes.smallest },
   button: { fontSize: sizes.button },
   overline: { fontSize: sizes.small }
}
