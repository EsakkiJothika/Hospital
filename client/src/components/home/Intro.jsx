import React from 'react'
import "../../css/home.css"
import "../../index.css"

const Intro = () => {
  return (
    <div className='container mt-5'>
        <h5 style={{textAlign:"center", fontWeight:"bold", color:"rgb(107, 103, 103)", fontFamily:"Poppins"}}>Harmony Care Hospital</h5>
        <div className="container mt-4 " id='quote'>
            <h1 style={{textAlign:"center", fontWeight:"bold", color:"#E72929"}}>Your health is our mission and Your comfort is our promise.</h1>
        </div>
        <div className="row justify-content-center mt-4 mt-sm-5">
            <div className="col-lg-5  align-self-center">
                <h3 style={{textAlign:'center', color:"#E72929", fontFamily:"Poppins"}}>Who we are?</h3>
            </div>
            <div className="col-lg-7 pt-2 pt-sm-0" style={{fontFamily:"Poppins"}}>

                <p style={{textAlign:"justify"}}>Harmony Care Hospital is a trusted name in healthcare, known for its patient-first approach and modern medical facilities. We offer a wide range of specialized services backed by experienced doctors and cutting-edge technology Our goal is to ensure quality care with compassion, making your health our top priority. At Harmony Care Hospital, we believe that healthcare is not just about treating illnesses — it's about caring for people. </p>

                <p style={{textAlign:"justify"}}>With a team of skilled doctors, compassionate nurses, and advanced medical technology, we provide comprehensive care across multiple specialties. Whether it's a routine check-up, a specialized consultation, or a complex surgery — our patients receive personalized care every step of the way. We offer a wide range of medical services including Cardiology, Orthopedics, Pediatrics, General Surgery, and Dermatology, all under one roof. Our state-of-the-art facilities ensure accurate diagnosis and effective treatments with a focus on patient comfort and safety</p>

                <p style={{textAlign:"justify"}}>Let us be your health partner — because at Harmony Care Hospital, your well-being is our greatest priority.</p>

            </div>
        </div>
      
    </div>
  )
}

export default Intro
