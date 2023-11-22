import React from 'react'
import ScrollToTop from '../Components/New/ScrollToTop'
import Navbar from '../Components/New/Navbar'
import Hero from '../Components/New/Hero'
import Services from '../Components/New/Services'
import Destinations from '../Components/New/Destination'
import Offer from '../Components/New/Offer'
import Tours from '../Components/New/Tours'
import Testimonial from '../Components/New/Testimonials'
import Footer from '../Components/Footer/Footer'

const New = () => {
  return (
    <div>
      {/* <ScrollToTop /> */}
      <Navbar />
      <Hero />
      <Services />
      <Destinations />
      <Offer />
      <Tours />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default New
