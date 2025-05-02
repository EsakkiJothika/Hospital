import { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import Homepage from './pages/Homepage'
import Navbarm from './Navbarm'
import Navbar from './Navbar'
import Footer from './Footer'
import Aboutpage from './pages/Aboutpage'
import Servicepage from './pages/Servicepage'
import Doctorpage from './pages/Doctorpage'
import Appointmentpage from './pages/Appointmentpage'
import Contactpage from './pages/Contactpage'

function App() {
 

  return (
    
    <BrowserRouter>
    <div id='Navm'>
      <Navbarm />
    </div>
    <div id='dNav'>
      <Navbar />
    </div>
   
    <Routes>
      <Route path='/' element={<Homepage />}>Home</Route>
      <Route path='/about' element={<Aboutpage />}>About us</Route>
      <Route path='/service' element={<Servicepage />}>Services</Route>
      <Route path='/doctor' element={<Doctorpage />}>Doctors</Route>
      <Route path='/appointment' element={<Appointmentpage />}>Doctors</Route>
      <Route path='/contact' element={<Contactpage />}>Contact</Route>
    </Routes>

    <Footer />
    </BrowserRouter>
  )
}

export default App
