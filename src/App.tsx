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
// const OPTIONS = [
//   { value: 'Angular', text: 'Angular' },
//   { value: 'React', text: 'React' },
// ]

// const App = () => {
//   const [value, setValue] = useState<string | undefined>(undefined)

//   return (
//     <div className="App">
//       {/* <ImageContainer />
//     <Form /> */}
//       <Select
//         placeholder="Выберите..."
//         value={value}
//         options={OPTIONS}
//         onChange={setValue}
//       />
//     </div>
//   )
// }

const App = () => (
  <div className={cnApp()}>
    <FilterBlock />
    <PixelForm />
    <RandomImage />
    <ScalableBlock classname={cnApp('ScalableBlock')} />
  </div>
)

export default App
