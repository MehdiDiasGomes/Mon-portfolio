import React from 'react'
import Logo from '../Assets/img/Logo.png'

const Navbar = () => {
    return (
        <nav className='flex justify-around px-24 py-8 bg-[#222222] items-center fixed w-full'>
            <div className="w-10">
                <img src={Logo} alt="Logo du site" className='rounded-full' />
            </div>
            <ul className='flex items-center justify-center gap-10 text-2xl text-white'>
                <li><a href="#">Accueil</a></li>
                <li><a href="#">Projets</a></li>
                <li><a href="#">Expériences</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;
