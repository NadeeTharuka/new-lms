"use client";

import React from 'react';
import Tilt from 'react-parallax-tilt';
import Image from 'next/image';

const Feature = () => {
  return (
    <div className="pt-16 pb-16">
        <div className="mt-8 grid grid-cols-1 xl:grid-cols-2 items-center gap-12 w-[80%] mx-auto">
            {/* Image */}
            <Tilt>
            <div>
              <Image src="/images/f.png" alt="image" width={1000} height={1000} />
            </div>
            </Tilt>
            {/* Text content */}
            <div>TEXT</div>
        </div>
      
    </div>
  );
};

export default Feature;
