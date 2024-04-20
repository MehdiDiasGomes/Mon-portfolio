import Home from './Home'
import Xp from './Xp'
import Projets from './Projets'
import Education from './Education'

const PagePrincipal = () => {
  return (
    <div>
      {/* PAGES */}
      <div className="flex justify-center items-center">
        <div className="py-6 flex flex-col gap-28 pcScreen:w-9/12 md:w-full sm:w-full xl:w-[70%] lg:w-9/12">
          <Home />
          <Xp />
          <Projets />
          <Education />
        </div>
      </div>
    </div>
  )
}

export default PagePrincipal
