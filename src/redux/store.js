import { configureStore } from '@reduxjs/toolkit'
import notification from './notificationReducer'
import movies from './moviesReducer'

const store = configureStore({
  reducer: {
    notification,
    movies,
  },
})

export default store
