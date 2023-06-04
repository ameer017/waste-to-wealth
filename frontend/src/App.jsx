import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import {Frontpage, Herosection, Layout} from '../index'

function App() {

  return (
    <div className="App">
      <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<Frontpage />} />
            <Route path='/herosection' element={<Herosection />} />
            
          </Route>
      </Routes>

    </div>
  )
}

export default App
