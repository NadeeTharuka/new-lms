import React from 'react'
import Image from 'next/image'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="pt-20 pb-12 bg-black relative z-10">
        {/* Define grid */}
        <div className="w-[80%] mx-auto grid items-start grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-8 border-b-[1.5px] border-opacity-20 border-gray-600">
            {/* 1st footer part */}
            <div>
                <Image src="/images/logo.png" alt="Logo" height={100} width={100} />
                <p className="text-white text-opacity-50 mt-4">
                    Your website description or tagline here.
                </p>
                {/* Social Links */}
                <div className="flex items-center space-x-4 mt-6">
                    <FaFacebookF className="w-6 h-6 text-blue-600 cursor-pointer hover:text-blue-800 transition" />
                    <FaTwitter className="w-6 h-6 text-sky-500 cursor-pointer hover:text-sky-700 transition" />
                    <FaYoutube className="w-6 h-6 text-red-700 cursor-pointer hover:text-red-900 transition" />
                    <FaInstagram className="w-6 h-6 text-pink-600 cursor-pointer hover:text-pink-800 transition" />
                </div>
            </div>
            
            {/* 2nd part */}
            <div>
                <h1 className="footer_heading">Popular</h1>
                <p className="footer_link">Web Development</p>
                <p className="footer_link">Hacking</p>
                <p className="footer_link">UI/UX Design</p>
                <p className="footer_link">App Development</p>
                <p className="footer_link">Desktop Development</p>
                <p className="footer_link">Digital Marketing</p>
            </div>
            {/* 3rd part */}
            <div>
                <h1 className="footer_heading">Quick Link</h1>
                <p className="footer_link">Home</p>
                <p className="footer_link">About</p>
                <p className="footer_link">Courses</p>
                <p className="footer_link">Instructor</p>
                <p className="footer_link">Profile</p>
                <p className="footer_link">Privacy Police</p>
            </div>
            {/* 4th part(newsletter) */}
            <div>
                <h1 className="footer__heading">Subscribe our Newsletter</h1>
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="px-6 py-2 rounded-lg outline-none bg-gray-700 w-full text-white"
                />
                <button className="px-6 py-2 mt-4 rounded-lg outline-none bg-rose-700 w-full text-white">
                    Subscribe
                </button>
            </div>
        </div>
        <p className="text-center mt-4 text-base text-white opacity-70">
            Copyright 2025 by Aztra pvt ltd
        </p>
    </div>
  )
}

export default Footer
