import { cn } from '@bem-react/classname'
import { FC, useState } from 'react'

import { ImageInfo } from '../../../types/types'

import './Image.css'
import ImageLoad from './ImageLoad/ImageLoad'

const cnImage = cn('Image')

const Image: FC<ImageInfo> = ({ url, description, color }) => {
  const [isImageLoaded, setIsImageLoaded] = useState<boolean>(false)

  const handleLoad = () => setIsImageLoaded(true)

  return (
    <div className={cnImage()}>
      {!isImageLoaded && <ImageLoad color={color} />}

      <div className={cnImage('Media')}>
        <img
          className={
            isImageLoaded
              ? cnImage('Media')
              : cnImage('Media', { hidden: true })
          }
          src={url}
          alt={description !== null ? description : 'image'}
          onLoad={handleLoad}
        />
      </div>
    </div>
  )
}

export default Image
