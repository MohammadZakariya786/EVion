import React from 'react'
import Hero from './Component/Hero'
import Navbar from './Component/Navbar'
import Logoanimation from './Component/Logoanimation'
import Keybenefits from './Component/Keybenefits'
import HowItWorks from './Component/HowItWorks'
import Testimonial from './Component/Testimonial'
import FAQ from './Component/FAQ'
import SliderCards from './Component/SliderCards'
import Footer from './Component/Footer'

const App = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Logoanimation/>
    <Keybenefits/>
    <HowItWorks/>
    <Testimonial/>
    <FAQ/>
    <SliderCards/>
    <Footer/>
    </>
  )
}

export default App