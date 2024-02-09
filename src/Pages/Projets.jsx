import { projetsConst } from "../Constants/index"
import ProjetComp from "../Components/Projets"

const Projets = () => {
    return (
        <div className='flex flex-col items-center justify-center gap-20 py-16'>
            <h2 className='text-5xl bg-gradient-to-r from-gradientPrimary to-gradientSecondary text-transparent bg-clip-text font-bold'>PROJETS</h2>

            <div className="flex flex-wrap justify-center gap-10 w-9/12">

                {projetsConst.map((e, index) => (
                    <ProjetComp key={index} img={e.img} titre={e.titre}/>
                ))}

            </div>

        </div>
    )
}

export default Projets;
