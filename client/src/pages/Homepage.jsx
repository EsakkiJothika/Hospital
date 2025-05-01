import React from 'react'
import Welcome from '../components/home/Welcome'
import Intro from '../components/home/Intro'
import Hservice from '../components/home/Hservice'
import Bookappointment from '../components/home/Bookappointment'

const Homepage = () => {
  return (
    <div>
      <Welcome />
      <Intro />
      <Hservice />
      <Bookappointment />
    </div>
  )
}

export default Homepage
