import styles from './Gallery.module.css'
import MovieCard from './components/MovieCard'
import { movies } from '../../db/DBPeliculas.json'

const Gallery = () => {
  return (
    <div className={styles.Gallery}>
      <h2>Banco de Contenidos</h2>
      <div className={styles.movies__container}>
        {movies.map(movie => (
          <MovieCard key={movie.title} movie={movie} />
        ))}
      </div>
    </div>
  )
}

export default Gallery
