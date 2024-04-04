import React, { useState } from 'react'
import Logo from '../Assets/img/Logo.png'
import { useLocation } from 'react-router-dom'
import { routes } from '../Constants'

const Navbar = () => {
  const location = useLocation()
  const [showNav, setShowNav] = useState(false)

  if (routes.find(route => route.slug === location.pathname)) return

  const handleShowNav = () => {
    setShowNav(!showNav)
  }

  return (
    <div>
      <nav
        className={` z-50 flex justify-around px-24 py-8 bg-[#191919] items-center duration-300 fixed w-full max-lg:flex-col max-lg:h-full max-lg:justify-center max-lg:items-center max-lg:gap-16  ${
          showNav ? 'max-lg:top-[0]' : 'max-lg:top-[-100%]'
        }`}>
        <div className="w-10 max-lg:w-24">
          <a href="#">
            <img src={Logo} alt="Logo du site" className="rounded-full" />
          </a>
        </div>
        <ul className="flex items-center justify-center gap-10 text-xl text-white max-lg:flex-col max-lg:text-2xl">
          <li>
            <a
              href="#"
              onClick={handleShowNav}
              className="hover:text-gradientSecondary duration-300">
              Accueil
            </a>
          </li>
          <li>
            <a
              href="#projets"
              onClick={handleShowNav}
              className="hover:text-gradientSecondary duration-300">
              Projets
            </a>
          </li>
          <li>
            <a
              href="#educ"
              onClick={handleShowNav}
              className="hover:text-gradientSecondary duration-300">
              Éducation
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={handleShowNav}
              className="hover:text-gradientSecondary duration-300">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div className="text-primary z-50 text-3xl fixed right-5 top-5 cursor-pointer lg:hidden">
        <i
          className={`${showNav ? 'ri-close-line' : 'ri-menu-line'}`}
          onClick={handleShowNav}></i>
      </div>
    </div>
  )
}

export default Navbar
