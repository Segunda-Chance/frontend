import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Contato from './pages/contato/Contato'
import Home from './pages/home/Home'
import Footer from './components/footer/Footer'
import Sobre from './pages/sobre/Sobre'

function App() {
  return (
    <>
      <BrowserRouter>
          <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/contato" element={<Contato />} />
              <Route path="/sobre" element={<Sobre />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
    </>
  )
}

export default App

