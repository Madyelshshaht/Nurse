import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import HeroSection from '../components/HeroSection/HeroSection'
import ServicesSection from '../components/services/Services'
import About from '../components/About/About'
import ContactUs from '../components/ContactUs/ContactUs'
import Footer from '../components/Footer/Footer'

const Index = () => {
    return (
        <div className="min-h-screen">
            <Navbar />
            <div className='pt-15 sm:px-5 px-2 mt-5'>
                <HeroSection />
                <ServicesSection />
                <About />
                <ContactUs />
            </div>
            <Footer />
        </div>
    )
}

export default Index