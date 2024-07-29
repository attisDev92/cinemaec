import { useState } from 'react'
import styles from '../Gallery.module.css'
import MovieView from './MovieView'
import { Card } from 'antd'
import {
  EyeOutlined,
  SendOutlined,
} from '@ant-design/icons'
const { Meta } = Card

const MovieCard = ({ movie }) => {
  const [activeView, setActiveView] = useState(false)

  const handleView = () => {
    setActiveView(!activeView)
  }

  const movieViewStyle = activeView
    ? styles.MovieView
    : styles.MovieView__desable

  return (
    <>
      <Card
        className={styles.MovieCard}
        cover={
          <img
            alt={`poster película ${movie.title}`}
            src={movie.poster}
          />
        }
        actions={[
          <EyeOutlined onClick={handleView} />,
          <SendOutlined />,
        ]}
      >
        <Meta
          className={styles.card__info}
          title={movie.title}
          description={movie.storyline}
        />
      </Card>
      <MovieView
        movie={movie}
        handleView={handleView}
        style={movieViewStyle}
      />
    </>
  )
}

export default MovieCard
