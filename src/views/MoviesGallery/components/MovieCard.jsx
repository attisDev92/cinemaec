import { useNavigate } from 'react-router-dom'
import { useImageContent } from '../../../hooks/useImages'
import styles from '../MoviesGallery.module.css'

const MovieCard = ({ movie }) => {
  const navigate = useNavigate()
  console.log(movie)
  const poster = useImageContent(movie.poster.url)
  console.log(poster)
  const handleClickMovie = () => {
    navigate(`/cataloge/movie/${movie.id}`)
  }

  return (
    <div
      className={styles.movie__card}
      onClick={handleClickMovie}
    >
      <div className={styles.movie__poster}>
        <img src={poster} alt={`${movie.title}_poster`} />
      </div>
      <div className={styles.movie__details}>
        <div>
          <h3>{movie.title.toUpperCase()}</h3>
          <h5>{movie.director}</h5>
        </div>
        <div className={styles.movie__data}>
          <p>{movie.realeseYear}</p>
          {'|'}
          <p>{movie.genre}</p>
          {'|'}
          <p>{movie.runTime}</p>
        </div>
        <p>{movie.storyLine}</p>
      </div>
    </div>
  )
}

export default MovieCard
