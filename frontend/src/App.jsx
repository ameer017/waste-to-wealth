import './App.css'
import {Routes, Route} from 'react-router-dom'
import {DashLayout, Home, Layout, Login,  NewAbout,  NewService,  Signup, UsersList, Welcome} from '../index'

function App() {

  return (
    <div className="App">
      <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={< Home/>} />
            <Route path='/newabout' element={<NewAbout/>}/>
            <Route path='/newservice' element={<NewService/>}/>
            <Route path='/signup' element={<Signup />} />
            <Route path='/login' element={<Login />} /> 

            <Route path='/dash' element={<DashLayout/>}>
              <Route index element={<Welcome/>}/>
              <Route path='users'>
                <Route index element={<UsersList/>}/>
              </Route>
            </Route>
          </Route>
      </Routes>

    </div>
  )
}

export default App

