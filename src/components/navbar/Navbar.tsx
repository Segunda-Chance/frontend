import { Link } from "react-router-dom";
import { Collapse, Dropdown, initTE } from "tw-elements";
import "./Navbar.css";
import NavbarInferior from "./NavbarInferior";


initTE({ Collapse, Dropdown });

initTE({ Collapse, Dropdown });

function Navbar() {

  return (
    <>
      <div className="  bg-neutro_2 flex flex-col w-full  justify-between py-2  dark:bg-neutral-600 dark:shadow-black/10 lg:flex-wrap lg:justify-start lg:py-4">
      <div className="relative navSuperior flex w-full flex-wrap items-center pr-8 justify-between">
          {/* Div Central Logo */}
          <div className="   logo-segundachance items-end content-center justify-center m-auto transform transition-transform duration-500 hover:scale-110">
            <Link to="/home" className="flex relative items-center">
              <img className="logoImg h-15" src="https://ik.imagekit.io/53urd0gwk/Segunda%20Chance/final--1.png?updatedAt=1707238827358" alt="" />
              <h1 className="temaLogo">Segunda Chance</h1>
            </Link>
          </div>
        </div>   
        
        <div>
        {/* Menu */}
        
        </div>
     
        <NavbarInferior/>

        
      </div>
    </>
  );
}

export default Navbar;


