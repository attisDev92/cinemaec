import { Button } from '@mui/material'
import { useState } from 'react'
import styles from '../MoviesGallery.module.css'
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight'

const StillsGallery = ({ stills }) => {
  const [isStillVisible, setIsStillVisible] =
    useState(false)
  const [currentStill, setCurrentStill] = useState(null)

  const openSelectedStill = id => {
    const stillSelected = stills.find(
      still => still._id === id,
    )
    const indexStillSelected = stills.indexOf(stillSelected)
    setCurrentStill(indexStillSelected)
    setIsStillVisible(true)
  }

  const closeSelectedStill = () => {
    setCurrentStill(null)
    setIsStillVisible(false)
  }

  const nextStill = () => {
    if (currentStill === stills.length - 1) {
      return setCurrentStill(0)
    }
    setCurrentStill(currentStill + 1)
  }

  const prevStill = () => {
    if (currentStill === 0) {
      return setCurrentStill(stills.length - 1)
    }
    setCurrentStill(currentStill - 1)
  }

  return (
    <>
      {stills?.length > 0 && (
        <div className={styles.layout__stills}>
          {stills.map(still => (
            <div
              className={styles.still__container}
              onClick={() => {
                openSelectedStill(still._id)
              }}
            >
              <img src={still.url} alt="fotograma" />
            </div>
          ))}
        </div>
      )}
      {isStillVisible && (
        <div className={styles.still__viewer}>
          <img src={stills[currentStill].url} />
          {stills.length > 1 && (
            <div className={styles.button__container}>
              <Button variant="contained">
                <ArrowCircleLeftIcon onClick={nextStill} />
              </Button>
              <Button variant="contained">
                <ArrowCircleRightIcon onClick={prevStill} />
              </Button>
            </div>
          )}
          <div
            className={styles.background__still}
            onClick={closeSelectedStill}
          />
        </div>
      )}
    </>
  )
}

export default StillsGallery
