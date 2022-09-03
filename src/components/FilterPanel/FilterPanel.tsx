import React, { FC, useState } from 'react'

import SearchBar from '../SearchBar/SearchBar'
import cnFilterPanel from './FilterPanel.classname'

import './FilterPanel.css'

const DATA_TAGS = [
  'h1',
  'p',
  'div',
  'main',
  'footer',
  'section',
  'button',
  'input',
  'form',
  'option',
  'select',
  'br',
  'address',
  'body',
  'article',
  'img',
  'label',
  'picture',
  'span',
  'textarea',
  'video',
  'ul',
  'li',
  'head',
  'figure',
]

const FilterPanel: FC = () => {
  const [filter, setFilter] = useState('')

  const handleFilter = (filterValue: string) => {
    setFilter(filterValue)
  }

  const filterTags = (): string[] =>
    DATA_TAGS.filter((tag) => tag.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div className={cnFilterPanel()}>
      <SearchBar onFilter={handleFilter} />
      {filter && (
        <div className={cnFilterPanel('FilterItems')}>
          {filterTags().map((tag) => (
            <div className={cnFilterPanel('Item')} key={tag}>
              {tag}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default FilterPanel
