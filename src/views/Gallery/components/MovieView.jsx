import styles from '../Gallery.module.css'
import { Button } from 'antd'

const MovieView = ({ movie, handleView, style }) => {
  const handleClose = () => {
    handleView()
  }

  return (
    <div className={style}>
      <Button onClick={handleClose}> Cerrar</Button>
      <h3>{movie.title}</h3>
      <h4>{movie.director}</h4>
      <div>
        <img alt={`afiche ${movie.title}`} src="" />
      </div>
      <p>{movie.storyline}</p>
      <ul>
        <p>Ficha técnica:</p>
        <li>{movie.featureFilm}</li>
        <li>Año: {movie.year}</li>
        <li>Genero: {movie.genre}</li>
        <li>País: {movie.country}</li>
        <li>
          Subtítulos:
          {movie.subtitles === ''
            ? 'sin subtítulos'
            : movie.subtitles}
        </li>
        <li>Clasificación: {movie.target}</li>
      </ul>
    </div>
  )
}

export default MovieView
