import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { MdOutlineMailOutline } from 'react-icons/md'

const Footer = () => {
  return (
    <div
      className="flex justify-center items-center py-20 border-t border-dashed"
    >
      <div className="flex flex-col sm:px-10 md:px-14 pcScreen:w-9/12 pcScreen:px-44 md:w-full sm:w-full xl:w-[70%] lg:w-9/12 gap-10">
        <div>
          <h3 className="text-primary text-4xl font-bold">Contact</h3>
        </div>
        <div>
          <p className="text-secondary md:text-parag sm:text-paragMobile">
            Je suis un jeune développeur web full-stack âgé de 20 ans, à la
            recherche d&apos;une opportunité de contrat en apprentissage afin de
            préparer un Bac+3 à Metz Numeric School pour l&apos;année académique
            2024-2025.
          </p>
        </div>
        <div>
          <a
            className="text-primary md:text-parag sm:text-paragMobile flex items-center gap-1"
            href="mailto:diasgomes.mehdicours@gmail.com"
          >
            <MdOutlineMailOutline />
            diasgomes.mehdicours@gmail.com
          </a>
        </div>
        <div className="flex gap-7">
          <a
            className="text-primary text-3xl"
            href="https://github.com/MehdiDiasGomes"
            target="blank"
          >
            <FaGithub />
          </a>
          <a
            className="text-primary text-3xl"
            href="https://www.linkedin.com/in/mehdi-dias-gomes-056654239"
            target="blank"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
