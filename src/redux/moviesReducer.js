import { createSlice } from '@reduxjs/toolkit'
import { getAllMovies } from '../services/movies'

const movieSlice = createSlice({
  name: 'movies',
  initialState: [],
  reducers: {
    initMovies(_state, action) {
      return action.payload
    },
  },
})

const { initMovies } = movieSlice.actions

export const getInitialMovies = () => {
  return async dispatch => {
    try {
      const response = await getAllMovies()
      dispatch(initMovies(response))
    } catch (error) {
      console.log(error)
    }
  }
}

export default movieSlice.reducer
