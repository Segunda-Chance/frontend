import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Contato from './pages/contato/Contato'
import Home from './pages/home/Home'
import Footer from './components/footer/Footer'
import Sobre from './pages/sobre/Sobre'
import { AuthProvider } from './contexts/AuthContext'
import Cadastro from './pages/cadastro/Cadastro'
import Login from './pages/login/Login'
import FormCategoria from './components/categorias/formCategoria/FormCategoria'
import ListaCategorias from './components/categorias/listaCategorias/ListaCategorias'
import DeletarCategorias from './components/categorias/deletarCategorias/DeletarCategorias'
import FormularioProduto from './components/produtos/formProdutos/FormProduto'
import FormProduto from './components/produtos/formProdutos/FormProduto'

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/contato" element={<Contato />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cadastrarCategoria" element={<FormCategoria />} />
              <Route path="/editarCategoria/:id" element={<FormCategoria />} />
              <Route path="/categorias" element={<ListaCategorias />} />
              <Route path="/deletarCategoria/:id" element={<DeletarCategorias />} />
              <Route path="/cadastroProduto" element={<FormProduto />} />
              <Route path="/editarProduto/:id" element={<FormProduto />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App

