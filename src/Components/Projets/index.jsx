import { GoArrowUpRight } from 'react-icons/go'
import { Link } from 'react-router-dom'

const index = ({ img, titre, lien }) => {
  return (
    <Link
      to={lien}
      className="w-projetsImg rounded-xl group md:w-projetsImgMd sm:w-full"
    >
      <img className='rounded-t-md' src={img} alt="" />
      <div className="flex rounded-b-md justify-between items-center bg-interactiveColor duration-300 text-primary p-5 group-hover:bg-interactiveColorHover">
        <div className="flex flex-col">
          <span className="text-secondary">En savoir plus</span>
          <h5 className="text-2xl text-white sm:text-xl">{titre}</h5>
        </div>
        <GoArrowUpRight className="text-2xl text-white" />
      </div>
    </Link>
  )
}

export default index
