import React, { FC, useState } from 'react'

import SearchBar from '../SearchBar/SearchBar'
import cnFilterBlock from './FilterBlock.classname'

import './FilterBlock.css'

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

const FilterBlock: FC = () => {
  const [filter, setFilter] = useState('')

  const handleFilter = (filterValue: string) => {
    setFilter(filterValue)
  }

  const filterTags = (): string[] =>
    DATA_TAGS.filter((tag) => tag.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div className={cnFilterBlock()}>
      <SearchBar onFilter={handleFilter} />
      {filter && (
        <div className={cnFilterBlock('FilterItems')}>
          {filterTags().map((tag) => (
            <div className={cnFilterBlock('Item')} key={tag}>
              {tag}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default FilterBlock
