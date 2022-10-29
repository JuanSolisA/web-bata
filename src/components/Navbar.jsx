import React from "react";
import logo from "../assets/Batallón-Dorrego-removebg-preview.png";
import { navLinks } from "../constants";

const Navbar = () => (
  <div className="w-full flex py-4 px-4 justify-between items-center navbar bg-black">
    <a href="#">
      <div className="flex justify-between">
        <img src={logo} alt="" className="h-[30px] mr-2" />
        <h1 className="font-sans text-white font-bold">Batallón 2</h1>
      </div>
    </a>
    <div>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-sans font-bold cursor-pointer text-[16px] text-white ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            }`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default Navbar;
