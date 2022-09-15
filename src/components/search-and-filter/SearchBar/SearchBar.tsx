import React, { FC, useCallback, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons'
import debounce from 'lodash/debounce'

import cnSearchBar from './SearchBar.classname'
import SearchBarHint from './SearchBarHint/SearchBarHint'

import './SearchBar.css'

type SearchBarProps = {
  onFilter: (filterValue: string) => void
  filter: string
}

const SearchBar: FC<SearchBarProps> = ({ onFilter, filter }) => {
  const [hints, setHints] = useState<string[]>([])

  const handleDebounceFilter = useCallback(
    debounce((valueFilter: string) => {
      if (hints.includes(valueFilter) || valueFilter === '') {
        return
      }

      setHints([...hints, valueFilter])
    }, 1800),
    [hints]
  )

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event

    onFilter(target.value)
    handleDebounceFilter(target.value)
  }

  const handleClear = () => {
    onFilter('')
    handleDebounceFilter('')
  }

  return (
    <div className={cnSearchBar()}>
      <label
        className={cnSearchBar('Search', { focus: filter && true })}
        htmlFor={cnSearchBar('Field')}
      >
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className={cnSearchBar('IconSearch')}
        />
        <input
          className={cnSearchBar('Field')}
          id={cnSearchBar('Field')}
          value={filter}
          placeholder="Фильтр"
          onChange={handleChange}
        />
        <button
          className={cnSearchBar('ButtonClear')}
          type="button"
          onClick={handleClear}
        >
          <FontAwesomeIcon
            icon={faXmark}
            className={cnSearchBar('ButtonClearIcon')}
          />
        </button>
      </label>

      {hints && (
        <div className={cnSearchBar('Hints')}>
          {hints.map((hint) => (
            <SearchBarHint key={hint} hint={hint} onValueFilter={onFilter} />
          ))}
        </div>
      )}
    </div>
  )
}

export default SearchBar
