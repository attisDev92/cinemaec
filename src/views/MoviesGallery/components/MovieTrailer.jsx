import styles from '../MoviesGallery.module.css'
import { useEffect, useState } from 'react'

const MovieTrailer = ({ trailerUrl }) => {
  const [videoId, setVideoId] = useState(null)

  useEffect(() => {
    const extractVideoId = url => {
      const regexYoutubeId =
        /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/

      const match = url.match(regexYoutubeId)
      return match ? match[1] : null
    }

    const id = extractVideoId(trailerUrl)
    setVideoId(id)
  }, [trailerUrl])

  if (!videoId) return <p>Loading trailer...</p>

  return (
    <div className={styles.layout__trailer}>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="YouTube Video Player"
      ></iframe>
    </div>
  )
}

export default MovieTrailer
