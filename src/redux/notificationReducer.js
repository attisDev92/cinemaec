import { createSlice } from '@reduxjs/toolkit'

const notificationSlice = createSlice({
  name: 'notification',
  initialState: {
    active: false,
    message: '',
    style: '',
  },
  reducers: {
    activeNotification(state, action) {
      state.active = true
      state.message = action.payload.message
      state.style = action.payload.style
    },
    restarNotification(state) {
      state.active = false
      state.message = ''
      state.style = ''
    },
  },
})

export const { activeNotification, restarNotification } =
  notificationSlice.actions

export const setNotification = (message, style) => {
  return dispath => {
    dispath(setNotification(message, style))
    setTimeout(() => {
      dispath(restarNotification())
    }, 5000)
  }
}

export default notificationSlice.reducer
