import React, { FC, useEffect, useState } from 'react'
import { cn } from '@bem-react/classname'

import './ImageContainer.css'

import getImage from '../../api/getImage'
import Image from './Image/Image'
import { ImageType } from '../../types/types'

const cnImageContainer = cn('ImageContainer')

const ImageContainer: FC = () => {
  const [imageRandom, setImageRandom] = useState<ImageType>()

  useEffect(() => {
    getImage().then((result): void => {
      setImageRandom(result)
    })
  }, [])

  return (
    <div className={cnImageContainer()}>
      <h2>Случайная картинка</h2>
      {imageRandom && (
        <Image
          url={imageRandom.urls.small}
          description={imageRandom.description}
          color={imageRandom.color}
        />
      )}
    </div>
  )
}
export default ImageContainer
