import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
import Footer from '../../Layout/Footer'

const index = ({
  titre,
  img,
  desc,
  logoMaq,
  logoDev,
  logoHeb,
  maquettingTitre,
  devTitre,
  hebergementTitre,
  lienOuvrir,
  lienCode,
}) => {
  return (
    <>
      <div className="flex justify-center">
        <div className="flex items-center duration-300 hover:scale-110 gap-2 absolute top-32 md:top-28 left-72 md:left-32 md:text-3xl md:block sm:hidden text-secondary hover:text-primary">
          <Link className="flex gap-2" to="/">
            <FaArrowLeft />
            <span className="md:hidden">Revenir en arrière</span>
          </Link>
        </div>

        <div className="py-16 flex flex-col gap-20 pcScreen:w-[60%] md:w-9/12 sm:w-full xl:w-[70%]">
          <div className="flex justify-center ">
            <h2 className="text-5xl text-primary font-bold">{titre}</h2>
          </div>

          <div className="flex gap-10 justify-center items-center">
            <img
              className="w-[50rem] md:w-[90%] sm:w-[90%] rounded-3xl border-2 border-TextSecondary"
              src={img}
              alt={titre}
            />
          </div>

          <div className="flex flex-col gap-16 justify-center items-start px-16">
            <div className="flex gap-7 sm:gap-3 text-primary sm:text-center">
              <a
                href={lienOuvrir}
                target="_blank"
                className="bg-primary rounded-3xl md:text-xl text-black p-5 flex justify-center items-center hover:bg-[#ffffffec] font-bold sm:text-paragMobile">
                Ouvrir
              </a>
              <a
                href={lienCode}
                target="_blank"
                className="text-primary rounded-3xl md:text-xl border-2 border-primary p-5 flex items-center justify-center hover:text-black hover:bg-primary duration-300 font-bold sm:text-paragMobile">
                Code source
              </a>
            </div>

            <div className="flex flex-col gap-7">
              <h3 className="md:text-3xl sm:text-[1rem] text-primary font-bold">
                Description du projet
              </h3>
              <p className="text-secondary md:text-xl sm:text-paragMobile sm:text-start text-justify">
                {desc}
              </p>
            </div>

            <div className="flex flex-col gap-7">
              <h3 className="md:text-3xl sm:text-[1rem] text-primary font-bold">
                Outils utilisés
              </h3>
              <div className="flex md:gap-20 sm:gap-16 xl:gap-32 items-start flex-wrap">
                <div className="flex flex-col gap-10 justify-center items-start">
                  <h4 className="md:text-2xl sm:text-[1rem] font-bold text-PrimaryText">
                    Maquetting
                  </h4>
                  <div className="flex flex-col text-4xl gap-1">
                    <div className="md:text-xl sm:text-[1rem] flex gap-5 items-center text-primary">
                      <span className="md:text-4xl sm:text-2xl">{logoMaq}</span>
                      <span>{maquettingTitre}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-10 justify-center items-start">
                  <h4 className="md:text-2xl sm:text-[1rem] font-bold text-PrimaryText">
                    Développement
                  </h4>
                  <div className="flex flex-col text-4xl text-primary">
                    <div className="flex flex-col gap-10">
                      <div className="md:text-xl sm:text-[1rem] flex gap-5 items-center text-primary">
                        <span className="md:text-4xl sm:text-2xl">
                          {logoDev}
                        </span>
                        <span>{devTitre}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-10 justify-center items-start">
                  <h4 className="md:text-2xl sm:text-[1rem] font-bold text-PrimaryText">
                    Hébergement
                  </h4>
                  <div className="flex flex-col text-4xl gap-10 text-primary">
                    <div className="md:text-xl sm:text-[1rem] flex gap-5 items-center">
                      <span className="md:text-4xl sm:text-2xl">{logoHeb}</span>
                      <span>{hebergementTitre}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default index
