import React from 'react'
import logo from './assets/icon/medlogo.png'
import { Link } from 'react-router-dom'
import "./css/navbar.css"

const Navbar = () => {
  return (
    <div className="row justify-content-evenly bg-light" id='home'>
        <div className="col-lg-1">
            <img src={logo} alt="" className='img-fluid' style={{height:"80px"}}/>
        </div>
        <div className="col-lg-3 mt-3 " style={{fontSize:"30px", color:"#E72929", fontWeight:"bold"}}>
            Hormony Care
        </div>
        <div className="col-lg-8 mt-4 ">
            <nav className='dnav mx-5'>
                <Link to={"/"} className='link'>Home</Link>
                <Link to={"/about"} className='link'>About us</Link>
                <Link to={"/service"} className='link'>Services</Link>
                <Link to={"/doctor"} className='link'>Doctors</Link>
                <Link to={"/appointment"} className='link'>Get Appointment</Link>
                <Link to={"/contact"} className='link'>Contact us</Link>
            </nav>
        </div>
    </div>
  )
}

export default Navbar
