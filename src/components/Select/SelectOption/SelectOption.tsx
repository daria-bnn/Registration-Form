import React, { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

import { TOptin } from '../../../types/types'
import cnSelect from '../Select.classname'

import '../Select.css'

type SelectOptionProps = {
  option: TOptin
  selected: boolean
  onChangeOption: (value: string) => void
}

const SelectOption: FC<SelectOptionProps> = ({
  option,
  onChangeOption,
  selected,
}) => {
  const handelChangeOption = () => {
    selected ? onChangeOption('') : onChangeOption(option.value)
  }

  return (
    <div
      onClick={handelChangeOption}
      onKeyDown={handelChangeOption}
      role="button"
      tabIndex={0}
      className={cnSelect('Option', { selected })}
    >
      <div className={cnSelect('Chexbox')}>
        {selected && (
          <FontAwesomeIcon icon={faCheck} className={cnSelect('ChexboxIcon')} />
        )}
      </div>
      {option.value}
    </div>
  )
}

export default SelectOption
