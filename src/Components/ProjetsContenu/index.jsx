import React from 'react'
import PixelArtPic from '../../Assets/img/Projets/pixelArt.png'
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaCss3 } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";

const index = ({ titre, img, desc, maquettingTitre, devTitre, hebergementTitre }) => {
    return (
        <div className="flex justify-center">

            <div className='flex items-center duration-300 hover:scale-110 gap-2 absolute top-32 left-72 text-secondary hover:text-primary'>
                <FaArrowLeft />
                <Link to="/">Revenir en arrière</Link>
            </div>

            <div className="py-16 flex flex-col gap-20 pcScreen:w-1/2 md:w-full sm:w-full xl:w-[70%] lg:w-9/12">

                <div className='flex justify-center'>
                    <h2 className='text-5xl text-primary font-bold'>{titre}</h2>
                </div>

                <div className='flex gap-10 justify-center items-center'>
                    <img className='w-[50rem]' src={img} alt={titre} />
                </div>

                <div className='flex flex-col gap-16 justify-center items-start px-16'>

                    <div className='flex gap-7 text-primary'>
                        <a href="https://pixel-art-self-seven.vercel.app/" target='_blank' className='bg-primary md:text-xl text-black p-5 flex justify-center items-center hover:bg-[#ffffffec] font-bold sm:text-paragMobile'>Ouvrir</a>
                        <a href="https://github.com/MehdiDiasGomes/PixelArt" target='_blank' className='text-primary md:text-xl border-2 border-primary p-5 flex items-center justify-center hover:text-black hover:bg-primary duration-300 font-bold sm:text-paragMobile'>Code source</a>
                    </div>

                    <div className='flex flex-col gap-10'>
                        <h3 className='text-3xl text-primary font-bold'>Description du projet</h3>
                        <p className='text-secondary text-xl text-justify'>{desc}</p>
                    </div>

                    <div className='flex flex-col gap-10'>

                        <h3 className='text-3xl text-primary font-bold'>Outils utilisés</h3>
                        <div className='flex gap-32 items-start'>

                            <div className='flex flex-col gap-10 justify-center items-start'>
                                <h4 className='text-2xl font-bold bg-gradient-to-r from-gradientPrimary to-gradientSecondary text-transparent bg-clip-text'>Maquetting</h4>
                                <div className='flex flex-col text-4xl gap-1'>

                                    <div className='text-xl flex gap-5 items-center text-primary'>
                                        <FaFigma className='text-4xl' />
                                        <span>{maquettingTitre}</span>
                                    </div>

                                </div>
                            </div>

                            <div className='flex flex-col gap-10 justify-center items-start'>
                                <h4 className='text-2xl font-bold bg-gradient-to-r from-gradientPrimary to-gradientSecondary text-transparent bg-clip-text'>Développement</h4>
                                <div className='flex flex-col text-4xl text-primary'>
                                    <div className='flex flex-col gap-10'>
                                        <div className='text-xl flex gap-5 items-center text-primary'>
                                            <FaReact className='text-4xl' />
                                            <span>{devTitre}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-col gap-10 justify-center items-center'>
                                <h4 className='text-2xl font-bold bg-gradient-to-r from-gradientPrimary to-gradientSecondary text-transparent bg-clip-text'>Hébergement</h4>
                                <div className='flex flex-col text-4xl gap-10 text-primary'>
                                    <div className='text-xl flex gap-5 items-center'>
                                        <IoLogoVercel className='text-4xl' />
                                        <span>{hebergementTitre}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default index
