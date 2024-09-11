import styles from './MoviesGallery.module.css'

const movies = []

const MoviesGalleryRea = () => {
  return (
    <div className={styles.Gallery}>
      <h2>Banco de Contenidos</h2>
      <div className={styles.movies__container}>
        {movies.map(movie => (
          <></>
        ))}
      </div>
    </div>
  )
}

export default MoviesGalleryRea
