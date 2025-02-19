import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import LandingPage from './pages/LandingPage'
import OtpPage from './pages/OtpPage'
import AlertPage from './pages/AlertPage'
import Cancel from './pages/Cancel'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/login' element={<LandingPage/>}/>
      <Route path='/nav' element={<NavBar/>}/>
      <Route path='/otp' element={<OtpPage/>}/>
      <Route path='/alert' element={<AlertPage/>}/>
      <Route path='/frost' element={<Cancel/>}/>
    </Routes>
    </>
  )
}

export default App