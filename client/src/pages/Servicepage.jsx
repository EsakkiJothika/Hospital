import React from 'react'
import "../css/service.css"
import cardio from "../assets/images/sercardio.jpg"
import ortho from "../assets/images/serortho.webp"
import pediat from "../assets/images/serpediatric.webp"
import surg from "../assets/images/sergensur.jpg"
import dermo from "../assets/images/serdermo.jpg"


const Servicepage = () => {
  return (
    <div id='service' className='container mt-4'>
      <h1>Services We Provide</h1>

      <div id='desk' className='mt-4'>
        <div>
            <h3>Cardiology</h3>
            <div className="row justify-content-around my-4">
                <div className="col-lg-4 ">
                    <img src={cardio} alt="" className='img-fluid' />
                </div>
                <div className="col-lg-7 ">
                    <p>At Harmony Care Hospital, our Cardiology Department stands as a cornerstone of expert heart care, offering an extensive range of diagnostic and therapeutic services for cardiovascular conditions. We are equipped with cutting-edge technology that aids in early detection, precise diagnosis, and efficient treatment of heart diseases such as hypertension, coronary artery disease, arrhythmias, congenital defects, and heart failure. Our seasoned cardiologists work closely with each patient to develop individualized treatment plans, combining medication, lifestyle management, interventional cardiology, and rehabilitation. We also emphasize preventive cardiology, guiding patients to adopt heart-healthy habits that reduce future risks. Whether it's a routine ECG or a complex angioplasty, our team ensures the highest standard of safety and compassion, making cardiac care more accessible and reassuring for everyone.</p>
                </div>
            </div>
        </div>

        <div>
            <h3>Orthopedics</h3>
            <div className="row justify-content-around my-4">
                <div className="col-lg-7">
                    <p>Our Orthopedics Department is dedicated to restoring mobility and improving the quality of life for patients suffering from disorders of the bones, joints, ligaments, and muscles. From sports injuries and fractures to arthritis and spinal deformities, our team of orthopedic specialists uses advanced imaging, minimally invasive procedures, and modern surgical techniques to deliver the best outcomes. We specialize in joint replacement surgeries, arthroscopy, trauma care, and post-operative rehabilitation programs that ensure speedy recovery. Each patient receives a detailed evaluation and a tailored treatment plan aimed at long-term mobility, comfort, and independence. Our integrated approach ensures that patients not only heal but thrive, getting back to their daily routines with strength and confidence.</p>
                </div>
                <div className="col-lg-4">
                    <img src={ortho} alt="" className='img-fluid' />
                </div>
            </div>
        </div>

        <div>
            <h3>Pediatrics</h3>
            <div className="row justify-content-around my-4">
                <div className="col-lg-4">
                    <img src={pediat} alt="" className='img-fluid' />
                </div>
                <div className="col-lg-7">
                    <p>Harmony Care Hospital's Pediatrics Department is a vibrant and nurturing space where children's health and well-being take center stage. We provide comprehensive care for newborns, infants, toddlers, and teenagers, covering everything from routine vaccinations and wellness checkups to the management of acute and chronic illnesses. Our pediatricians are trained to handle childhood infections, allergies, developmental delays, nutritional issues, and behavioral concerns with empathy and expertise. We believe in a family-centered approach, ensuring parents are actively involved in every decision regarding their child's health. With a warm environment, gentle care, and a commitment to preventive pediatrics, we ensure each child grows into a healthy and happy individual.</p>
                </div>
            </div>
        </div>

        <div>
            <h3>General Surgery</h3>
            <div className="row justify-content-around my-4">
                <div className="col-lg-7">
                    <p>The General Surgery Department at Harmony Care Hospital provides a full spectrum of surgical care ranging from minor procedures to complex operations. Our skilled surgeons are proficient in both open and laparoscopic (minimally invasive) techniques, ensuring optimal results with minimal discomfort and faster recovery. We offer treatments for gastrointestinal disorders, hernias, appendicitis, gallbladder issues, and various soft tissue conditions. With a strong emphasis on pre-operative assessment and post-operative care, our surgical team collaborates with anesthetists, physicians, and nurses to provide a seamless and safe surgical experience. Patient education, transparency, and empathy are at the heart of our practice, helping patients feel informed and comfortable every step of the way.</p>
                </div>
                <div className="col-lg-4">
                    <img src={surg} alt="" className='img-fluid' />
                </div>
            </div>
        </div>

        <div>
            <h3>Dermatology</h3>
            <div className="row justify-content-around my-4">
                <div className="col-lg-4">
                    <img src={dermo} alt="" className='img-fluid' />
                </div>
                <div className="col-lg-7">
                    <p>Our Dermatology Department provides specialized care for a wide range of skin, hair, and nail conditions using modern dermatological science and aesthetic techniques. From treating common concerns like acne, rashes, and eczema to addressing more complex issues such as skin infections, psoriasis, vitiligo, and skin cancers, our dermatologists offer precise diagnosis and effective treatment. We also provide cosmetic dermatology services, including chemical peels, anti-aging treatments, scar reduction, and skin rejuvenation, helping patients achieve not just healthy but radiant skin. Using safe, evidence-based methods and personalized plans, we focus on restoring both the appearance and confidence of our patients. Every visit is guided by empathy, discretion, and a dedication to enhancing overall skin wellness.</p>
                </div>
            </div>
        </div>
            
      </div>

      <div id='mobile' className='mt-4'>
        <div>
            <h3>Cardiology</h3>
            <div className="row justify-content-around my-4">
                <div className="col-lg-4">
                    <img src={cardio} alt="" className='img-fluid' />
                </div>
                <div className="col-lg-7 mt-3">
                    <p>At Harmony Care Hospital, our Cardiology Department stands as a cornerstone of expert heart care, offering an extensive range of diagnostic and therapeutic services for cardiovascular conditions. We are equipped with cutting-edge technology that aids in early detection, precise diagnosis, and efficient treatment of heart diseases such as hypertension, coronary artery disease, arrhythmias, congenital defects, and heart failure. Our seasoned cardiologists work closely with each patient to develop individualized treatment plans, combining medication, lifestyle management, interventional cardiology, and rehabilitation. We also emphasize preventive cardiology, guiding patients to adopt heart-healthy habits that reduce future risks. Whether it's a routine ECG or a complex angioplasty, our team ensures the highest standard of safety and compassion, making cardiac care more accessible and reassuring for everyone.</p>
                </div>
            </div>
        </div>

        <div>
            <h3>Orthopedics</h3>
            <div className="row justify-content-around my-4">
                <div className="col-lg-4">
                    <img src={ortho} alt="" className='img-fluid' />
                </div>
                <div className="col-lg-7 mt-3">
                    <p>Our Orthopedics Department is dedicated to restoring mobility and improving the quality of life for patients suffering from disorders of the bones, joints, ligaments, and muscles. From sports injuries and fractures to arthritis and spinal deformities, our team of orthopedic specialists uses advanced imaging, minimally invasive procedures, and modern surgical techniques to deliver the best outcomes. We specialize in joint replacement surgeries, arthroscopy, trauma care, and post-operative rehabilitation programs that ensure speedy recovery. Each patient receives a detailed evaluation and a tailored treatment plan aimed at long-term mobility, comfort, and independence. Our integrated approach ensures that patients not only heal but thrive, getting back to their daily routines with strength and confidence.</p>
                </div>
                
            </div>
        </div>

        <div>
            <h3>Pediatrics</h3>
            <div className="row justify-content-around my-4">
                <div className="col-lg-4">
                    <img src={pediat} alt="" className='img-fluid' />
                </div>
                <div className="col-lg-7 mt-3">
                    <p>Harmony Care Hospital's Pediatrics Department is a vibrant and nurturing space where children's health and well-being take center stage. We provide comprehensive care for newborns, infants, toddlers, and teenagers, covering everything from routine vaccinations and wellness checkups to the management of acute and chronic illnesses. Our pediatricians are trained to handle childhood infections, allergies, developmental delays, nutritional issues, and behavioral concerns with empathy and expertise. We believe in a family-centered approach, ensuring parents are actively involved in every decision regarding their child's health. With a warm environment, gentle care, and a commitment to preventive pediatrics, we ensure each child grows into a healthy and happy individual.</p>
                </div>
            </div>
        </div>

        <div>
            <h3>General Surgery</h3>
            <div className="row justify-content-around my-4">
                <div className="col-lg-4">
                    <img src={surg} alt="" className='img-fluid' />
                </div>
                <div className="col-lg-7 mt-3">
                    <p>The General Surgery Department at Harmony Care Hospital provides a full spectrum of surgical care ranging from minor procedures to complex operations. Our skilled surgeons are proficient in both open and laparoscopic (minimally invasive) techniques, ensuring optimal results with minimal discomfort and faster recovery. We offer treatments for gastrointestinal disorders, hernias, appendicitis, gallbladder issues, and various soft tissue conditions. With a strong emphasis on pre-operative assessment and post-operative care, our surgical team collaborates with anesthetists, physicians, and nurses to provide a seamless and safe surgical experience. Patient education, transparency, and empathy are at the heart of our practice, helping patients feel informed and comfortable every step of the way.</p>
                </div>
                
            </div>
        </div>

        <div>
            <h3>Dermatology</h3>
            <div className="row justify-content-around my-4">
                <div className="col-lg-4">
                    <img src={dermo} alt="" className='img-fluid' />
                </div>
                <div className="col-lg-7 mt-3">
                    <p>Our Dermatology Department provides specialized care for a wide range of skin, hair, and nail conditions using modern dermatological science and aesthetic techniques. From treating common concerns like acne, rashes, and eczema to addressing more complex issues such as skin infections, psoriasis, vitiligo, and skin cancers, our dermatologists offer precise diagnosis and effective treatment. We also provide cosmetic dermatology services, including chemical peels, anti-aging treatments, scar reduction, and skin rejuvenation, helping patients achieve not just healthy but radiant skin. Using safe, evidence-based methods and personalized plans, we focus on restoring both the appearance and confidence of our patients. Every visit is guided by empathy, discretion, and a dedication to enhancing overall skin wellness.</p>
                </div>
            </div>
        </div>
            
      </div>
    </div>
  )
}

export default Servicepage
