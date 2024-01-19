import { BrowserRouter, Routes } from 'react-router-dom';
import './App.css';

import Navbar from './components/navbar/NavBar';

function App() {
  return (
    <>

      <BrowserRouter>
        <Navbar />
        <div className="min-h-[80vh]">
          <Routes>

          </Routes>
        </div>

      </BrowserRouter>

    </>
  );
}

export default App
