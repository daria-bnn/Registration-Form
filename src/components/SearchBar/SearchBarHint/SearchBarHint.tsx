import React, { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons'

import cnSearchBar from '../SearchBar.classname'

type SearchBarHintProps = {
  hint: string
  onValueFilter: (valueFilter: string) => void
}

const SearchBarHint: FC<SearchBarHintProps> = ({ hint, onValueFilter }) => {
  const handleFilter = () => {
    onValueFilter(hint)
  }

  return (
    <div
      className={cnSearchBar('Hint')}
      onClick={handleFilter}
      onKeyPress={handleFilter}
      role="button"
      tabIndex={0}
    >
      <FontAwesomeIcon
        icon={faClockRotateLeft}
        className={cnSearchBar('HintIcon')}
      />
      <div className={cnSearchBar('HintText')}>{hint}</div>
    </div>
  )
}

export default SearchBarHint
