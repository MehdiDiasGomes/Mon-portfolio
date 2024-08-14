import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { routes } from '../Constants'
import Theme from '../Components/Theme'

const Navbar = () => {
  const location = useLocation()

  if (routes.find(route => route.slug === location.pathname)) return

  return (
    <div className="flex justify-center">
      <nav className="z-50 flex justify-between py-8 items-center duration-300 w-[60%] rounded-xl mt-10 max-lg:gap-16 sm:w-[90%]">
        <div className="w-10">
          <svg
            viewBox="0 0 512 454"
            fill="#1e1e1e"
            xmlns="http://www.w3.org/2000/svg">
            <ellipse
              cx="257.169"
              cy="399.78"
              rx="53.7717"
              ry="53.7717"
              fill="#E5484D"
            />
            <path
              d="M0 301.589V0H88.8402L254.831 168.329L423.16 0H512V301.589L423.16 451.215V121.571L254.831 280.548L88.8402 121.571V215.087L0 301.589Z"
              fill="white"
            />
          </svg>
        </div>
        <ul className="flex text-[1rem] items-center justify-center gap-4 text-white">
          <li className="sm:hidden md:block">
            <a
              href="#projets"
              className="px-3 py-2 rounded-md duration-200 text-[#1e1e1e] dark:text-white font-medium hover:text-PrimaryText dark:hover:text-PrimaryText ">
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
          <li>
            <Theme />
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
