import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'
import FormCatList from './components/categorias/categoriaDetalhes/FormCatList'
import FormCatListHome from './components/categorias/categoriaDetalhes/FormCatListHome'
import DeletarCategorias from './components/categorias/deletarCategorias/DeletarCategorias'
import FormCategoria from './components/categorias/formCategoria/FormCategoria'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Cart from './components/produtos/cart/Cart'
import DeletarProduto from './components/produtos/deletarProduto/DeletarProduto'
import Fav from './components/produtos/favoritos/Fav'
import FormProduto from './components/produtos/formProdutos/FormProduto'
import ListarProdutos from './components/produtos/listarProdutos/ListarProdutos'
import { AuthProvider } from './contexts/AuthContext'
import { CartProvider } from './contexts/CartContext'
import Cadastro from './pages/cadastro/Cadastro'
import Contato from './pages/contato/Contato'
import ContatoMensagem from './pages/contatomensagem/ContatoMensagem'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Organizacao from './pages/organizacao/Organizacao'
import Perfil from './pages/perfil/Perfil'
import PerfilEdit from './pages/perfil/PerfilEdit'
import Sobre from './pages/sobre/Sobre'
import { FavProvider } from './contexts/FavContext'



function App() {
  return (
    <>
      <FavProvider>
        <CartProvider>
          <AuthProvider>
            <ToastContainer />
            <BrowserRouter>
              <Navbar />
              <div className='min-h-[90vh]'>
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
                  <Route path="/categorias" element={<FormCatList />} />
                  <Route path="/categoriashome" element={<FormCatListHome />} />
                  <Route path="/deletarCategoria/:id" element={<DeletarCategorias />} />
                  <Route path="/deletarproduto/:id" element={<DeletarProduto />} />
                  <Route path="/cadastroProduto" element={<FormProduto />} />
                  <Route path="/editarProduto/:id" element={<FormProduto />} />
                  <Route path="/produtos" element={<ListarProdutos />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/favoritos" element={<Fav />} />
                  <Route path="/perfil" element={<Perfil />} />
                  <Route path="/perfilEdit" element={<PerfilEdit />} />
                  <Route path="/organizacao" element={<Organizacao />} />
                </Routes>
              </div>
              <Footer />
            </BrowserRouter>
          </AuthProvider>
        </CartProvider>
      </FavProvider>
    </>
  )
}

export default App

