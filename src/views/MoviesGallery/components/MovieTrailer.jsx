import styles from '../MoviesGallery.module.css'
import { useEffect, useState } from 'react'

const MovieTrailer = ({ trailerUrl }) => {
  const [videoId, setVideoId] = useState(null)

  useEffect(() => {
    const getUrlEmbed = () => {
      const regexYoutubeId =
        /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/

      const match = trailerUrl.match(regexYoutubeId)

      if (match && match[1]) {
        setVideoId(match[1])
      }
    }

    getUrlEmbed()
  }, [trailerUrl])

  if (!videoId) return <p>Loading trailer...</p>

  return (
    <div className={styles.layout__trailer}>
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  )
}

export default MovieTrailer
