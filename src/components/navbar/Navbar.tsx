import { Link } from "react-router-dom";
import { Collapse, Dropdown, initTE } from "tw-elements";
import "./Navbar.css";
initTE({ Collapse, Dropdown });

function Navbar() {
  return (
    <>
      <nav className="  bg-neutro_2 flex flex-col w-full  justify-between py-2 shadow-md shadow-black/5 dark:bg-neutral-600 dark:shadow-black/10 lg:flex-wrap lg:justify-start lg:py-4">
        <div className="relative navSuperior flex w-full flex-wrap items-center pr-8 justify-between">
          {/* Div Central Logo */}
          <div className="   logo-segundachance items-end content-center justify-center m-auto">
            <Link to="/home" className="flex relative items-center">
              <img
                className="logoImg h-15"
                src="https://ik.imagekit.io/wzl99vhez/Segunda%20Chance/s.png?updatedAt=1706140304412"
                alt=""
              />
              <h1 className="temaLogo">Segunda Chance</h1>
            </Link>
          </div>


        </div>

        {/* Menu */}
        <div className="w-full flex flex-row  bg-rosa_1  text-lg pl-10">
          <div className="w-full h-auto m-auto">
            <ul className="flex flex-row gap-3  text-neutro_2 font-semibold justify-center">
              <li>
                <Link to="/home" className=" hover:from-neutro_1 " >Home</Link>
              </li>
              <li><Link to="/categorias" className=" hover:from-neutro_1 " >Categorias</Link></li>
              <li><Link to="/cadastrarCategoria" className=" hover:from-neutro_1 " >Cadastrar categorias</Link></li>
              <li>Produtos</li>
              <li>Organizações</li>
              <li>
                <Link to="/contato">Contato</Link>
              </li>
              <li>
                <Link to="/sobre">Sobre</Link>
              </li>
            </ul>
          </div>

          {/* Nav Direita */}
          {/* Search */}
          <div className="navDireita flex gap-3 items-center content-center justify-end pl-">
            {/* Carrinho */}
            <div>
              <a className=" text-neutral-600 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 [&.active]:text-black/90 dark:[&.active]:text-neutral-400" href="#">
                <span className="[&>svg]:w-5">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                  </svg>
                </span>
              </a>
            </div>





            {/*  Card Perfil */}
            <button id="dropdownUserAvatarButton" data-dropdown-toggle="dropdownAvatar" className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" type="button">
              <span className="sr-only">Open user menu</span>
              <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="user photo" />
            </button>

            {/* Dropdown menu */}
            <div id="dropdownAvatar" className="z-1000 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
              <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                <div>Bonnie Green</div>
                <div className="font-medium truncate">name@flowbite.com</div>
              </div>
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownUserAvatarButton">
                <li>
                  <Link to="/login" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    Login
                  </Link>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                </li>
              </ul>
              <div className="py-2">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;


