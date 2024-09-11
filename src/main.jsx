import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App.jsx'
import './main.css'
import StyleProvider from './styles/StylesProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <StyleProvider>
      <App />
    </StyleProvider>
  </Router>,
)
