import './App.css'
import Navbar from './Layout/Navbar'
import PagePrincipal from './Pages/PagePrincipal';
import Footer from './Layout/Footer'
import PixelArt from './Pages/Projets/PixelArt'
import Devinette from './Pages/Projets/Devinette';
import ToDoList from './Pages/Projets/ToDoList';
import { Routes, Route, useLocation } from 'react-router-dom';
import ScrollToTop from './components/Scripts/ScrollToTop';

function App() {

  const location = useLocation();

  const isPixelArtPage = location.pathname === '/pixelart';

  return (
    <div className="app flex flex-col gap-10">

      {!isPixelArtPage && (
        <div className="navbar">
          <Navbar />
        </div>
      )}

      <ScrollToTop />

      {/* PAGES */}
      <Routes>
        <Route path='/' element={<PagePrincipal />} />
        <Route path='/pixelart' element={<PixelArt />} />
        <Route path='/devinette' element={<Devinette />} />
        <Route path='/todolist' element={<ToDoList />} />
      </Routes>

      {/* FOOTER */}
      <div className="footer">
        <Footer />
      </div>

    </div>
  )
}

export default App;

