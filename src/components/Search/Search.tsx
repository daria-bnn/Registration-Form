import React, { FC, useState } from 'react'
import FilterPanel from '../FilterPanel/FilterPanel'

const DATA_TAGS = [
  'h1',
  'p',
  'div',
  'header',
  'main',
  'footer',
  'section',
  'button',
  'input',
  'form',
  'option',
  'select',
  'br',
]

const Search: FC = () => {
  const [filter, setFilter] = useState('')
  const [hints, setHints] = useState<string[]>([])

  const handleFilter = (filterValue: string) => {
    setFilter(filterValue)
  }

  const handleHints = (filterValue: string) => {
    setHints([...hints, filterValue])
  }

  const filterTags = (): string[] =>
    DATA_TAGS.filter((tag) => tag.toLowerCase().includes(filter.toLowerCase()))

  return (
    <>
      <FilterPanel
        onFilter={handleFilter}
        filterValue={filter}
        onAddedHints={handleHints}
      />
      {filterTags().map((tag) => (
        <div
          onKeyPress={() => handleFilter(tag)}
          role="button"
          tabIndex={0}
          onClick={() => handleFilter(tag)}
        >
          {tag}
        </div>
      ))}
      {
        hints.map(hint => <div>{hint}</div>)
      }
    </>
  )
}

export default Search
