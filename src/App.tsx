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
// import RandomImage from './components/random-image/RandomImage/RandomImage'
import Menu from './components/drop-down-menu/Menu/Menu'
import FormMaterial from './components/FormMaterial/FormMaterial'
// const OPTIONS = [
//   { value: 'Angular', text: 'Angular' },
//   { value: 'React', text: 'React' },
// ]

const App = () => (
  <div className={cnApp()}>
    {/* <RandomImage /> */}
    <ScalableBlock classname={cnApp('ScalableBlock')} />
    <Menu />
    <FilterBlock />
    <PixelForm />
    <FormMaterial />
  </div>
)

export default App
