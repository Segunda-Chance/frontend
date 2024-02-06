import { Link } from "react-router-dom";
import { Collapse, Dropdown, initTE } from "tw-elements";
initTE({ Collapse, Dropdown });

function Footer() {
  return (
    <div className="bg-rosa_1 rounded-lg shadow dark:bg-gray-900 text-neutro_2">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a href="https://github.com/Segunda-Chance" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <img src="https://ik.imagekit.io/53urd0gwk/Segunda%20Chance/final.png?updatedAt=1707238425976" className="h-8" alt="Segunda Chance Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Segunda Chance</span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="https://github.com/Segunda-Chance" className="hover:underline me-4 md:me-6">Repositorio</a>
            </li>
            <li>
              <a href="https://brazil.generation.org/politica-de-privacidade/" className="hover:underline me-4 md:me-6">Política de Privacidade</a>
            </li>
            <li>
              <Link to='/contato' className=" hover:underline mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                Time de Desenvolvimento
              </Link>
            </li>

          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://brazil.generation.org" className="hover:underline">Generation Brasil</a></span>
      </div>
    </div>

  );
}

export default Footer;
