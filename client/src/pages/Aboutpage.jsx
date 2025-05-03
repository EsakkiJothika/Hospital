import React from 'react'
import accredit from "../assets/images/accrediation.jpg"

const Aboutpage = () => {
  return (
    <div className='pb-5'>
        <div className="container mt-4 mt-lg-5">
            <h1 style={{ textAlign: "center", color: "#E72929", fontFamily: "Poppins", fontWeight: "bold" }}>About Us</h1>

  {/* History */}
  <div className="mt-4">
    <h3 style={{ color: "#E72929" }}>Our History</h3>
    <p style={{ fontSize: "16px", fontFamily: "Poppins", lineHeight: "1.8" }}>Established in 2005, Harmony Care Hospital has grown from a small community clinic into one of the most trusted names in healthcare. With a legacy of care, compassion, and excellence, we have been at the forefront of delivering quality medical services for over 15 years. Our vision is to be a leading healthcare provider that transforms lives through advanced medical care, innovation, and a strong commitment to patient well-being. Every day, we strive to provide accessible, high-quality healthcare services with compassion, integrity, and professionalism — ensuring every patient receives the personal care they deserve. Over the years, we've continued to evolve and expand, integrating state-of-the-art medical technology with a patient-first philosophy that sets us apart. Harmony Care Hospital is proudly accredited by national healthcare authorities and maintains strict standards of medical quality and patient safety, reinforcing our dedication to excellence in every department. Our journey is one of continuous improvement, fueled by the trust of our patients and the unwavering dedication of our skilled medical professionals. At Harmony Care, we're not just treating illnesses — we're building healthier lives and stronger communities.
  </p>

  </div>

  {/* Vision */}
  <div className="mt-4">
    <h3 style={{ color: "#E72929" }}>Our Vision</h3>
    <p style={{ fontSize: "16px", fontFamily: "Poppins" }}>
      To be a leading healthcare provider that transforms lives through advanced medical care, innovation, and a strong commitment to patient well-being.
    </p>
  </div>

  {/* Mission */}
  <div className="mt-4">
    <h3 style={{ color: "#E72929" }}>Our Mission</h3>
    <p style={{ fontSize: "16px", fontFamily: "Poppins" }}>
      Our mission is to provide accessible, high-quality healthcare services with compassion, integrity, and professionalism — ensuring every patient receives the personal care they deserve.
    </p>
  </div>

  {/* Accreditation */}
  <div className="mt-4">
    <h3 style={{ color: "#E72929" }}>Accreditation</h3>
    <p style={{ fontSize: "16px", fontFamily: "Poppins" }}>
      Harmony Care Hospital is proudly accredited by national healthcare authorities and maintains strict standards of medical quality and patient safety.
    </p>
  </div>
</div>

      
    </div>
  )
}

export default Aboutpage
