import { ShoppingCart } from "@phosphor-icons/react"
import { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext"

function NavbarInferior() {

    const { usuario } = useContext(AuthContext)
  return (
    <div >
    {/* Nav Direita */}
    <nav className="flex-no-wrap relative flex w-full items-center  py-5 bg-rosa_1 text-2xl dark:bg-neutral-600 shadow-lg text-neutro_2 lg:flex-wrap lg:justify-start ">
      <div className="flex w-full flex-wrap items-center px-3">
        <div className=" relative m-auto basis-[100%] lg:!flex lg:basis-auto items-center h-1" id="navbarSupportedContent1" data-te-collapse-item>
          <ul className="list-style-none mr-auto flex flex-col pl-0 lg:flex-row" data-te-navbar-nav-ref>
            <li className="mb-4 mr-5 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
              <Link to="/home" className=" hover:from-neutro_1 " >Home</Link>
            </li>
            <li className="mb-4 mr-5 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
              <Link to="/perfil" className=" hover:from-neutro_1 " >Perfil</Link>
            </li>
            <li className="mb-4 mr-5 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
              <Link to="/categorias" className=" hover:from-neutro_1 " >Categoria</Link>
            </li>
            <li className="mb-4 mr-5 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
              <Link to="/cadastroProduto" className=" hover:from-neutro_1 " >Produto</Link>
            </li>
            <li className="mb-4 mr-5 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
              <Link to="/sobre">Sobre</Link>
            </li>
          </ul>
        </div>

        {/* Carrinho */}
        <div className="absolute right-3 flex items-center flex-end">
          <Link to='/cart'><ShoppingCart size={32} weight='bold' /></Link>
        </div>
      </div>
    </nav>
  </div>
  )
}

export default NavbarInferior