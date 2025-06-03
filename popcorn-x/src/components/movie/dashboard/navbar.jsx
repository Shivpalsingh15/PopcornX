"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { LuPopcorn } from "react-icons/lu";
import { IoTv } from "react-icons/io5";
import { BsPersonHearts } from "react-icons/bs";
import { GrCertificate } from "react-icons/gr";
import { GoStopwatch } from "react-icons/go";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";



export default function Navbar() {
  const [NavTitleShow, setNavTitleShow] = useState(false);
  const [Hamburger, setHamburger] = useState(false);

  const navOption = [
    { title: "Home", path: "/", icon: <FaHome size={20} /> },
    { title: "Search", path: "/search", icon: <FaSearch size={15} /> },
    { title: "Movies", path: "/movies", icon: <LuPopcorn size={18} /> },
    { title: "TV", path: "/tv", icon: <IoTv size={18} /> },
    { title: "Person", path: "/people", icon: <BsPersonHearts size={18} /> },
    {
      title: "Certificates",
      path: "/certificates",
      icon: <GrCertificate size={18} />,
    },
    { title: "Provider", path: "/providers", icon: <GoStopwatch size={18} /> },
  ];

  const handleSelectedOption = (opt) => {
    console.log("Selected:", opt.title);
  };

  return (
    // <nav className=" sticky left-0 min-w-[5vw]   z-50 h-screen md-flex md-flex-col justify-around items-center bg-gray-900">
    //   <span className="flex-1/6 flex flex-col justify-center text-gray-200">
    //     Popcorn
    //   </span>
    //   <ul
    //     className={`flex flex-col gap-6 justify-center items-center  flex-2/3 `}
    //     >
    //     {navOption.map((opt, i) => (
    //       <li key={i}>
    //         <Link
    //           href={opt.path}
    //           onMouseEnter={() => setNavTitleShow(true)}
    //           onMouseLeave={() => setNavTitleShow(false)}
    //           className="text-gray-500 hover:text-gray-200 flex flex-col gap-2 items-center  relative"
    //           >
    //           <span>{opt.icon}</span>
    //           <span className="text-xs ">{opt.title}</span>
    //         </Link>
    //       </li>
    //     ))}
    //   </ul>

    // </nav>
    <div className="bg-gray-900 sticky w-full md:block "> 
      <nav className="text-gray-200 flex justify-between md:hidden p-2 ">
        <span onClick={() => setHamburger(!Hamburger)}>{!Hamburger ? <GiHamburgerMenu/>: <AiOutlineClose/>}</span>
        <span>Popcorn-X</span>
      </nav>
      {Hamburger && (
        <div className="block md-hidden    w-full z-50 text-gray-200">  
          <ul
            className={`flex flex-col md-hidden gap-6 justify-center items-center   `}
          >
            {navOption.map((opt, i) => (
              <li key={i}>
                <Link
                  href={opt.path}
                  onMouseEnter={() => setNavTitleShow(true)}
                  onMouseLeave={() => setNavTitleShow(false)}
                  className="text-gray-500 hover:text-gray-200 flex flex-col gap-2 items-center  md-hidden"
                >
                  <span>{opt.icon}</span>
                  <span className="text-xs ">{opt.title}</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="text-xs mt-10 p-2 text-gray-400">
            <b>Company</b>
            <div className="flex py-1 gap-5 ">
              <p>About us</p>
              <p>Carrers</p>
            </div>
            <b>Need Help ?</b>
            <div className="flex py-1 gap-5 ">
              <p>Visit Help Center</p>
              <p>Share Feed back</p>
            </div>
            <b>Connect With Us</b>
            <div className="flex py-1 gap-5 ">
              <p>Gmail </p>
              <p>Linkedin</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
