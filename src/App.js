import React from 'react'
import Home from './components/Home'
import Events from './components/Events'
import {Route, Routes} from "react-router-dom"
import Next from './components/Next'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/events' element={<Events/>} />
        <Route path='/' element={<Home/>}/>
        <Route path='/next' element={<Next/>}/>
      </Routes>
      
    
    </div>
  )
}

export default App