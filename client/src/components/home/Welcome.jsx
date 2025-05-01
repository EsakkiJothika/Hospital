import React from 'react'
import doc from "../../assets/images/hp2.png"
import "../../css/home.css"

const Welcome = () => {
  return (
    <div id='welcome'>
      <div className="row pt-4 px-2 pt-lg-0 px-sm-0 justify-content-center">
        <div className="col-lg-5 col-sm-7 ps-sm-4 ps-lg-0 align-self-center " >
          <h1 style={{fontWeight:"bold", fontSize:"29px", fontFamily:"Poppins"}}>Welcome to Harmony Care Hospital</h1>
          <p style={{textAlign:'justify', lineHeight:"170%", color:'black', fontSize:"16px", fontFamily:"Poppins", marginTop:"10px"}}> <i>At Harmony Care Hospital, we are committed to providing compassionate, world-class healthcare tailored to your needs. With state-of-the-art facilities and a team of dedicated medical professionals, we ensure your journey to recovery is smooth, safe, and supported every step of the way.</i></p>
        </div>
        <div className="col-lg-5 col-sm-5 ps-lg-4" >
          <img src={doc} alt="" className='img-fluid' />
        </div>
      </div>
      
    </div>
  )
}

export default Welcome
