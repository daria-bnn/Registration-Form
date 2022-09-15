import React, { FC, useState } from 'react'

import Select from '../Select/Select'
import cnMenu from './Menu.classname'

import './Menu.css'

const OPTIONS = [
  {
    value: 'JavaScript',
  },
  {
    value: 'Python',
  },
  {
    value: 'Java',
  },
]

const Menu: FC = () => {
  const [value, setValue] = useState<string | undefined>(undefined)

  return (
    <div className={cnMenu()}>
      <h2 className={cnMenu('Title')}>Выпадающее меню</h2>
      <Select
        placeholder="Выбор языка..."
        value={value}
        options={OPTIONS}
        onChange={setValue}
      />
    </div>
  )
}

export default Menu
