import React, { FC, useState } from 'react'

type DropDownMenuPops = {
  items: string[]
}

const DropDown: FC<DropDownMenuPops> = ({ items }) => {
  const [active, setActive] = useState(undefined)

  return <ul>Пункты меню</ul>
}

export default DropDown
