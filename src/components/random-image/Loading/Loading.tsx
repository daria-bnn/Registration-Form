import React, { FC } from 'react'

import Icon from './LoadingIcon/LoadingIcon'
import cnLoading from './Loading.classname'

import './Loading.css'

type LoadingProps = {
  color: string
}

const Loading: FC<LoadingProps> = ({ color }) => (
  <div className={cnLoading()} style={{ backgroundColor: color }}>
    <Icon />
    <p className={cnLoading('Text')}>Идет загрузка...</p>
  </div>
)

export default Loading
