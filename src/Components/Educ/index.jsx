import React from 'react'

const index = ({img, titre, date, parag}) => {
    return (
        <div className='flex flex-col gap-5'>
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-4'>
                    <img className='w-educImg' src={img} alt="" />
                    <h3 className='text-2xl text-primary font-bold'>{titre}</h3>
                </div>
                <span className='text-secondary'>{date}</span>
            </div>
            <div>
                <p className='text-secondary'>{parag}</p>
            </div>
        </div>
    )
}

export default index;