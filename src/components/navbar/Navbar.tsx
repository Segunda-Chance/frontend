import { Collapse, Dropdown, initTE } from "tw-elements";
import "./Navbar.css";
import NavbarInferior from "./NavbarInferior";



initTE({ Collapse, Dropdown });

function Navbar() {

  return (
    <>
      <NavbarInferior />
    </>
  );
}

export default Navbar;


