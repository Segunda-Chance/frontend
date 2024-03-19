import {ReactNode, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { Heart, ShoppingCart } from "@phosphor-icons/react";
import { Dropdown, Ripple, initTE, } from "tw-elements";
import { ToastAlerta } from "../../utils/ToastAlerta";
import "./Navbar.css"



function NavbarInferior() {
  useContext(AuthContext);
  initTE({ Dropdown, Ripple });


  const navigate = useNavigate();
  const { usuario, handleLogout } = useContext(AuthContext)
  let component: ReactNode

  function logout() {

      handleLogout()
      ToastAlerta('O Usuário foi desconectado com sucesso!', "sucesso")
      navigate('/login')
  }

  if(usuario.token !== "") {
    
      component = (
          <div className='w-full bg-indigo-900 text-white flex justify-center py-4'>

              <div className="container flex justify-between text-lg">
                  <div className='flex gap-4'>
                      <Link to="/cadastroProduto" className='hover:underline'>Produtos</Link>
                      <Link to="/categorias" className='hover:underline'>Categorias</Link>
                      <Link to='/perfil' className='hover:underline'>Perfil</Link>
                      <Link to='' onClick={logout} className='hover:underline'>Sair</Link>
                  </div>
              </div>
          </div>
      )
  }

  return (
    <>
      <div className="relative flex flex-row w-full items-center justify-center bg-[#573f344b] py-2 shadow-sm shadow-neutral-700/10 lg:flex-wrap lg:justify-start" data-te-navbar-ref >
        <div className="flex w-2/12 max-md:w-0">
          {/* Vazia */}
        </div>
        {/* <!-- Container wrapper --> */}
        <div className="flex w-8/12 flex-wrap items-center justify-between px-5">
          <div className="flex items-center">
            {/* <!-- Toggle button --> */}
            <button
                className="block border-0 bg-transparent py-2 pr-2.5 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
                type="button" data-te-collapse-init data-te-target="#navbarSupportedContentY"
                aria-controls="navbarSupportedContentY" aria-expanded="false" aria-label="Toggle navigation">
                <span className="[&>svg]:w-7">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
                    <path fill-rule="evenodd"
                      d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                      clip-rule="evenodd" />
                  </svg>
                </span>
              </button>
          </div>

          {/* <!-- Collapsible wrapper --> */}
          <div className="!visible hidden justify-center flex-grow basis-[100%] items-center lg:!flex lg:basis-auto" id="navbarSupportedContentY" data-te-collapse-item >
            {/* <!-- Left links --> */}
            <ul className="m-auto lg:flex lg:flex-row" data-te-navbar-nav-ref>
              <li data-te-nav-item-ref>
                <Link to="/home" className="navfonte text-gray-500 text-xl drop-shadow-md block py-2 pr-2 text-neutral-500 transition duration-150 ease-in-out hover:text-neutral-600 focus:text-neutral-600 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 dark:disabled:text-white/30 lg:px-2 [&.active]:text-black/80 dark:[&.active]:text-white/80 hover:from-neutro_1">
                  Home
                </Link>
              </li>
              <li className="mb-2 lg:mb-0" data-te-nav-item-ref>
                <Link to="/organizacao" className="navfonte text-gray-500 text-xl drop-shadow-md block py-2 pr-2 text-neutral-500 transition duration-150 ease-in-out hover:text-neutral-600 focus:text-neutral-600 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 dark:disabled:text-white/30 lg:px-2 [&.active]:text-black/80 dark:[&.active]:text-white/80 hover:from-neutro_1">
                  ONGs
                </Link>
              </li>
              <li className="mb-2 lg:mb-0" data-te-nav-item-ref>
                <Link to="/sobre" className="navfonte text-gray-500 text-xl drop-shadow-md block py-2 pr-2 text-neutral-500 transition duration-150 ease-in-out hover:text-neutral-600 focus:text-neutral-600 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 dark:disabled:text-white/30 lg:px-2 [&.active]:text-black/80 dark:[&.active]:text-white/80 hover:from-neutro_1">
                  Sobre
                </Link>
              </li>
            </ul>
            {/* <!-- Menu Perfil --> */}
          </div>
        </div>

        <div className="carFav flex w-2/12 gap-2 items-center justify-center">
                {/* Favoritos*/}
                <div className="flex content-center justify-center">    
                    <Link to="/favoritos">
                        <Heart size={20} />
                    </Link>
                </div>
 
                {/* Carrinho*/}
                <div className="flex content-center justify-center">    
                    <Link to="/cart">
                        <ShoppingCart size={20} />
                    </Link>
                </div>

                {/* Perfil */}
                <div className="relative" id="menu-perfil" data-te-dropdown-ref>
                  <button className="flex items-center whitespace-nowrap rounded-full bg-primary px-1 pb-1 pt-1 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] motion-reduce:transition-none dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]" type="button" id="dropdownMenuButton1d" data-te-dropdown-toggle-ref aria-expanded="false" data-te-ripple-init data-te-ripple-color="light">
                    <img src={usuario.foto} id="fotoPerfil" className="w-8 rounded-full" alt="Avatar"/>
                  </button>
                  <ul className="absolute z-[1000] float-left -left-5 m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none  bg-neutro_2 bg-clip-padding text-right text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block" aria-labelledby="dropdownMenuButton1d" data-te-dropdown-menu-ref>
                    <li>
                      <a className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600" href="#" data-te-dropdown-item-ref >
                      <Link to="/perfil">
                        Perfil
                      </Link>
                      </a>
                    </li>
                    <li>
                      <a className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600" href="#" data-te-dropdown-item-ref >
                        <Link to="/categorias">
                          Categoria
                        </Link>
                      </a>
                    </li>
                    <li>
                      <a className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600" href="#" data-te-dropdown-item-ref >
                        <Link to="/cadastroProduto">
                          Produto
                        </Link>
                      </a>
                    </li>
                    <hr className="my-2 h-0 border border-t-0 border-solid border-neutral-700 opacity-25 dark:border-neutral-200" />
                    <li>
                      <a className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600" href="#" data-te-dropdown-item-ref>
                      <Link to='' onClick={logout} className='hover:underline'>Sair</Link>
                      </a>
                    </li>
                  </ul>
                </div>
            </div>
      </div>
    </>
  );
}

export default NavbarInferior;


