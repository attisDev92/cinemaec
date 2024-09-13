import { useParams } from 'react-router-dom'
import Loader from '../../components/Loader'
import { useEffect, useState } from 'react'
import { getMovie } from '../../services/movies'
import { useImageContent } from '../../hooks/useImages'
import TechnicalSheet from './components/TechnicalSheet'
import TechnicalTeam from './components/TechnicalTeam'
import styles from './MoviesGallery.module.css'
import MovieTrailer from './components/MovieTrailer'

const MovieLayout = () => {
  const { id } = useParams()
  const [movie, setMovie] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const poster = useImageContent(movie?.poster.url)
  const banner = useImageContent(movie?.stills[0]?.url)
  const [stillIsVisible, setStillStillVisible] =
    useState(false)
  const [still, setStill] = useState(null)

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await getMovie(id)
        setMovie(response)
      } catch (err) {
        setError('Error al cargar la película')
      } finally {
        setLoading(false)
      }
    }

    fetchMovie()
  }, [id])

  if (loading) return <Loader isActive={true} />
  if (error) return <p>{error}</p>

  const renderStill = id => {
    const stillSelected = movie.stills.find(
      still => still.id === id,
    )
    setStillStillVisible(!stillIsVisible)
    setStill(stillSelected)
  }

  console.log(movie)

  return (
    <div className={styles.movie__layout}>
      <div className={styles.layout__header}>
        <div className={styles.layout__banner}>
          <img src={banner} alt={`${movie.title}_banner`} />
        </div>
        <h1>{movie.title}</h1>
        <div className={styles.layout__poster}>
          <img src={poster} alt={`${movie.title}_poster`} />
        </div>
        <div className={styles.layout__plot}>
          <p>
            Director/a: <strong>{movie.director}</strong>
          </p>
          {movie.productionCompany ? (
            <p>
              Casa productora: {movie.productionCompany}
            </p>
          ) : null}
          <p>{movie.plot}</p>
        </div>
      </div>
      <div className={styles.layout__technical}>
        <TechnicalSheet movie={movie} />
      </div>
      <div className={styles.container__trailer__cast}>
        {movie.trailer && (
          <MovieTrailer trailerUrl={movie.trailer} />
        )}

        <div className={styles.layout__cast}>
          {movie?.cast && movie.cast.length > 0 ? (
            <>
              <h5>Casting</h5>
              <ul>
                {movie.cast.map((cast, i) => (
                  <li key={i}>{cast}</li>
                ))}
              </ul>
            </>
          ) : (
            <p>No se registra casting </p>
          )}
        </div>
      </div>
      {movie.stills?.length > 0 && (
        <div className={styles.layout__stills}>
          {movie.stills.map(still => (
            <div className={styles.still__container}>
              <img src={still.url} alt={movie.title} />
            </div>
          ))}
        </div>
      )}

      <div className={styles.layout__technical}>
        <TechnicalTeam team={movie.technicalTeam} />
      </div>

      {stillIsVisible && (
        <div
          className={styles.stillViewer}
          onClick={() => renderStill()}
        >
          <img src={still} />
        </div>
      )}
    </div>
  )
}

export default MovieLayout
