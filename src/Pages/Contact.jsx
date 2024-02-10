import React from 'react'

const Contact = () => {
    return (
        <div className='flex justify-center'>
            <div className="flex flex-col items-center justify-center gap-10 text-primary w-1/2 text-contactSize">

                <div className='w-full'>
                    <div className="flex items-center gap-5">
                        <div className="flex flex-col gap-1 w-full">
                            <label className='text-secondary text-xl'>Prénom</label>
                            <input type="text" className='bg-transparent text-primary border-primary border-2  h-10' />
                        </div>
                        <div className="flex flex-col gap-1 w-full">
                            <label className='text-secondary text-xl'>Nom de famille</label>
                            <input type="text" className='bg-transparent text-primary border-primary border-2  h-10' />
                        </div>
                    </div>
                </div>

                <div className="w-full">
                    <div className="flex flex-col gap-1">
                        <label className='text-secondary text-xl'>E-mail <span>{`(obligatoire)`}</span> </label>
                        <input type="text" id="mail" className='bg-transparent text-primary border-primary border-2  h-10' />
                    </div>
                </div>

                <div className="w-full">
                    <div className="flex flex-col gap-1">
                        <label className='text-secondary text-xl'>Message <span>{`(obligatoire)`}</span> </label>
                        <textarea id="textArea" className='bg-transparent text-primary border-primary border-2 h-52 resize-y' ></textarea>
                    </div>
                </div>

                <div className="ligne l4">
                    <button className='text-primary md:text-xl border-2 border-primary p-5 flex items-center justify-center hover:text-black hover:bg-primary duration-300 font-bold sm:text-paragMobile'>Envoyer</button>
                </div>

            </div>
        </div>
    )
}

export default Contact;
