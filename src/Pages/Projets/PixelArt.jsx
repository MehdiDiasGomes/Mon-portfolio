import React from 'react'
import PixelArtPic from '../../Assets/img/Projets/pixelArt.png'

const PixelArt = () => {
    return (
        <div className="flex justify-center">
            <div className="py-16 flex flex-col gap-20 pcScreen:w-9/12 md:w-full sm:w-full xl:w-[70%] lg:w-9/12">

                <div className='flex justify-center'>
                    <h2 className='text-5xl text-primary font-bold'>Pixel Art</h2>
                </div>

                <div className='flex gap-10 justify-center items-center'>
                    <img className='w-[30rem]' src={PixelArtPic} alt="Pixel art pic" />
                </div>

                <div className='flex flex-col gap-16 justify-center items-center'>

                    <div className='flex flex-col gap-5 px-28'>
                        <h3 className='text-3xl bg-gradient-to-r from-gradientPrimary to-gradientSecondary text-transparent bg-clip-text font-bold'>Description du projet</h3>
                        <p className='text-primary text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, aspernatur autem ratione vero inventore est!</p>
                    </div>

                    <div className='flex flex-col gap-5 px-28'>
                        <h3 className='text-3xl bg-gradient-to-r from-gradientPrimary to-gradientSecondary text-transparent bg-clip-text font-bold'>Outils utilisés</h3>
                        <p className='text-primary text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, aspernatur autem ratione vero inventore est!</p>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default PixelArt;
