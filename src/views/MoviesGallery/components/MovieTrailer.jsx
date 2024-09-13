import styles from '../MoviesGallery.module.css'
import { useEffect, useState } from 'react'

const MovieTrailer = ({ trailerUrl }) => {
  const [videoUrl, setVideoUrl] = useState(null)

  useEffect(() => {
    const getUrlEmbed = () => {
      const regexYoutubeId =
        /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/

      const match = trailerUrl.match(regexYoutubeId)

      if (match) {
        setVideoUrl(match)
      }

      getUrlEmbed()
    }
  }, [trailerUrl])

  return (
    <div className={styles.layout__trailer}>
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${videoUrl}?si=JNFTyc4cv3EMNmjv`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  )
}

export default MovieTrailer
