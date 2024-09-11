import { Route, Routes } from 'react-router-dom'
import Rea from '../views/Rea/Rea'
import Register from '../views/Register/Register'
import MoviesGalleryRea from '../views/MoviesGallery/MoviesGalleryRea'
import BadRequest from '../components/BadRequest'
import MovieLayout from '../views/MoviesGallery/MovieLayout'

const ReaRoutes = () => {
  return (
    <Routes>
      <Route path="/movies/:id" element={<MovieLayout />} />
      <Route
        path="/movies"
        element={<MoviesGalleryRea />}
      />
      <Route path="register" element={<Register />} />
      <Route path="" element={<Rea />} />
      <Route path="*" element={<BadRequest />} />
    </Routes>
  )
}

export default ReaRoutes
