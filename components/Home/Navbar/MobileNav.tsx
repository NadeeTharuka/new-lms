import { navLinks } from '@/constant/constant';
import Link from 'next/link';
import React from 'react';
import { CgClose } from 'react-icons/cg';

// define props type
type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ closeNav, showNav }: Props) => {
  const navOpen = showNav ? "translate-x-0" : "-translate-x-full";

  return (
    <div>
      {/* Overlay */}
      <div
        className={`fixed top-0 left-0 right-0 bottom-0 bg-black opacity-70 w-full h-screen transition-all duration-500 z-[10000] ${
          showNav ? "block" : "hidden"
        }`}
        onClick={closeNav} // Close nav when clicking outside
      />
      {/* Sidebar */}
      <div
        className={`text-black fixed justify-center flex flex-col h-full transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-indigo-900 space-y-6 z-[100006] ${navOpen}`}
      >
        {/* Nav Links */}
        {navLinks.map((link) => (
          <Link key={link.id} href={link.url} onClick={closeNav}>
            <p className="nav__link text-[20px] ml-12 border-b-[1.5px] pb-2 border-black sm:text-[30px] ">
              {link.label}
            </p>
          </Link>
        ))}
        {/* Close Button */}
        <CgClose
          onClick={closeNav}
          className="absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 text-black cursor-pointer"
        />
      </div>
    </div>
  );
};

export default MobileNav;
