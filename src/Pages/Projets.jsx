import { projetsConst } from "../Constants/index"
import ProjetComp from "../Components/Projets"
import Fade from 'react-reveal/Fade';

const Projets = () => {
    return (
        <Fade left>
            <div className='flex flex-col items-center justify-center gap-20' id="projets">
                <h2 className='md:text-5xl sm:text-3xl bg-gradient-to-r from-gradientPrimary to-gradientSecondary text-transparent bg-clip-text font-bold'>PROJETS</h2>

                <div className="flex flex-wrap justify-center gap-10 w-9/12 md:w-full">

                    {projetsConst.map((e, index) => (
                        <ProjetComp key={index} img={e.img} titre={e.titre} lien={e.lien} />
                    ))}

                </div>
            </div>
        </Fade>
    )
}

export default Projets;
