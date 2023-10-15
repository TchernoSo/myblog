"use client"
import Link from "next/link";
import React,{useState} from "react";
import NavLinks from "./NavLinks";
import Style from "../components-style/style";
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid";
import { MenuOverlay } from "./MenuOverlay";

const navLinks = [
  {
    title: "Projects",
    path: "#project",
  },
  { title: "About Me", path: "#aboutme" },
  { title: "Contact me", path: "#contactme" },
];

const Navbar = () => {
    const[navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="fixed w-1/2 bg-black ">
      <div className="flex flex-wrap items-center justify-between px-4 py-2">
        <Link
          href={"/"}
          className=" text 2xl md:text-5xl text-white font-semibold"
        ></Link>
        <div className="mobile-menu block md:hidden">
{
   ! navbarOpen ? (
        <button onClick={() => setNavbarOpen(true)} className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"><Bars3Icon className="h-5 w-5"/></button>
            ) : (
                <button onClick={() => setNavbarOpen(false)} className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"><XMarkIcon className="h-5 w-5"/></button>
            )
}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLinks href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> :null }
    </nav>
  );
};

export default Navbar;
