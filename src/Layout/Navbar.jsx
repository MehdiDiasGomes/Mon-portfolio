import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { routes } from '../Constants'
import Logo from "../../public/logo.svg"

const Navbar = () => {
  const location = useLocation()

  if (routes.find(route => route.slug === location.pathname)) return

  return (
    <div className="flex justify-center">
      <nav className="z-50 flex justify-between py-8 items-center duration-300 w-[60%] rounded-xl mt-10 max-lg:gap-16 sm:w-[90%]">
        <div className="w-10">
            <img src={Logo} alt="Logo du site" className="" />
        </div>
        <ul className="flex text-[1rem] items-center justify-center gap-4 text-white">
          <li className="sm:hidden md:block">
            <a
              href="#projets"
              className="px-3 py-2 rounded-md duration-200 hover:text-PrimaryText">
              Projets
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="px-3 py-2 bg-interactiveColor rounded-md duration-200 hover:bg-interactiveColorHover">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
