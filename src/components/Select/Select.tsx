import React, { FC, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faXmark } from '@fortawesome/free-solid-svg-icons'

import { TOptin } from '../../types/types'
import SelectOption from './SelectOption/SelectOption'

import './Select.css'
import cnSelect from './Select.classname'

type SelectProps = {
  placeholder?: string
  value?: string
  options: TOptin[]
  onChange: (value: string) => void
}

const Select: FC<SelectProps> = ({ placeholder, value, options, onChange }) => {
  const [isVisible, setIsVisible] = useState(false)

  let selectLabel: string = placeholder || ''

  if (value) {
    const selectValue = options.find((option) => value === option.value)

    if (selectValue) {
      selectLabel = selectValue.value
    }
  }

  const handleClick = () => setIsVisible((prev) => !prev)

  const handelChangeOption = (selectValue: TOptin['value']) => {
    onChange(selectValue)
  }

  return (
    <>
      <button type="button" onClick={handleClick} className={cnSelect()}>
        {selectLabel}
        {isVisible ? (
          <FontAwesomeIcon icon={faXmark} />
        ) : (
          <FontAwesomeIcon icon={faChevronDown} />
        )}
      </button>
      {isVisible && (
        <div className={cnSelect('Options')}>
          {options.map((option) => (
            <SelectOption
              key={option.value}
              option={option}
              onChangeOption={handelChangeOption}
              selected={value === option.value}
            />
          ))}
        </div>
      )}
    </>
  )
}

Select.defaultProps = {
  placeholder: undefined,
  value: undefined,
}

export default Select
