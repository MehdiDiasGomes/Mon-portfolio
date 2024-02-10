import './App.css'
import Home from './Pages/Home'
import Navbar from './Layout/Navbar'
import Xp from './Pages/Xp'
import Footer from './Layout/Footer'
import Projets from './Pages/Projets'
import Education from './Pages/Education'

function App() {

  return (
    <div className="app flex flex-col gap-10">

      <div className="navbar">
        <Navbar />
      </div>

      <div className="flex justify-center items-center">
        <div className="py-32 flex flex-col gap-28 pcScreen:w-9/12 sm:w-full">
          <Home />
          <Xp />
          <Projets />
          <Education />
        </div>
      </div>

      <div className="footer">
        <Footer />
      </div>

    </div>
  )
}

export default App
