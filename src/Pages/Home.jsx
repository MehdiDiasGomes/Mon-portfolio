import React from 'react'
import Mehdi from '../Assets/img/Mehdi.jpg'
import monCV from '../Assets/doc/CV_Mehdi_DIAS_GOMES.pdf'
import { LienConst } from '../Constants'
import SocialComp from '../Components/Social'
import Fade from 'react-reveal/Fade'

const Home = () => {
  return (
    <Fade>
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col gap-12 justify-center items-center">
          <div className="flex flex-col gap-12 items-center">
            <img
              src={Mehdi}
              alt="Logo du site"
              className="md:w-44 md:h-44 sm:w-32 sm:h-32 object-cover rounded-full"
            />
            <h1 className="md:text-5xl sm:text-3xl text-white font-bold text-center">
              Mehdi <br />
              <span className="text-PrimaryText bg-clip-text block mt-2">
                {' '}
                DIAS GOMES
              </span>
            </h1>
            <p className="md:text-xl sm:text-paragMobile text-parag text-secondary text-justify sm:hidden md:block">
              Je suis un apprenti développeur web full-stack de 20 ans,
              alternant chez <strong className="text-white">Flippad</strong> à
              Nancy et à{' '}
              <strong className="text-white">Metz Numeric School</strong> pour
              préparer un{' '}
              <strong className="text-white">
                Bachelor Développeur Full Stack
              </strong>{' '}
              (Bac+3) en 1 an. Mon objectif est d'acquérir des compétences dans
              le développement web et de contribuer de manière proactive à des
              projets passionnants au sein d'une équipe dynamique.
            </p>
          </div>
          <div className="flex gap-3 text-primary">
            <a
              className="bg-primary rounded-3xl md:text-[1rem] text-black p-5 flex justify-center items-center hover:bg-[#ffffffec] font-semibold sm:text-paragMobile"
              href="mailto:diasgomes.mehdicours@gmail.com">
              Prenez contact
            </a>
            <a
              className="text-primary rounded-3xl md:text-[1rem] border-2 border-primary p-5 flex items-center justify-center hover:text-black hover:bg-primary duration-300 font-semibold sm:text-paragMobile"
              href={monCV}
              target="blank">
              Ouvrir mon CV
            </a>
          </div>
          <div className="flex md:gap-3 sm:gap-4">
            {LienConst.map((e, index) => (
              <SocialComp key={index} lien={e.lien} icon={e.icon} />
            ))}
          </div>
        </div>
      </div>
    </Fade>
  )
}

export default Home
