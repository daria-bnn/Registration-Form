import React, { FC, useEffect, useState } from 'react'
import { cn } from '@bem-react/classname'

import getImage from '../../../api/getImage'
import Picture from '../Picture/Picture'
import { ImageType } from '../../../types/types'

import './RandomImage.css'

const cnRandomImage = cn('RandomImage')

const RandomImage: FC = () => {
  const [imageRandom, setImageRandom] = useState<ImageType>()

  useEffect(() => {
    getImage().then((result): void => {
      setImageRandom(result)
    })
  }, [])

  return (
    <div className={cnRandomImage()}>
      <h2>Случайная картинка</h2>
      {imageRandom && (
        <Picture
          url={imageRandom.urls.small}
          description={imageRandom.description}
          color={imageRandom.color}
        />
      )}
    </div>
  )
}
export default RandomImage
