import React from "react";
import Image from "next/image";
import { navLinks } from "@/constant/constant";
import Link from "next/link";
import { HiBars3BottomRight } from "react-icons/hi2";

const Nav = () => {
  return (
    <div className="fixed top-0 w-full transition-all duration-200 h-[12vh] z-[1000] bg-blue-700">
      <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
        {/* Logo */}
        <Image 
          src="/images/logo.png" 
          alt="Website Logo" 
          width={120} 
          height={120} 
          priority 
        />

        {/* Navlinks */}
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link key={link.id} href={link.url} className="nav__link">
              {link.label}
            </Link>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex items-center space-x-4">
          <button className="md:px-10 md:py-2 px-8 py-1.5 text-white font-semibold text-base bg-pink-700
          hover:bg-pink-900 transition-all duration-200 rounded-lg">
            Signup Now
          </button>

          {/* Burger Menu */}
          <HiBars3BottomRight className="w-8 h-8 cursor-pointer text-white lg:hidden" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
