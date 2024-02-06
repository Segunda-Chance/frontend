import { ShoppingCart } from "@phosphor-icons/react"
import { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext"

function NavbarInferior() {

    const { usuario } = useContext(AuthContext)
  return (
    <div >
    {/* Nav Direita */}
    <nav className="flex-no-wrap relative flex w-full items-center  bg-rosa_1 shadow-md shadow-black/5 dark:bg-neutral-600 dark:shadow-black/10 lg:flex-wrap lg:justify-start lg:py-4">
      <div className="flex w-full flex-wrap items-center px-3">
        <div className=" relative m-auto basis-[100%] lg:!flex lg:basis-auto items-center h-1" id="navbarSupportedContent1" data-te-collapse-item>
          <ul className="list-style-none mr-auto flex flex-col pl-0 lg:flex-row" data-te-navbar-nav-ref>
            <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
              <Link to="/home" className=" hover:from-neutro_1 " >Home</Link>
            </li>
            <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
              <Link to="/perfil" className=" hover:from-neutro_1 " >Perfil</Link>
            </li>
            <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
              <Link to="/cadastrarCategoria" className=" hover:from-neutro_1 " >Categoria</Link>
            </li>
            <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
              <Link to="/cadastroProduto" className=" hover:from-neutro_1 " >CadProduto</Link>
            </li>
            <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
              <Link to="/produtos" className=" hover:from-neutro_1 " >Produto</Link>
            </li>
            <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
              <Link to="/sobre">Sobre</Link>
            </li>
          </ul>
        </div>

        {/* Carrinho */}
        <div className="absolute right-3 flex items-center flex-end">
          <Link to='/cart'><ShoppingCart size={32} weight='bold' /></Link>

          {/* Perfil */}
          <div className="relative" data-te-dropdown-ref data-te-dropdown-alignment="end">
            <a className="hidden-arrow flex items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none" href="#" id="dropdownMenuButton2" role="button" data-te-dropdown-toggle-ref aria-expanded="false">
              <img 
              className="h-3 w-9 p-1 rounded-full" 
                src={usuario.foto} alt={`Foto de perfil de ${usuario.nomeUsuario}`} />
            </a>
            <ul className="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block" aria-labelledby="dropdownMenuButton2" data-te-dropdown-menu-ref>

              <li>
                <a className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30" href="#" data-te-dropdown-item-ref >
                  <Link to="/login">Login</Link>
                </a>
              </li>
              <li>
                <a className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30" href="#" data-te-dropdown-item-ref >
                  <Link to="/perfil">Perfil</Link>
                </a>
              </li>
              <li>
                {/* <a className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30" href="#" data-te-dropdown-item-ref>
                  <Link to="" onClick={logout} >Logout</Link>
                </a> */}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </div>
  )
}

export default NavbarInferior