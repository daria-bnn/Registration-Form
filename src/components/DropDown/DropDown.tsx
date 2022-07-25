import React, { FC, useState } from 'react'

type DropDownMenuPops = {
  items: string[]
}

const DropDownMenu: FC<DropDownMenuPops> = ({ items }) => {
  const [itemValue, setItemValue] = useState('')

  const handleFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event

    setItemValue(target.value)
  }

  return (
    <ul>
      {items.map((item) => (
        <li key={item}>
          <label htmlFor={item}>
            {item}
            <input
              type="radio"
              id={item}
              name="itemValue"
              value={item}
              checked={itemValue === item}
              onChange={handleFieldChange}
            />
          </label>
        </li>
      ))}
    </ul>
  )
}

export default DropDownMenu
