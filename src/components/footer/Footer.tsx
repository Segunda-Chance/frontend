import { Link } from "react-router-dom";
import { Collapse, Dropdown, initTE } from "tw-elements";
initTE({ Collapse, Dropdown });
import "./Footer.css"

function Footer() {
  return (
    <div className="shadow dark:bg-gray-900 bg-[#573f344b] ">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a href="https://github.com/Segunda-Chance" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse" target="_blank">
            <img src="https://ik.imagekit.io/53urd0gwk/Segunda%20Chance/final.png?updatedAt=1707238425976" className="h-8" alt="Segunda Chance Logo" />
            <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-white drop-shadow-md segChance">Segunda Chance</span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="https://github.com/Segunda-Chance" className="hover:underline me-4 md:me-6 drop-shadow-md" target="_blank">Repositório</a>
            </li>
            <li>
              <a href="https://brazil.generation.org/politica-de-privacidade/" className="hover:underline me-4 md:me-6 drop-shadow-md" target="_blank">Política de Privacidade</a>
            </li>
            <li >
              <Link to='/contato' className=" hover:underline mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400 drop-shadow-md">
                Time de Desenvolvimento
              </Link>
            </li>
            <li>
              <Link to='/contatomensagem' className="pl-5 hover:underline mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400 drop-shadow-md">
                Contato
              </Link>
            </li>

          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400 drop-shadow-md">© 2024 <a href="https://brazil.generation.org" className="hover:underline" target="_blank">Generation Brasil</a></span>
      </div>
    </div>

  );
}

export default Footer;
