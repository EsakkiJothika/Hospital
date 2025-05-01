import React from 'react'
import "../../index.css"
import "../../css/home.css"
import cardio from "../../assets/images/cardio.webp"
import ortho from "../../assets/images/orthopedics.png"
import pedia from "../../assets/images/Pediatrics.jpg"
import gensug from "../../assets/images/generalsurg.jpg"
import derma from "../../assets/images/dermatology.jpg"

const Hservice = () => {
  return (
    <div className='mt-2 pt-5 pb-5 bg-light'>
      <h1 style={{textAlign:"center", fontFamily:"Poppins", fontWeight:'bold', color:"#E72929"}}>Services We Provide</h1>
      <div className="row justify-content-center mx-2 mt-5 mt-sm-3 mt-lg-4 carf">
        <div className="col-lg-4 col-md-5 mt-sm-4">
            <div className="card" >
                <img src={cardio} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Cardiology</h5>
                    
                </div>
            </div>
        </div>
        <div className="col-lg-4 col-md-5  mt-2 mt-sm-4">
            <div className="card" >
                <img src={ortho} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Orthopedics</h5>
                   
                </div>
            </div>
        </div>
        <div className="col-lg-4 col-md-5 mt-2 mt-sm-4">
            <div className="card">
                <img src={pedia} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Pediatrics</h5>
                   
                </div>
            </div>
        </div>
        <div className="col-lg-4 col-md-5 mt-2 mt-sm-4">
            <div className="card" >
                <img src={gensug} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">General Surgery</h5>
                   
                </div>
            </div>
        </div>
        <div className="col-lg-4 col-md-5 mt-2 mt-sm-4">
            <div className="card" >
                <img src={derma} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Dermatology</h5>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hservice
