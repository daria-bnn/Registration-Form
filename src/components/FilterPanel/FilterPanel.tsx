import React, { FC, useState } from 'react'

type FilterPanelProps = {
  onFilter: (filter: string) => void
  onAddedHints: (filter: string) => void
  filterValue: string
}

const FilterPanel: FC<FilterPanelProps> = ({
  filterValue,
  onFilter,
  onAddedHints,
}) => {
  const [value, setValue] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event

    setValue(target.value)
    onFilter(target.value)
    onAddedHints(target.value)
  }

  return (
    <input type="text" value={filterValue || value} onChange={handleChange} />
  )
}

export default FilterPanel
