import React, { FC } from 'react'
import { cn } from '@bem-react/classname'

import loading from './assets/loading.svg'

import './Icon.css'

const cnIcon = cn('Icon')

const Icon: FC = () => (
  <div className={cnIcon()}>
    <img src={loading} alt="loading" />
  </div>
)

export default Icon
