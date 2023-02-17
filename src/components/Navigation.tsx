"use client";

import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

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
            ? "z-[1000] fixed animate-pulse top-0 w-full h-full bg-black bg-opacity-50 ease-in-out duration-1000"
            : "z-[1000] hidden animate-pulse top-0 w-full duration-1000 h-full  bg-black bg-opacity-50 fixed rounde-md"
        }
      >
        {/* <div
          className={
            nav
              ? " ease-in-out left-0 top-0 w-full md:w-80 h-full p-4 bg-black text-white"
              : "ease-in-out -left-full top-0 w-full md:w-80 h-full p-4 bg-black text-white"
          }
        >
          <ul>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
          </ul>
        </div> */}
      </div>
    </div>
  );
}
