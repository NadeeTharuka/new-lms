"use client";

import React from 'react'
import Tilt from "react-parallax-tilt";
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';

// define the type
type Props = {
    course: {
        id: number;
        image: string;
        title: string;
        price: number;
        author: string;
        reviewNumber: number;
        lessons: number;
        students: number;
        category: string;
    };
};
const CourseCard = ({ course }: Props) => {
  return (
    <Tilt>
      <div className="bg-white rounded-lg overflow-hidden cursor-pointer">
        { /* Image */}
        <div>
          <Image
           src={course.image}
           alt={course.title}
           width={400}
           height={400}
           className="w-full h-full" 
           
           />
        </div>
        <div className="p-4">
          {/* Price */}
          <h1 className="ml-auto relative z-[10] h-20 w-20 flex items-center text-lg font-bold justify-center flex-col mt-[-4rem] rounded-full bg-rose-700 text-white">
            ${course.price}
          </h1>
        {/* information */}
        <div className="flex items-center mt-6 space-x-4">
          <span className="text-lg text-black text-opacity-70 font-bold">
            {course.category}
            </span>
            <span className="text-base text-gray-600">{course.author}</span>
        </div>
        {/* title */}
        <h1 className="text-xl text-black font-bold mt-2">{course.title}</h1>
        {/* reviews */}
        <div className="flex mt-2 items-center space-x-2">
          <div className="flex items-center">
            <FaStar className="w-4 h-4 text-yellow-600" />
            <FaStar className="w-4 h-4 text-yellow-600" />
            <FaStar className="w-4 h-4 text-yellow-600" />
            <FaStar className="w-4 h-4 text-yellow-600" />
            <FaStar className="w-4 h-4 text-yellow-600" />
          </div>
          <span className="text-base text-orange-800 font-semibold">
            ({course.reviewNumber} Reviews)
          </span>
        </div>
        </div>
      </div>
    </Tilt>
    
  )
}

export default CourseCard
