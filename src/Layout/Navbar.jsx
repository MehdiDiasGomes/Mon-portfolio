import React, { useState } from 'react'
import Logo from '../Assets/img/Logo.png'
import { useLocation } from 'react-router-dom'
import { routes } from '../Constants'

const Navbar = () => {
  const location = useLocation()

  if (routes.find(route => route.slug === location.pathname)) return

  return (
    <div className="flex justify-center">
      <nav className="z-50 flex justify-between px-8 py-8 items-center duration-300 w-[60%] rounded-xl mt-10 max-lg:gap-16 sm:w-[90%]">
        <div className="w-10">
          <a href="#">
            <img src={Logo} alt="Logo du site" className="" />
          </a>
        </div>
        <ul className="flex text-[1rem] items-center justify-center gap-4 text-white">
          <li className="sm:hidden md:block">
            <a
              href="#projets"
              className="px-3 py-2 rounded-md duration-200 hover:text-[#0EA5E9]">
              Projets
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="px-3 py-2 bg-[#0EA5E9] rounded-md duration-200 hover:bg-[#0ea4e9a4]">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
