import React from 'react'

import AboutMe from '../HomePage/AboutMe';
import Carousel from '../HomePage/Carousel';
import Course from '../HomePage/Course';
import CourseSpecialities from '../HomePage/CourseSpecialities';
import Footer from '../HomePage/Footer';
import Slider from '../HomePage/Slider';






const Home = () => {
  return (
    <div>
      <Carousel />
      <AboutMe />
      <Course />
      <CourseSpecialities />
      <Slider />
      <Footer />
    </div>
  )
}

export default Home;
