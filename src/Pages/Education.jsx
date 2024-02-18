import React from 'react'
import { EducationConst } from "../Constants"
import EducComp from "../Components/Educ"
import Fade from 'react-reveal/Fade';

const Experiences = () => {
    return (

        <Fade left>
            <div className='flex flex-col gap-20' id='educ'>
                <div className='flex justify-center'>
                    <h2 className='md:text-5xl sm:text-3xl bg-gradient-to-r from-gradientPrimary to-gradientSecondary text-transparent bg-clip-text font-bold'>ÉDUCATION</h2>
                </div>

                <div className="flex flex-col gap-20 pcScreen:px-64 sm:px-10 md:px-14 lg:px-0">
                    {EducationConst.map((e, index) => (
                        <EducComp key={index} img={e.img} titre={e.titre} date={e.date} parag={e.parag} />
                    ))}
                </div>
            </div>
        </Fade>

    )
}

export default Experiences;
