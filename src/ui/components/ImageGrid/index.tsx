import { ImageList, ImageListItem, useMediaQuery, useTheme } from '@mui/material'

interface Props {
   images: string[]
}

function ImageGrid({ images = [] }: Props) {
   const theme = useTheme()
   const isSmall = useMediaQuery(theme.breakpoints.down('md'))
   if (images.length === 0) return <>No favourites</>
   return (
      <ImageList
         sx={{ width: '100%', height: '100%' }}
         cols={isSmall ? 1 : 3}
         rowHeight={'auto'}
      >
         {images.map((image, index) => {
            return (
               <ImageListItem key={index}>
                  <img src={image} loading="lazy" />
               </ImageListItem>
            )
         })}
      </ImageList>
   )
}

export default ImageGrid
