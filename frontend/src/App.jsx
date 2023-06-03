import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import {Frontpage, Herosection} from '../index'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' Component={Frontpage} />
        <Route path='/herosection' Component={Herosection} />
      </Routes>
      {/* <Navbar /> */}
      {/* <Frontpage /> */}
    </div>
  )
}

export default App
