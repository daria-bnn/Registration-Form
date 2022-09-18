import React from 'react'
import cnApp from './App.classname'
import FilterBlock from './components/search-and-filter/FilterBlock/FilterBlock'
import PixelForm from './components/PixelForm/PixelForm'
import ScalableBlock from './components/ScalableBlock/ScalableBlock'
import RandomImage from './components/random-image/RandomImage/RandomImage'
import Menu from './components/drop-down-menu/Menu/Menu'
import FormMaterial from './components/FormMaterial/FormMaterial'

import './App.css'

const App = () => (
  <div className={cnApp()}>
    <ScalableBlock classname={cnApp('ScalableBlock')} />
    <RandomImage />
    <Menu />
    <FilterBlock />
    <PixelForm />
    <FormMaterial />
  </div>
)

export default App
