import React, { FC } from 'react'
import { cn } from '@bem-react/classname'

import './ImageLoad.css'
import Icon from './Icon/Icon'

type ImageLoadProps = {
  color: string
}

const cnImageLoad = cn('ImageLoad')

const ImageLoad: FC<ImageLoadProps> = ({ color }) => (
  <div className={cnImageLoad()} style={{ backgroundColor: color }}>
    <Icon />
    <p className={cnImageLoad('Text')}>Идет загрузка...</p>
  </div>
)

export default ImageLoad
