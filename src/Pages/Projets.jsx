import { ProjetCarte } from '../Constants/index'
import ProjetComp from '../Components/Projets'
import Fade from 'react-reveal/Fade'

const Projets = () => {
  return (
    <Fade>
      <div
        className="flex flex-col items-center justify-center gap-20"
        id="projets">

        <div className='flex flex-col gap-5 items-center'>
          <h2 className="md:text-5xl sm:text-3xl text-PrimaryText bg-clip-text font-bold">
            PROJETS🛠️
          </h2>
          <div className='w-16 h-1 bg-primary'></div>
        </div>

        <div className="flex flex-wrap justify-center gap-10 w-9/12 md:w-full">
          {ProjetCarte.map((e, index) => (
            <ProjetComp key={index} img={e.img} titre={e.titre} lien={e.lien} />
          ))}
        </div>
      </div>
    </Fade>
  )
}

export default Projets
