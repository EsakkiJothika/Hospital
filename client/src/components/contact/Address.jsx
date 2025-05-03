import React, { useState } from 'react'
import "../../css/contact.css"
import mail from "../../assets/icon/email.png"
import wp from "../../assets/icon/whatsapp.png"
import amb from "../../assets/icon/emergency.png"
import feed from "../../assets/icon/feedback.png"
import ph from "../../assets/icon/phone.png"

const Address = () => {

  let [name,setName] = useState();
  let [email,setEmail] = useState();
  let [phnum,setPhnum] = useState();
  let [msg,setMsg] = useState();

  let handleMessage = (e)=>{
    e.preventDefault();

    let form = document.getElementById('feedb');
        if (!form.checkValidity()) {
            form.classList.add('was-validated');
            return; // stop if validation fails
        }
    
    let msgdata = {
      Name : name,
      Email : email,
      Phone : phnum,
      Message : msg
    }

    // console.log(msgdata);
    
    setName("");
    setEmail("");
    setPhnum("");
    setMsg("");
    alert("Your message has been sent !");
    form.classList.remove('was-validated'); // reset validation state

  }

  return (
    <div className='mt-4 mt-sm-5 pb-5'>
      <div className="container" style={{fontFamily:"Poppins"}}>
        <div className="row justify-content-evenly">
          <div className="col-sm-5 col-lg-5">
            <h1 style={{fontWeight:"bold", color:"#E72929"}}>Share with us</h1>
            <p style={{fontSize:"20px"}} className='mt-4'>Send questions, complaints, suggestions and more via the form below.</p>

            <form action="" id='feedb'>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">Name</label>
                    <input type="text" className="form-control" required aria-describedby="" placeholder='Enter your Name' onChange={(e)=>{setName(e.target.value)}} value={name} />
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">Email</label>
                    <input type="email" className="form-control" required aria-describedby="" placeholder='Enter your Mail.id' onChange={(e)=>{setEmail(e.target.value)}} value={email} />
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">Mobile Number</label>
                    <input type="number" className="form-control" required aria-describedby="" placeholder='Enter your number' onChange={(e)=>{setPhnum(e.target.value)}} value={phnum} />
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">Message</label>
                    <input style={{height:"160px"}} type="text" required className="form-control"  aria-describedby=""  onChange={(e)=>{setMsg(e.target.value)}} value={msg} />
                </div>
                <div className="row mt-4">
                  <div className="col">
                    <button type="button" className="btn btn-outline-danger" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={handleMessage}>Send Message</button>
                  </div>
                </div>
            </form>
          </div>
          <div className="col-sm-6 col-lg-4 mt-4 mt-sm-0 addon">
            <h2 style={{fontWeight:"bold", color:"#E72929"}}>Hopital Address:</h2>
            <p className='mt-3'>12th Street, ABC Nagar, <br />
            Ganapathy, Coimbatore - 641006. <br />
            TamilNadu, India.
            <div className="container">
            <div className="row justify-content-evenly mt-4">
              <div className="col-2">
                <img src={mail} alt="" />
              </div>
              <div className="col-7">
                <h4>Enquiry</h4>
                <p>enquiry@hch.in</p>
              </div>
            </div>
            <div className="row justify-content-evenly mt-4">
              <div className="col-2">
                <img src={amb} alt="" />
              </div>
              <div className="col-7">
                <h4>Emergency</h4>
                <p>+91 9547868548</p>
                <p>+91 7854789632</p>
              </div>
            </div>
            <div className="row justify-content-evenly mt-4">
              <div className="col-2">
                <img src={ph} alt="" />
              </div>
              <div className="col-7">
                <h4>Phone</h4>
                <p>0422 4897563</p>
                <p>0422 8796542</p>
                <p>0422 4789523</p>
                <p>0422 4568527</p>
              </div>
            </div>
            <div className="row justify-content-evenly mt-4">
              <div className="col-2">
                <img src={feed} alt="" />
              </div>
              <div className="col-7">
                <h4>For Feedback</h4>
                <p>feedback@hch.in</p>
              </div>
            </div>
            <div className="row justify-content-evenly mt-4">
              <div className="col-2">
                <img src={wp} alt="" />
              </div>
              <div className="col-7">
                <h4>Whatsapp</h4>
                <p>+91 6542587967</p>
              </div>
            </div>
            </div>
            
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Address
