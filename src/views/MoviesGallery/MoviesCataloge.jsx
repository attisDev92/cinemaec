import { useSelector } from 'react-redux'
import styles from './MoviesGallery.module.css'
import MovieCard from './components/MovieCard'
import Loader from '../../components/Loader'

const MoviesCataloge = () => {
  const movies = useSelector(state => state.movies)

  if (!movies) {
    return <Loader isActive={true} />
  }

  return (
    <div className={styles.gallery}>
      <h2>Banco de Contenidos</h2>
      <div className={styles.movies__container}>
        {movies.map((movie, i) => (
          <MovieCard key={i} movie={movie} />
        ))}
      </div>
    </div>
  )
}

export default MoviesCataloge
