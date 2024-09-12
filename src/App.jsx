import { Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Home from './views/Home/Home'
import Footer from './components/Footer'
import BadRequest from './components/BadRequest'
import ReaRoutes from './routes/ReaRoutes'
import Contact from './components/Contact'
import MoviesCataloge from './views/MoviesGallery/MoviesCataloge'
import MovieLayout from './views/MoviesGallery/MovieLayout'
import Notification from './components/Notification'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getInitialMovies } from './redux/moviesReducer'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchInitialMovies = () => {
      dispatch(getInitialMovies())
    }

    fetchInitialMovies()
  }, [dispatch])

  return (
    <>
      <Header />
      <Notification />
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
