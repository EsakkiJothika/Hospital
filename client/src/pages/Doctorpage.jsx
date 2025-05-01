import React from 'react'
import arav from "../assets/images/aarav.jpg"
import meera from "../assets/images/meera.jpg"
import varu from "../assets/images/varun.jpg"
import arju from "../assets/images/arjun.jpg"
import shaluma from "../assets/images/shalini.jpg"
import divya from "../assets/images/divya.jpg"
import "../css/doctor.css"

const Doctorpage = () => {
  return (
    <div>
        <div className="container pt-4 ">
            <h1 style={{textAlign:'center', color:"#E72929", fontWeight:"bold", fontFamily:"Poppins"}}>Our Specialists</h1>
            <div className="row justify-content-center mt-5 doct">
                <div className="col-lg-6">
                    <div className="card mb-3 ">
                    <div className="row justify-content-around p-2 g-0">
                        <div className="col-md-4">
                            <img src={arav} className="img-fluid rounded-start" alt="..."  />
                        </div>
                        <div className="col-md-7 align-self-center">
                            <div className="card-body">
                                <h5 className="card-title">Dr. Aarav Srinivasan</h5>
                                <p className="card-text"><b>Specialisation: </b>Cardiologist</p>
                                <p className="card-text"><b>Bio: </b>With over 12 years of experience in interventional cardiology, Dr. Aarav is known for his expertise in managing complex heart conditions. He believes in early intervention and compassionate care to help patients lead healthier lives.</p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>

                <div className="col-lg-6">
                    <div className="card mb-3 ">
                    <div className="row justify-content-around p-2 g-0">
                        <div className="col-md-4">
                            <img src={meera} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-7 align-self-center">
                            <div className="card-body">
                                <h5 className="card-title">Dr. Meera Iyer</h5>
                                <p className="card-text"><b>Specialisation: </b>Orthopedic Surgeon</p>
                                <p className="card-text"><b>Bio: </b>Dr. Meera is a skilled orthopedic specialist with a focus on joint replacements and sports injuries. She is dedicated to helping patients regain mobility with advanced surgical and physiotherapy solutions.</p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>

                <div className="col-lg-6">
                    <div className="card mb-3 ">
                    <div className="row justify-content-around p-2 g-0">
                        <div className="col-md-4">
                            <img src={varu} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-7 align-self-center">
                            <div className="card-body">
                                <h5 className="card-title">Dr. Varun Krishnan</h5>
                                <p className="card-text"><b>Specialisation: </b>Pediatrician</p>
                                <p className="card-text"><b>Bio: </b>A friendly and attentive pediatrician, Dr. Varun brings 8 years of experience in child care. He is passionate about child development, nutrition, and ensuring a strong foundation for lifelong health.</p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>

                <div className="col-lg-6">
                    <div className="card mb-3 ">
                    <div className="row justify-content-around p-2 g-0">
                        <div className="col-md-4">
                            <img src={shaluma} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-7 align-self-center">
                            <div className="card-body">
                                <h5 className="card-title">Dr. Shalini Raj</h5>
                                <p className="card-text"><b>Specialisation: </b>General Surgeon</p>
                                <p className="card-text"><b>Bio: </b>Dr. Shalini is a highly experienced general surgeon, adept in both open and laparoscopic procedures. Her approach focuses on patient safety, minimal recovery time, and clear pre/post-surgical guidance.</p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>

                <div className="col-lg-6">
                    <div className="card mb-3 ">
                    <div className="row justify-content-around p-2 g-0">
                        <div className="col-md-4">
                            <img src={arju} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-7 align-self-center">
                            <div className="card-body">
                                <h5 className="card-title">Dr. Arjun Das</h5>
                                <p className="card-text"><b>Specialisation: </b>Dermatologist</p>
                                <p className="card-text"><b>Bio: </b>Specializing in clinical and cosmetic dermatology, Dr. Arjun is an expert in treating chronic skin conditions and performing aesthetic procedures. He emphasizes natural results and patient education.</p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>

                <div className="col-lg-6">
                    <div className="card mb-3 ">
                    <div className="row justify-content-around p-2 g-0">
                        <div className="col-md-4">
                            <img src={divya} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-7 align-self-center">
                            <div className="card-body">
                                <h5 className="card-title">Dr. Divya Natarajan</h5>
                                <p className="card-text"><b>Specialisation: </b>Pediatric Cardiologist</p>
                                <p className="card-text"><b>Bio: </b>Dr. Divya combines her love for children with her expertise in heart care, treating congenital heart defects and pediatric cardiac concerns with gentle care and precision.</p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            
        </div>
      
    </div>
  )
}

export default Doctorpage
