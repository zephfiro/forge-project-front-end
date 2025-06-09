import './App.css'

import FunctionalComponent from './components/FunctiontalComponent'
import ClassComponent from './components/ClassComponent'
import PropExample from './components/PropExample'

function App() {
  return (
    <>
      <FunctionalComponent />
      <ClassComponent />
      <PropExample name="Peter" uncle_name="Ben" />
    </>
  )
}

export default App
