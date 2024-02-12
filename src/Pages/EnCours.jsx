import React from 'react'
import { Link } from 'react-router-dom';

const EnCours = () => {
    return (
        <div className='w-full h-[100vh] flex justify-center items-center'>
            <div className='flex flex-col gap-3 items-center justify-center'>
                <h2 className='text-primary text-4xl'>Page en cours de développement 🕤</h2>
                <Link to="/" className='text-secondary hover:text-primary hover:scale-125	 duration-300 text-2xl'><i className="ri-arrow-left-line"></i>Retour en arrière</Link>
            </div>
        </div>
    )
}

export default EnCours;
