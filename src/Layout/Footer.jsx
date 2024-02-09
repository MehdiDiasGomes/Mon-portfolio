import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

const Footer = () => {
    return (
        <div className='flex justify-center items-center p-20 bg-[#191919]'>
            <div className="flex flex-col w-1/2 gap-10">
                <div>
                    <h3 className='text-primary text-4xl font-bold'>Contact</h3>
                </div>
                <div>
                    <p className='text-secondary text-parag'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ad voluptates voluptate optio officiis magni deleniti distinctio molestias ab ut.</p>
                </div>
                <div>
                    <a className='text-primary text-parag flex items-center gap-1' href="mailto:diasgomes.mehdicours@gmail.com"><MdOutlineMailOutline />diasgomes.mehdicours@gmail.com</a>
                </div>
                <div className="flex gap-7">
                    <a className='text-primary text-3xl' href="https://github.com/MehdiDiasGomes" target='blank'><FaGithub /></a>
                    <a className='text-primary text-3xl' href="https://www.linkedin.com/in/mehdi-dias-gomes-056654239" target='blank'><FaLinkedin /></a>
                </div>
            </div>
        </div>
    )
}

export default Footer;
