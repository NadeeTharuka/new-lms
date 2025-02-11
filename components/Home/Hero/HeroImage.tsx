"use client";
import React from 'react'
import Tilt from "react-parallax-tilt";
import Image from 'next/image';

const HeroImage = () => {
  return (
   <Tilt>
    <div className="hidden lg:block">
        <Image src="/images/hero.png" width={800} height={600} alt="Hero"/>
    </div>
   </Tilt>
  )
}

export default HeroImage;
