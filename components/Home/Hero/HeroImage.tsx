"use client";
import React from 'react'
import Tilt from "react-parallax-tilt";
import Image from 'next/image';

const HeroImage = () => {
  return (
   <Tilt>
    <div 
      data-aos="fade-left" 
      data-aos-delay="1050"
      className="hidden lg:block overflow-hidden"
    >
        <Image src="/images/hero.png" width={800} height={600} alt="Hero"/>
    </div>
   </Tilt>
  )
}

export default HeroImage;
