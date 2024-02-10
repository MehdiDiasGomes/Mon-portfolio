import React, { useState } from 'react'
import Logo from '../Assets/img/Logo.png'
import { RiMenuLine } from "react-icons/ri";

const Navbar = () => {

    const [showNav, setShowNav] = useState(false)

    const handleShowNav = () => {
        setShowNav(!showNav)
    }

    return (
        <div>
            <nav className={`flex justify-around px-24 py-8 bg-[#191919] items-center duration-300 fixed w-full max-lg:flex-col max-lg:h-full max-lg:justify-center max-lg:items-center max-lg:gap-16  ${showNav ? "max-lg:right-[0]" : "max-lg:right-[-100%]" }`}>
                <div className="w-10 max-lg:w-24">
                    <img src={Logo} alt="Logo du site" className='rounded-full' />
                </div>
                <ul className='flex items-center justify-center gap-10 text-xl text-white max-lg:flex-col max-lg:text-2xl'>
                    <li><a href="#" onClick={handleShowNav} className='hover:text-gradientSecondary duration-300'>Accueil</a></li>
                    <li><a href="#projets" onClick={handleShowNav} className='hover:text-gradientSecondary duration-300'>Projets</a></li>
                    <li><a href="#educ" onClick={handleShowNav} className='hover:text-gradientSecondary duration-300'>Éducation</a></li>
                    <li><a href="#" onClick={handleShowNav} className='hover:text-gradientSecondary duration-300'>Contact</a></li>
                </ul>
            </nav>
            <RiMenuLine className='text-primary font-bold text-4xl fixed right-5 top-5 cursor-pointer lg:hidden' onClick={handleShowNav}/>
        </div>
    )
}

export default Navbar;
