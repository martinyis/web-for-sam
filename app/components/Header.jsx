"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Squash as Hamburger } from "hamburger-react";
import Socials from "./Socials";
import Image from "next/image";
const Navbar = (props) => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleLinkClick = () => {
    setNavbarOpen(false);
  };

  useEffect(() => {
    const handleScrollLock = () => {
      document.body.style.overflow = navbarOpen ? "hidden" : "auto";
    };
    handleScrollLock();
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [navbarOpen]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-10 md:px-5 bg-[#fffff7] shadow-lg">
      <nav className="max-w-[1400px] mx-auto flex md:hidden h-[120px] justify-between gap-[10px] items-center text-[#0E6400] text-[20px]">
        <div>
          <Image
            src="/FILE_7068-1.png"
            alt="Sam Image"
            width={160}
            height={70}
            className="rounded-lg mx-auto"
          />
        </div>
        <ul className="flex gap-[40px] items-center lg:text-[18px] flex-wrap">
          <li className="relative group">
            <Link href="/">HOME</Link>
            <span className="absolute left-0 bottom-[-4px] w-full h-[2px] bg-[#FFDE00] scale-x-0 group-hover:scale-x-100 transform transition-transform duration-300"></span>
          </li>
          <li className="relative group">
            <Link href="/meetsam">MEET SAM</Link>
            <span className="absolute left-0 bottom-[-4px] w-full h-[2px] bg-[#FFDE00] scale-x-0 group-hover:scale-x-100 transform transition-transform duration-300"></span>
          </li>
          <li className="relative group">
            <Link href="/priorities">PRIORITIES</Link>
            <span className="absolute left-0 bottom-[-4px] w-full h-[2px] bg-[#FFDE00] scale-x-0 group-hover:scale-x-100 transform transition-transform duration-300"></span>
          </li>
          <li className="relative group">
            <Link href="/contact">CONTACT</Link>
            <span className="absolute left-0 bottom-[-4px] w-full h-[2px] bg-[#FFDE00] scale-x-0 group-hover:scale-x-100 transform transition-transform duration-300"></span>
          </li>
          <li className="relative group">
            <Link href="https://secure.winred.com/friends-of-sam-farrington/donate-today">
              DONATE
            </Link>
            <span className="absolute left-0 bottom-[-4px] w-full h-[2px] bg-[#FFDE00] scale-x-0 group-hover:scale-x-100 transform transition-transform duration-300"></span>
          </li>
        </ul>
        <Socials />
      </nav>
      <nav className="md:block gap-[66px] hidden h-[80px]">
        <div className="flex items-center justify-between items-center mt-2">
          <div>
            <Image
              src="/FILE_7068-1.png"
              alt="Sam Image"
              width={100}
              height={70}
              className="rounded-lg mx-auto"
            />
          </div>
          <div className="z-50 right-0">
            <Hamburger
              toggled={navbarOpen}
              toggle={setNavbarOpen}
              duration={0.3}
              easing="ease-in"
              color="#0E6400"
            />
          </div>
        </div>
        <div
          className={`absolute left-1/2 transform -translate-x-1/2 top-0 bg-[#FEFFDE] w-[100%] h-screen z-10
          ${navbarOpen ? "translate-y-0" : "-translate-y-full"} h-screen`}
          style={{ transition: "transform 0.3s ease-in-out" }}
        >
          <ul className="text-[23px] font-normal text-center text-[#0E6400] flex flex-col gap-10 pt-[60px]">
            <li className="relative group">
              <Link href="/" onClick={handleLinkClick}>
                HOME
              </Link>
              <span className="absolute left-0 bottom-[-4px] w-full h-[2px] bg-[#FFDE00] scale-x-0 group-hover:scale-x-100 transform transition-transform duration-300"></span>
            </li>
            <li className="relative group">
              <Link href="/meetsam" onClick={handleLinkClick}>
                MEET SAM
              </Link>
              <span className="absolute left-0 bottom-[-4px] w-full h-[2px] bg-[#FFDE00] scale-x-0 group-hover:scale-x-100 transform transition-transform duration-300"></span>
            </li>
            <li className="relative group">
              <Link href="/priorities" onClick={handleLinkClick}>
                PRIORITIES
              </Link>
              <span className="absolute left-0 bottom-[-4px] w-full h-[2px] bg-[#FFDE00] scale-x-0 group-hover:scale-x-100 transform transition-transform duration-300"></span>
            </li>
            <li className="relative group">
              <Link href="/contact" onClick={handleLinkClick}>
                CONTACT
              </Link>
              <span className="absolute left-0 bottom-[-4px] w-full h-[2px] bg-[#FFDE00] scale-x-0 group-hover:scale-x-100 transform transition-transform duration-300"></span>
            </li>
            <li className="relative group">
              <Link
                href="https://secure.winred.com/friends-of-sam-farrington/donate-today"
                onClick={handleLinkClick}
              >
                DONATE
              </Link>
              <span className="absolute left-0 bottom-[-4px] w-full h-[2px] bg-[#FFDE00] scale-x-0 group-hover:scale-x-100 transform transition-transform duration-300"></span>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
