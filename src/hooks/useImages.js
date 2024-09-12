import { useState, useEffect } from 'react'
import imageDefault from '../assets/img/no_image.jpg'

export const useImageContent = url => {
  const [imageUrl, setImageUrl] = useState(imageDefault)
  console.log(url)

  useEffect(() => {
    if (url && url.length > 3) {
      setImageUrl(url)
    } else {
      setImageUrl(imageDefault)
    }
  }, [url])

  return imageUrl
}
