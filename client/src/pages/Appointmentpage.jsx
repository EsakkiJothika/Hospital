import React, { useEffect, useState } from 'react'
import "../css/appoint.css"
import bapp from "../assets/images/bookapp.png"

const Appointmentpage = () => {

    useEffect(()=>{
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant" // or "smooth" if you prefer
        });
    },[])

    let [pname,setPname] = useState();
    let [age,setAge] = useState();
    let [num,setNum] = useState();
    let [dept,setDept] = useState();
    let [date,setDate] = useState();

    let handleAppointment = (e) => {
        e.preventDefault();
    
        let form = document.getElementById('forum');
        if (!form.checkValidity()) {
            form.classList.add('was-validated');
            return; // stop if validation fails
        }
    
        let patientdata = {
            name: pname,
            age: age,
            number: num,
            department: dept,
            date: date
        };
    
        // console.log(patientdata);
        setPname("");
        setAge("");
        setNum("");
        setDept("");
        setDate("");
        alert("Your Appointment was Confirmed !")
        form.classList.remove('was-validated'); // reset validation state
    }
    

  return (
    <div style={{backgroundColor:"rgb(237, 237, 237)"}}>
      <div className="container py-4" >
        <h1 style={{fontWeight:"bold", fontFamily:"Poppins", color:"#E72929"}}>Booking Appointment</h1>
        <div className="row justify-content-evenly my-4">
            <div className="col-6 deskbook">
                <div className="row pt-4">
                <p style={{fontFamily:"Poppins", lineHeight:"170%", fontSize:"larger"}}>We're here to make your healthcare experience simple and stress-free. Just fill out the form  to schedule your visit — your care is our priority.</p>
                    <div className="col-7 pt-5">
                        
                        <p style={{fontFamily:"Poppins", fontSize:"50px", fontWeight:"bold", color:"#E72929"}}>"Your journey to wellness begins with us"</p>
                    </div>
                    <div className="col-5  align-self-end">
                        <img src={bapp} alt="" className='img-fluid' style={{paddingTop:"50px"}} />
                    </div>
                </div>

            </div>
            <div className="col-lg-4 col-sm-7 p-3 p-sm-4 " style={{border:"1px solid #E72929", borderRadius:"10px"}}>
                <form action="" id='forum'>
                    <div className="mb-3">
                        <label htmlFor="" className="form-label">Patient's Name</label>
                        <input type="text" className="form-control" required placeholder='Enter Name' onChange={(e)=>{setPname(e.target.value)}} value={pname} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="" className="form-label">Patient's Age</label>
                        <input type="number" className="form-control" required placeholder='Enter Age' onChange={(e)=>{setAge(e.target.value)}} value={age} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="" className="form-label">Contact Number</label>
                        <input type="number" className="form-control" required placeholder='Enter MobileNumber' onChange={(e)=>{setNum(e.target.value)}} value={num} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="" className="form-label">Department</label>
                        <select className="form-select" required onChange={(e)=>{setDept(e.target.value)}} value={dept} >
                            <option value="general">General Checkup</option>
                            <option value="cardio">Cardiology</option>
                            <option value="ortho">Orthopedics</option>
                            <option value="pedia">Pediatrics</option>
                            <option value="gyno">Gynecology</option>
                            <option value="dermo">Dermatology</option>
                            <option value="neuro">Neurology</option>
                            <option value="physio">Physiotherapy</option>
                            <option value="diabetic">Diabetology</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="" className="form-label">Consultation Date</label>
                        <input type="date" className="form-control" required onChange={(e)=>{setDate(e.target.value)}} value={date} />
                    </div>
                    <div className="row mt-4">
                        <div className="col">
                            {/* <button className='testbutton' onClick={handleAppointment} data-bs-toggle="modal">Fix Appointment</button> */}
                            <button type="submit" className='testbutton'  onClick={handleAppointment} >Fix Appointment</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

      </div>
    </div>
  )
}

export default Appointmentpage
