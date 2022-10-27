import React from 'react'

import cnApp from './App.classname'
import FormMaterial from './components/FormMaterial/FormMaterial'

import './App.css'

const App = () => (
  <div className={cnApp()}>
    <FormMaterial />
  </div>
)

export default App
