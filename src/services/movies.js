import axios from 'axios'
const baseURL = import.meta.env.VITE_BACKEND_CINEMA_URI

export const getAllMovies = async () => {
  const res = await axios.get(`${baseURL}/movies`)
  return res.data
}

export const getMovie = async id => {
  const res = await axios.get(`${baseURL}/movies/${id}`)
  return res.data
}
