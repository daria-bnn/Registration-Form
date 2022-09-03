import React, { FC, useCallback, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons'
import debounce from 'lodash/debounce'

import cnSearchBar from './SearchBar.classname'
import SearchBarHint from './SearchBarHint/SearchBarHint'

import './SearchBar.css'

type SearchBarProps = {
  onFilter: (filterValue: string) => void
}

const SearchBar: FC<SearchBarProps> = ({ onFilter }) => {
  const [value, setValue] = useState('')
  const [hints, setHints] = useState<string[]>([])

  useEffect(() => {
    onFilter(value)
  }, [value])

  const handleDebounceFilter = useCallback(
    debounce((valueFilter: string) => {
      if (valueFilter === '' || hints.includes(valueFilter)) {
        return
      }

      setHints([...hints, valueFilter])
    }, 1800),
    [hints]
  )

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event

    setValue(target.value)
    handleDebounceFilter(target.value)
  }

  const handleClear = () => {
    setValue('')
  }

  return (
    <div className={cnSearchBar()}>
      <label
        className={cnSearchBar('Search', { focus: value && true })}
        htmlFor={cnSearchBar('Field')}
      >
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className={cnSearchBar('IconSearch')}
        />
        <input
          className={cnSearchBar('Field')}
          id={cnSearchBar('Field')}
          value={value}
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
            <SearchBarHint key={hint} hint={hint} onValueFilter={setValue} />
          ))}
        </div>
      )}
    </div>
  )
}

export default SearchBar
