import { useParams } from 'react-router-dom'
import Loader from '../../components/Loader'
import { useEffect, useState } from 'react'
import { getMovie } from '../../services/movies'
import { useImageContent } from '../../hooks/useImages'
import TechnicalSheet from './components/TechnicalSheet'
import TechnicalTeam from './components/TechnicalTeam'
import styles from './MoviesGallery.module.css'
import MovieTrailer from './components/MovieTrailer'
import StillsGallery from './components/StillsGallery'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Divider,
  Stack,
  Typography,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import TheatersIcon from '@mui/icons-material/Theaters'
import dayjs from 'dayjs'

const MovieLayout = () => {
  const { id } = useParams()
  const [movie, setMovie] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const poster = useImageContent(movie?.poster.url)
  const banner = useImageContent(movie?.stills[0]?.url)

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
      <StillsGallery stills={movie.stills} />
      <div className={styles.recognitions}>
        {movie.festivals?.length > 0 && (
          <>
            <h5>Festivales</h5>
            <ul>
              {movie.festivals.map((festival, i) => (
                <li key={i}>{festival}</li>
              ))}
            </ul>
          </>
        )}
        <Divider />
        {movie.awards?.length > 0 && (
          <>
            <h5>Premios y reconocimientos</h5>
            <ul>
              {movie.awards.map((award, i) => (
                <li key={i}>{award}</li>
              ))}
            </ul>
          </>
        )}
        <Divider />
        {movie.funding?.length > 0 && (
          <>
            <h5>Financiamiento y fondos recibidos</h5>
            <ul>
              {movie.funding.map((award, i) => (
                <li key={i}>{award}</li>
              ))}
            </ul>
          </>
        )}
      </div>
      {movie.channels && (
        <div className={styles.channels}>
          <p>Esta película esta disponible en:</p>
          {movie.channels.map((channel, i) => (
            <Button
              key={i}
              variant="contained"
              href={channel.url}
              target="_blank"
              startIcon={<TheatersIcon />}
            >
              {channel.plataform}
            </Button>
          ))}
        </div>
      )}
      {movie.reaInformation?.available && (
        <div className={styles.rea__information}>
          <Accordion>
            <AccordionSummary
              id="panel-rea"
              expandIcon={<ExpandMoreIcon />}
            >
              <h5>
                DISPONIBLE PARA LA RED DE ESPACIOS
                AUDIOVISUALES
              </h5>
            </AccordionSummary>
            <AccordionDetails>
              <Stack
                direction="row"
                spacing={4}
                divider={
                  <Divider
                    orientation="vertical"
                    flexItem
                  />
                }
              >
                <Typography>
                  Disponible para territorio:
                </Typography>
                <Typography>
                  {
                    <ul>
                      {movie.reaInformation.territoryLicense.map(
                        (territory, i) => (
                          <li key={i}>{territory}</li>
                        ),
                      )}
                    </ul>
                  }
                </Typography>
                <Typography>Fecha de caducidad:</Typography>
                <Typography>
                  {dayjs(
                    movie.reaInformation.expiration,
                  ).format('DD-MM-YY')}
                </Typography>
              </Stack>
            </AccordionDetails>
          </Accordion>
          <p className={styles.rea__info}>
            Si eres parte de la Red de Espacios
            Audiovisuales o usuario del Banco de Contenidos
            puedes programar esta obra.
          </p>
        </div>
      )}
      <div className={styles.layout__technical}>
        <TechnicalTeam team={movie.technicalTeam} />
      </div>
    </div>
  )
}

export default MovieLayout
