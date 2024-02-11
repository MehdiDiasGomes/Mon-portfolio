import './App.css'
import Navbar from './Layout/Navbar'
import PagePrincipal from './Pages/PagePrincipal';
import Footer from './Layout/Footer'
import { Routes, Route } from 'react-router-dom';
import PixelArt from './Pages/Projets/PixelArt'

function App() {

  return (
    <div className="app flex flex-col gap-10">

      {/* NAVBAR */}
      <div className="navbar">
        <Navbar />
      </div>

      {/* PAGES */}
      <Routes>
        <Route path='/' element={<PagePrincipal />} />
        <Route path='/pixelart' element={<PixelArt />} />
      </Routes>

      {/* FOOTER */}
      <div className="footer">
        <Footer />
      </div>

    </div>
  )
}

export default App
