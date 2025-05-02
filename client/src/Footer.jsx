import React from 'react'
import mail from "../src/assets/icon/mailicon.png"
import location from "../src/assets/icon/location.png"
import call from "../src/assets/icon/call.png"
import { Link } from 'react-router-dom'
import "./App.css"

const Footer = () => {
  return (
    <div className='mt-5' style={{fontFamily:"Poppins", backgroundColor:"#E72929"}}>
      <div className="container px-3 px-sm-0 pb-3" style={{color:"white"}}>
        <div className="row justify-content-center pt-5">
          <div className="col-sm-5 col-lg-4 pb-3 pb-sm-0">
            <h5 className='pb-sm-4'>Get in Touch</h5>
            <div className="row">
              <div className="col-2 col-lg-1">
                <img src={location} alt="" />
              </div>
              <div className="col-10 col-lg-9">
                <p>12th Street, ABC Nagar, <br /> Ganapathy, Coimbatore - 641006. <br />
                TamilNadu, India.</p>
              </div>
            </div>
            <div className="row">
              <div className="col-2 col-lg-1">
                <img src={mail} alt="" />
              </div>
              <div className="col-10 col-lg-9">
                <p>enquiry@hch.in | feedback@hch.in</p>
              </div>
            </div>
            <div className="row">
              <div className="col-2 col-lg-1">
                <img src={call} alt="" />
              </div>
              <div className="col-10 col-lg-9">
                <p>0422 4897563 <br />
                  0422 8796542 <br />
                  0422 4789523 <br />
                  0422 4568527</p>
              </div>
            </div>
            
          </div>
          <div className="col-sm-3 col-lg-3 ps-lg-4 pb-5 pb-sm-0">
            <h5 className='pb-sm-4'>Quick Links</h5>
            <Link to={'/service'} className='qlink'>Services</Link><br /><br />
            <Link to={'/about'} className='qlink'>About us</Link><br /><br />
            <Link to={'/appointment'} className='qlink'>Appointment</Link><br /><br />
            <Link to={'/contact'} className='qlink'>Contact us</Link><br /><br />
            <Link to={'/doctor'} className='qlink'>Doctors</Link>
          </div>
          <div className="col-sm-4 col-lg-3">
            <h5>Follow Us</h5>
            <div id='sm'>
              <img src="https://www.psghospitals.com/wp-content/themes/psghospitals/assets/images/fb.png" />
              <img src="https://www.psghospitals.com/wp-content/themes/psghospitals/assets/images/twtr.png" />
              <img src="https://www.psghospitals.com/wp-content/themes/psghospitals/assets/images/in-icon.png" />
              <img src="https://www.psghospitals.com/wp-content/themes/psghospitals/assets/images/instagram-icon.png" />
              <img src="https://www.psghospitals.com/wp-content/themes/psghospitals/assets/images/youtube-icon.png" />
              <img src="https://www.psghospitals.com/wp-content/themes/psghospitals/assets/images/whatsapp-icon.png" />
            </div>
          </div>
        </div>
      </div>
      <div className="row bg-light" style={{height:"80px"}}>
            <div className="col  align-self-center pt-3">
              <p className="text-center" style={{color:"#E72929"}}> &copy; {new Date().getFullYear()} Harmony Care Hospital. All Rights Reserved.</p>
            </div>
      </div>
    </div>
  )
}

export default Footer
