"use client";

import Smallcircle from "@/app/styleDiv/Smallcircle";
import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";

export default function Navigation() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="w-full flex justify-between py-4">
      <h1 className="text-2xl">Name</h1>
      <GiHamburgerMenu
        onClick={handleNav}
        className="text-3xl cursor-pointer"
      />
      <div
        onClick={handleNav}
        className={
          nav
            ? "z-[1] fixed top-0 h-full w-full bg-black opacity-70 duration-1000"
            : "z-[-1] fixed top-0 h-full w-full opacity-70 duration-1000"
        }
      ></div>
      <div
        onClick={handleNav}
        className={
          nav
            ? "z-10 fixed left-0 top-0 px-4 w-full sm:w-64 h-full ease-in-out duration-1000 bg-black"
            : "z-10 fixed -left-full top-0 px-4 w-full sm:w-64 h-full ease-in-out duration-1000 bg-black"
        }
      >
        <MdOutlineClose
          onClick={handleNav}
          className="text-white text-3xl mt-5 cursor-pointer ml-auto"
        />
        <ul className=" my-[11%]">
          <Link href="/">
            <li className="py-2 text-center text-2xl text-white font-semibold tracking-widest cursor-pointer hover:text-gray-400 duration-300">
              Home
            </li>
          </Link>

          <li className="py-2 text-center text-2xl text-white font-semibold tracking-widest cursor-pointer hover:text-gray-400 duration-300">
            Events
          </li>
          <Link href="/add">
            <li className="py-2 text-center text-2xl text-white font-semibold tracking-widest cursor-pointer hover:text-gray-400 duration-300">
              Add Event
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
