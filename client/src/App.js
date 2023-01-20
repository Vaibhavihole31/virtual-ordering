import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar/Navbar'
import Signup from './view/Signup/Signup'
import Login from './view/Login/Login'
import Home from './view/Home/Home'

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar myFoodListCount="100"/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App