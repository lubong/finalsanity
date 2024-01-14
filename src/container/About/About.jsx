import React from 'react'
import './About.css'
import { AboutTextBlock } from "../../components";
import { AboutTestimonials } from "../../components";
import { AboutGallery } from "../../components";


const About = () => {
  return (
    <div className="text-center">
    <AboutTextBlock />
    <AboutTestimonials />
    <AboutGallery/>
    </div>
  )
}


export default About;