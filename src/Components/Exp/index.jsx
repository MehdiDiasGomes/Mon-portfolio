import React from 'react'

const Exp = ({ icon }) => {
    return (
        <div className='flex gap-5 justify-center items-center text-5xl'>
            <i className={`flex gap-5 justify-center items-center text-6xl bg-gradient-to-b from-primary to-[rgb(17,17,17)] text-transparent bg-clip-text ${icon}`}></i>
        </div>
    )
}

export default Exp;