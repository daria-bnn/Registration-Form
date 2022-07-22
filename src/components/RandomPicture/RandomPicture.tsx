import React, { FC, useEffect, useState } from 'react'
import getImage from '../../api/getImage'
import Image from '../../types/types'

const RandomPicture: FC = () => {
  const [image, setImage] = useState<Image>()

  useEffect(() => {
    getImage().then((result): void => {
      setImage(result)
    })
  }, [])

  return (
    <div>
      <h2>Случайная картинка</h2>
      {image && (
        <img
          src={image.urls.regular}
          alt={image.description ? image.description : 'image'}
        />
      )}
    </div>
  )
}
export default RandomPicture
