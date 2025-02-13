import React from 'react'
import Hero from './Hero/Hero';
import About from './About/About';
import Courses from './Course/Courses';
import Feature from './Feature/Feature';

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Courses />
      <Feature/>
    </div>
  )
};

export default Home;