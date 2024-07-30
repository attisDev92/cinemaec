import { Routes, Route, HashRouter } from 'react-router-dom'
import DesignProvider from './styles/DesingProvider'

import Header from './components/Header'
import Home from './views/Home/Home'
import Gallery from './views/Gallery/Gallery'
import Register from './views/Register/Register'
import Footer from './components/Footer'
import BadRequest from './components/BadRequest'

function App() {
  return (
    <DesignProvider>
      <Header />
      <Routes>
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<BadRequest />} />
      </Routes>
      <Footer />
    </DesignProvider>
  )
}

export default App
