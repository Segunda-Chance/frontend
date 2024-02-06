import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import DeletarCategorias from './components/categorias/deletarCategorias/DeletarCategorias'
import FormCategoria from './components/categorias/formCategoria/FormCategoria'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import { AuthProvider } from './contexts/AuthContext'
import Cadastro from './pages/cadastro/Cadastro'
import Contato from './pages/contato/Contato'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Sobre from './pages/sobre/Sobre'
import DeletarProduto from './components/produtos/deletarProduto/DeletarProduto'
import FormProduto from './components/produtos/formProdutos/FormProduto'
import ListarProdutos from './components/produtos/listarProdutos/ListarProdutos'
import Cart from './components/produtos/cart/Cart'
import { CartProvider } from './contexts/CartContext'
import Perfil from './pages/perfil/Perfil'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ContatoMensagem from './pages/contatomensagem/ContatoMensagem'
import FormCatList from './components/categorias/categoriaDetalhes/FormCatList'




function App() {
  return (
    <>
      <CartProvider>
        <AuthProvider>
          <ToastContainer />
          <BrowserRouter>
            <Navbar />
            <div className='min-h-[80vh]'>
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/contato" element={<Contato />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/contatomensagem" element={<ContatoMensagem />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cadastrarCategoria" element={<FormCategoria />} />
                <Route path="/editarCategoria/:id" element={<FormCategoria />} />
                <Route path="/categorias" element={<FormCatList/>} />
                <Route path="/deletarCategoria/:id" element={<DeletarCategorias />} />
                <Route path="/deletarproduto/:id" element={<DeletarProduto />} />
                <Route path="/cadastroProduto" element={<FormProduto />} />
                <Route path="/editarProduto/:id" element={<FormProduto />} />
                <Route path="/produtos" element={<ListarProdutos />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/perfil" element={<Perfil />} />
              </Routes>
            </div>
            <Footer />
          </BrowserRouter>
        </AuthProvider>
      </CartProvider>
    </>
  )
}

export default App

