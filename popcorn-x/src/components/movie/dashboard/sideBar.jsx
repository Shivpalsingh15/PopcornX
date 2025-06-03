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

export default function SideBar() {
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
    <nav className="  sticky left-0 w-0 md:min-w-[7vw]   z-50 h-screen md-flex md-flex-col justify-around items-center bg-gray-900">
      <span className="flex-1/6 flex flex-col justify-center text-gray-200">
        Popcorn
      </span>
      <ul
        className={`flex flex-col gap-6 justify-center items-center  flex-2/3 `}
      >
        {navOption.map((opt, i) => (
          <li key={i}>
            <Link
              href={opt.path}
              onMouseEnter={() => setNavTitleShow(true)}
              onMouseLeave={() => setNavTitleShow(false)}
              className="text-gray-500 hover:text-gray-200 flex flex-col gap-2 items-center  relative"
            >
              <span>{opt.icon}</span>
              <span className="text-xs ">{opt.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
