import Exp from '../Components/Exp'
import { xpConst } from '../Constants'
import Fade from 'react-reveal/Fade'

const Xp = () => {
  return (
    <Fade>
      <div className="flex flex-col items-center gap-10" id="xp">
        <h3 className="text-2xl text-secondary font-bold">EXPÉRIENCE AVEC</h3>
        <div className="flex md:gap-20 sm:gap-14 sm:flex-wrap sm:justify-center sm:items-center">
          {xpConst.map((e, index) => (
            <Exp key={index} icon={e.icon} />
          ))}
        </div>
      </div>
    </Fade>
  )
}

export default Xp
