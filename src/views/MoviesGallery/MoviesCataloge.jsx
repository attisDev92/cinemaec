import { useSelector } from 'react-redux'
import styles from './MoviesGallery.module.css'
import MovieCard from './components/MovieCard'
import Loader from '../../components/Loader'

const MoviesCataloge = () => {
  const allMovies = useSelector(state => state.movies)

  if (!allMovies) {
    return <Loader isActive={true} />
  }

  const movies = allMovies.filter(
    movie => movie.country === 'Ecuador',
  )

  if (movies.length === 0) {
    return (
      <p>No hay películas disponibles en este momento.</p>
    )
  }

  return (
    <div className={styles.gallery}>
      <h2>Catálogo de Películas</h2>
      <div className={styles.movies__container}>
        {movies.map((movie, i) => (
          <MovieCard key={i} movie={movie} />
        ))}
      </div>
    </div>
  )
}

export default MoviesCataloge
