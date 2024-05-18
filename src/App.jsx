import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Programs from './components/programg/Programs'
import Title from './components/title/Title'
import About from './components/about/About'
import Campus from './components/campus/Campus'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className='container'>
        <Title subTitle={"OUR PROGRAM"} title={"What We Offer"} />
        <Programs />
        <About />
        <Title subTitle={"GALLERY"} title={"Campus Photos"} />
        <Campus />
        <Title subTitle={"TESTIMONIALS"} title={"What Student Says"} />
        <Testimonials />
        <Title subTitle={"CONTACT US"} title={"Get in Touch"} />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App