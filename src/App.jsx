import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import ScrollToTop from './Components/ScrollToTop'
import PagePrincipal from './Pages/PagePrincipal'
import ScrollToTopButton from './Components/ScrollToTopButton'

import { routes } from './Constants'

function App() {
  return (
    <>
      <div className="app flex flex-col gap-10">
        <ScrollToTop />

        {/* PAGES */}
        <Routes>
          <Route path="/" element={<PagePrincipal />} />

          {routes.map((route, index) => (
            <Route key={index} path={route.slug} element={route.page} />
          ))}
        </Routes>
      </div>

      <div>
        <ScrollToTopButton />
      </div>
    </>
  )
}

export default App
