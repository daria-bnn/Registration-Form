import React from 'react'

// import Form from './components/Form/Form'
// import ImageContainer from './components/ImageContainer/ImageContainer'
// import Select from './components/SelectExample/Select'

// import Menu from './components/Menu/Menu'
import cnApp from './App.classname'
import FilterBlock from './components/search-and-filter/FilterBlock/FilterBlock'
import PixelForm from './components/PixelForm/PixelForm'

import './App.css'
import ScalableBlock from './components/ScalableBlock/ScalableBlock'
import RandomImage from './components/random-image/RandomImage/RandomImage'
import Menu from './components/drop-down-menu/Menu/Menu'
import Select from './components/drop-down-menu/Select/Select'
// const OPTIONS = [
//   { value: 'Angular', text: 'Angular' },
//   { value: 'React', text: 'React' },
// ]

const App = () => (
  <div className={cnApp()}>
    <RandomImage />
    <Menu />
    <FilterBlock />
    <PixelForm />
    <ScalableBlock classname={cnApp('ScalableBlock')} />
  </div>
)

export default App
