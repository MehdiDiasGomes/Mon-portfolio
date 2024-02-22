import Exp from '../Components/Exp';
import { xpConst } from '../Constants';
import Zoom from 'react-reveal/Zoom';

const Xp = () => {
    return (
        <Zoom>
            <div className='flex flex-col justify-center items-center gap-10' id='xp'>
                <h3 className='text-2xl text-secondary font-bold'>EXPÉRIENCE AVEC</h3>
                <div className="flex gap-20 sm:flex-wrap sm:justify-center sm:items-center">
                    {xpConst.map((e, index) => (
                        <Exp
                            key={index}
                            icon={e.icon} />
                    ))}
                </div>

            </div>
        </Zoom>

    )
}

export default Xp;
