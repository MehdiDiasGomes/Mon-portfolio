import React from 'react'

const index = ({img, titre, date, parag}) => {
    return (
        <div className='flex flex-col gap-5'>
            <div className='flex md:justify-between sm:items-center sm:flex-col sm:gap-4'>
                <div className='flex sm:items-center sm:justify-center gap-4 sm:flex-col'>
                    <img className='w-educImg' src={img} alt="" />
                    <h3 className='md:text-2xl sm:text-xl sm:text-center text-primary font-bold'>{titre}</h3>
                </div>
                <span className='text-secondary'>{date}</span>
            </div>
            <div>
                <p className='text-secondary text-center md:text-xl sm:text-paragMobile'>{parag}</p>
            </div>
        </div>
    )
}

export default index;