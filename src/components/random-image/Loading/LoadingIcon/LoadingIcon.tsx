import React, { FC } from 'react'
import cnLoading from '../Loading.classname'

import loading from './assets/loading.svg'

const Icon: FC = () => (
  <div className={cnLoading('Icon')}>
    <img src={loading} alt="loading" />
  </div>
)

export default Icon
