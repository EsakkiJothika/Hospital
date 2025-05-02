import React from 'react'
import "../css/contact.css"
import Address from '../components/contact/Address'

const Contactpage = () => {
  return (
    <>
      <div id='cont'>
          <div className="row justify-content-end " id='cover'>
              <div className="col-lg-8 col-sm-7 align-self-center">
                  <h1>Contact us</h1>
                  <p style={{fontFamily: "Poppins",fontSize: "20px",color: "white",textAlign: "center"}}>Reach out — because your health deserves attention.</p>
              </div>
          </div>
      </div>

      <Address /> 

    </>
  )
}

export default Contactpage
