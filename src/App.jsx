import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import ScrollToTop from './Components/ScrollToTop'
import Footer from './Layout/Footer'
import Navbar from './Layout/Navbar'
import PagePrincipal from './Pages/PagePrincipal'
import ScrollToTopButton from './Components/ScrollToTopButton'

import { routes } from './Constants'

function App() {
  const location = useLocation()

  return (
    <>
      <div className="app flex flex-col gap-10">
        <ScrollToTop />

        <div className="navbar">
          <Navbar />
        </div>

        {/* PAGES */}
        <Routes>
          <Route path="/" element={<PagePrincipal />} />

          {routes.map((route, index) => (
            <Route key={index} path={route.slug} element={route.page} />
          ))}
        </Routes>

        {/* FOOTER */}
        <div className="footer">
          <Footer />
        </div>
      </div>

      <div>
        <ScrollToTopButton />
      </div>
    </>
  )
}

export default App
