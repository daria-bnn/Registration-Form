import React from 'react'
import './App.css'
import DropDownMenu from './components/DropDown/DropDown'
import Form from './components/Form/Form'
// import ImageContainer from './components/ImageContainer/ImageContainer'

const App = () => (
  <div className="App">
    {/* <ImageContainer /> */}
    <Form />
    <DropDownMenu items={['Личный кабинет', 'Корзина', 'Каталог']} />
  </div>
)

export default App
