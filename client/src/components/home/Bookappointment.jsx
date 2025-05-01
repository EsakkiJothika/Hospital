import React from 'react'
import e from "../../assets/images/hp3.jpg"
import {Link} from 'react-router-dom'

const Bookappointment = () => {
  return (
    <div className='mt-4 mt-sm-5'>
      <div className="row justify-content-center ">
        <div className="col-lg-5">
            <img src={e} alt="" className='img-fluid' style={{width:"100%", borderRadius:"10px"}}/>
        </div>
        <div className="col-lg-5 pt-4 pt-lg-0 ps-4 align-self-center ">
            <p style={{fontFamily:"Poppins", fontSize:"20px"}}>Your health is our highest priority. At <b>Harmony Care Hospital</b> , we are committed to providing compassionate care, advanced treatments, and a healing environment for you and your loved ones.</p>
            <p style={{fontFamily:"Poppins", fontSize:"20px"}}>For appointment, Please Click the button :</p>
            <Link to={'/'}> <button className='testbutton'>Book Appointment</button> </Link>
        </div>
      </div>
    </div>
  )
}

export default Bookappointment
