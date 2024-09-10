import React from 'react'
import {BrowserRouter, Routes, Route } from 'react-router-dom';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Header from './Components/Header/Header';
import PageNotFound from './Components/PageNotFound/PageNotFound';
import Home from './Components/Home/Home';
import About from './Components/About/About'; // Import About component
import Stories from './Components/Stories/Stories'; // Import Stories component
import Contact from './Components/Contact/Contact'; // Import Contact component
import Register from './Components/Register/Register'; // Import Register component
import CourseOffering from './Components/CourseOffering/CourseOffering';
import CourseCalender from './Components/CourseCalender/CourseCalender';


const App = () => {

  return (
    <BrowserRouter>
    <Header />  
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/home'  element={<Home />}/>
      <Route path='/about'  element={<About />}/>
      <Route path='/course-offering'  element={<CourseOffering />}/>
      <Route path='/course-calender'  element={<CourseCalender />}/>
      <Route path='/stories'  element={<Stories />}/>
      <Route path='/contact'  element={<Contact />}/>
      <Route path='/register'  element={<Register />}/>
      <Route path='*'  element={<PageNotFound />}/>
    </Routes>   
    </BrowserRouter>
  )
}

export default App;



