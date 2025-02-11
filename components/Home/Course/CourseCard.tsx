import React from 'react'


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
const CourseCard = ({}: Props) => {
  return (
    <div>
      
    </div>
  )
}

export default CourseCard
