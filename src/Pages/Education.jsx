import React from 'react'
import Fade from 'react-reveal/Fade'
import EducComp from '../Components/Educ'
import { EducationConst } from '../Constants'

const Experiences = () => {
  return (
    <div className="flex flex-col gap-20" id="educ">
      <div className="flex justify-center">
        
        <div className="flex flex-col gap-5 items-center">
          <h2 className="md:text-5xl sm:text-3xl bg-gradient-to-r from-gradientPrimary to-gradientSecondary text-transparent bg-clip-text font-bold">
            EDUCATION
          </h2>
          <div className="w-16 h-1 bg-primary"></div>
        </div>
      </div>

      <div className="flex flex-col gap-20 sm:px-10 md:px-16 lg:px-44">
        <Fade left>
          {EducationConst.map((e, index) => (
            <EducComp
              key={index}
              img={e.img}
              titre={e.titre}
              date={e.date}
              parag={e.parag}
            />
          ))}
        </Fade>
      </div>
    </div>
  )
}

export default Experiences
