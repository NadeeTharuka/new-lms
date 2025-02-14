import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

// Define the type
type Props = {
  name: string;
  image: string;
  role: string;
};

const SliderCard = ({ image, name, role }: Props) => {
  return (
    <div className="flex flex-wrap sm:flex-nowrap items-center space-x-10 p-6 bg-white shadow-lg rounded-lg">
      {/* Image Section */}
      <div className="relative w-[250px] h-[250px]">
        <Image
          src={image}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>

      {/* Text Content */}
      <div className="mt-6 mb-7">
        <h2 className="text-xl font-semibold text-gray-900">{name}</h2>
        <p className="text-gray-600">{role}</p>

        {/* Star Ratings */}
        <div className="flex items-center mt-2">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className="w-5 h-5 text-yellow-500" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SliderCard;
