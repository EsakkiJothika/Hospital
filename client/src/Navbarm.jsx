import React from 'react'
import e from "./assets/icon/medlogo.png";
import { Link } from 'react-router-dom';
import "./css/navbar.css"

const Navbarm = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
            <img src={e} alt="" className='img-fluid ' style={{width:"50px"}}/>
            <Link to={'/'} style={{textDecoration:"none", fontWeight:"bold", fontSize:"25px", color:"#E72929"}}>Harmony Care</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mt-2 mb-lg-0">
                <li className="nav-item">
                <Link className='Link' to={'/'} >Home</Link>
                </li>
                <li className="nav-item">
                <Link className='Link' to={'/about'}>About us</Link>
                </li>
                <li className="nav-item">
                <Link className='Link' to={'/service'}>Services</Link>
                </li>
                <li className="nav-item">
                <Link className='Link' to={'/doctor'} >Doctors</Link>
                </li>
                <li className="nav-item">
                <Link className='Link'>Get Appointment</Link>
                </li>
                <li className="nav-item">
                <Link className='Link'>Contact us</Link>
                </li>
                
            </ul>
            </div>
        </div>
</nav>

    </div>
  )
}

export default Navbarm
