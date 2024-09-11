import { Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Home from './views/Home/Index'
import Footer from './components/Footer'
import BadRequest from './components/BadRequest'
import ReaRoutes from './routes/ReaRoutes'
import Contact from './components/Contact'
import MoviesCataloge from './views/MoviesGallery/MoviesCataloge'
import MovieLayout from './views/MoviesGallery/MovieLayout'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/rea/*" element={<ReaRoutes />} />
        <Route
          path="/cataloge"
          element={<MoviesCataloge />}
        />
        <Route
          path="/cataloge/:id"
          element={<MovieLayout />}
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<BadRequest />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
