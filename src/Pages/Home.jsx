import React from 'react'
import Mehdi from '../Assets/img/Mehdi.jpg'

const Home = () => {
    return (
        <div className='flex flex-col items-center justify-center'>
            <div className='flex flex-col gap-12 justify-center items-center'>
                <div className="flex flex-col gap-12 items-center">
                    <img src={Mehdi} alt="Logo du site" className="w-44 rounded-full" />
                    <h1 className='text-5xl text-white font-bold text-center'>Mehdi <br />
                        <span className='bg-gradient-to-r from-gradientPrimary to-gradientSecondary text-transparent bg-clip-text block mt-2'> DIAS GOMES</span>
                    </h1>
                    <p className='pcScreen:px-64 sm:px-44 text-parag text-secondary text-center'>Je suis un apprenti développeur web full-stack de <span className='font-bold text-primary'>20 ans</span>, à la recherche d&apos;un <span className='font-bold text-primary'>contrat en alternance</span> pour préparer un <span className='font-bold text-primary'>Bac+3</span> à Metz Numeric School pour l&apos;année <span className='font-bold text-primary'>2024-2025</span>. Mon objectif est d&apos;acquérir des compétences dans le développement web et de contribuer de manière proactive à des projets passionnants au sein d&apos;une équipe dynamique.</p>
                </div>
                <div className='flex gap-7 text-primary'>
                    <a className='bg-primary text-black p-5 flex justify-center items-center font-bold' href="#">Prenez contact</a>
                    <a className='text-primary border-2 border-primary p-5 flex items-center justify-center hover:text-black hover:bg-primary duration-300 font-bold' href="#">Ouvrir mon CV</a>
                </div>
            </div>
        </div>
    )
}

export default Home;
