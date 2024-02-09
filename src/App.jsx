import './App.css'
import Home from './Pages/Home'
import Navbar from './Layout/Navbar'
import Xp from './Pages/Xp'
import Footer from './Layout/Footer'

function App() {

  return (
    <div className="app flex flex-col gap-10">

      <div className="navbar">
        <Navbar />
      </div>

      <div className="py-32 flex flex-col gap-20">
        <Home />
        <Xp />
      </div>

      <div className="footer">
        <Footer />
      </div>

    </div>
  )
}

export default App
