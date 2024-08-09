import Home from './Home'
import Xp from './Xp'
import Projets from './Projets'
import Education from './Education'
import Contact from '../Components/Contact'
import Navbar from '../Layout/Navbar'
import Footer from '../Layout/Footer'

const PagePrincipal = () => {
  return (
    <div>
      {/* PAGES */}
      <div className="flex justify-center items-center">
        <div className="py-6 flex flex-col gap-24 pcScreen:w-[60%] md:w-9/12 sm:w-full xl:w-[70%]">
          <Navbar />
          <Home />
          <Xp />
          <Projets />
          <Education />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default PagePrincipal
