import { GoArrowUpRight } from 'react-icons/go'
import { Link } from 'react-router-dom'

const index = ({ img, titre, lien }) => {
  return (
    <Link
      to={lien}
      className="w-projetsImg rounded-xl group md:w-projetsImgMd sm:w-full"
    >
      <img className='rounded-t-3xl' src={img} alt="" />
      <div className="flex rounded-b-3xl justify-between items-center bg-[#2A2A2A] duration-300 text-primary p-5 group-hover:bg-[#707070]">
        <div className="flex flex-col">
          <span className="text-secondary">En savoir plus</span>
          <h5 className="text-2xl sm:text-xl">{titre}</h5>
        </div>
        <GoArrowUpRight className="text-2xl" />
      </div>
    </Link>
  )
}

export default index
