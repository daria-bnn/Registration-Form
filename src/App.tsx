import React from 'react'
// import Form from './components/Form/Form'
// import ImageContainer from './components/ImageContainer/ImageContainer'
// import Select from './components/SelectExample/Select'

import './App.css'
// import Menu from './components/Menu/Menu'
import FilterBlock from './components/filter-block/FilterBlock/FilterBlock'
import PixelForm from './components/pixel-form/PixelForm/PixelForm/PixelForm'

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
  <div className="App">
    <FilterBlock />
    <PixelForm />
  </div>
)

export default App
