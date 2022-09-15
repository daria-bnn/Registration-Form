import { FC, useState } from 'react'
import { cn } from '@bem-react/classname'

import { ImageInfo } from '../../../types/types'
import ImageLoad from '../Loading/Loading'

import './Picture.css'

const cnPicture = cn('Picture')

const Picture: FC<ImageInfo> = ({ url, description, color }) => {
  const [isImageLoaded, setIsImageLoaded] = useState<boolean>(false)

  const handleLoad = () => setIsImageLoaded(true)

  return (
    <div className={cnPicture()}>
      {!isImageLoaded && <ImageLoad color={color} />}

      <div className={cnPicture('Media')}>
        <img
          className={
            isImageLoaded
              ? cnPicture('Media')
              : cnPicture('Media')
          }
          src={url}
          alt={description !== null ? description : 'image'}
          onLoad={handleLoad}
        />
      </div>
    </div>
  )
}

export default Picture
