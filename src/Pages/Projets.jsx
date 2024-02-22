import { projetsConst } from "../Constants/index"
import ProjetComp from "../Components/Projets"
import Zoom from 'react-reveal/Zoom';

const Projets = () => {
    return (
        <Zoom>
            <div className='flex flex-col items-center justify-center gap-20' id="projets">
                <h2 className='md:text-5xl sm:text-3xl bg-gradient-to-r from-gradientPrimary to-gradientSecondary text-transparent bg-clip-text font-bold'>PROJETS</h2>

                <div className="flex flex-wrap justify-center gap-10 w-9/12 md:w-full">

                    {projetsConst.map((e, index) => (
                        <ProjetComp
                            key={index}
                            img={e.img}
                            titre={e.titre}
                            lien={e.lien} />
                    ))}

                </div>
            </div>
        </Zoom>
    )
}

export default Projets;
