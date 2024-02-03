import { Link } from "react-router-dom";
import { Collapse, Dropdown, initTE } from "tw-elements";
import "./Navbar.css";


initTE({ Collapse, Dropdown });

initTE({ Collapse, Dropdown });

function Navbar() {
  
  return (
    <>
      <nav className="  bg-neutro_2 flex flex-col w-full  justify-between py-2 shadow-md shadow-black/5 dark:bg-neutral-600 dark:shadow-black/10 lg:flex-wrap lg:justify-start lg:py-4">
        <div className="relative navSuperior flex w-full flex-wrap items-center pr-8 justify-between">
          {/* Div Central Logo */}
          <div className="   logo-segundachance items-end content-center justify-center m-auto">
            <Link to="/home" className="flex relative items-center">
              <img className="logoImg h-15" src="https://ik.imagekit.io/wzl99vhez/Segunda%20Chance/s.png?updatedAt=1706140304412" alt="" />
              <h1 className="temaLogo">Segunda Chance</h1>
            </Link>
          </div>
        </div>

        {/* Menu */}
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
                  <a className="mr-4 text-neutral-600 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                    href="#">
                    <span className="[&>svg]:w-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5">
                        <path
                          d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                      </svg>
                    </span>
                  </a>

                  {/* Perfil */}
                  <div className="relative" data-te-dropdown-ref data-te-dropdown-alignment="end">
                  <a className="hidden-arrow flex items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none" href="#" id="dropdownMenuButton2" role="button" data-te-dropdown-toggle-ref aria-expanded="false">
                    <img className="h-3 w-9 p-1 rounded-full" src="https://tecdn.b-cdn.net/img/new/avatars/2.jpg" alt="" loading="lazy" />
                  </a>
                  <ul className="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block" aria-labelledby="dropdownMenuButton2" data-te-dropdown-menu-ref>
                    
                    <li>
                      <a className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30" href="#" data-te-dropdown-item-ref >
                        <Link to="/login">Login</Link>
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
      </nav>
    </>
  );
}

export default Navbar;


