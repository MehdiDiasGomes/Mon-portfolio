import React from 'react'
import Exp from '../Components/Exp';
import { xpConst } from '../Constants';

const Xp = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-10'>
            <h2 className='text-2xl bg-gradient-to-b from-primary to-black text-transparent bg-clip-text'>EXPERIENCE AVEC</h2>
            <div className="flex gap-20">
                {xpConst.map((e, index) => (
                    <Exp key={index} icon={e.icon} />
                ))}
            </div>

        </div>
    )
}

export default Xp;
