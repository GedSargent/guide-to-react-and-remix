import { Link } from "@remix-run/react";
import { useState } from "react";
import { FaLaptopCode } from "react-icons/fa";
import NavbarLink from "./NavbarLink";
import NavItemIcon from "./NavItemIcon";
import {
  GiCalculator,
  GiChecklist,
  GiKeyboard,
  GiPaintBrush,
  GiToolbox,
  GiAchievement,
} from "react-icons/gi";
import HamburgerButton from "./HamburgerButton";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-900 md:flex md:justify-between">
      <div className="flex items-center justify-between px-4 py-3">
        <Link to="/">
          <FaLaptopCode color="#ffffff" size="4rem" />
        </Link>
        <HamburgerButton isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      <div
        className={`px-2 pt-2 pb-4 ${
          isOpen ? "block" : "hidden"
        } md:flex md:items-center`}
      >
        <NavbarLink to="/your-first-component">
          <NavItemIcon>
            <GiAchievement className="fill-white" />
          </NavItemIcon>
          First Component
        </NavbarLink>
        <NavbarLink to="/styling">
          <NavItemIcon>
            <GiPaintBrush />
          </NavItemIcon>
          Styling
        </NavbarLink>
        <NavbarLink to="/custom-components">
          <NavItemIcon>
            <GiToolbox className="fill-white" />
          </NavItemIcon>
          Custom Components
        </NavbarLink>
        <NavbarLink to="/counter">
          <NavItemIcon>
            <GiCalculator className="fill-white" />
          </NavItemIcon>
          Counter
        </NavbarLink>
        <NavbarLink to="/handle-user-input">
          <NavItemIcon>
            <GiKeyboard className="fill-white" />
          </NavItemIcon>
          Handle User Input
        </NavbarLink>
        <NavbarLink to="/todo-app">
          <NavItemIcon>
            <GiChecklist className="fill-white" />
          </NavItemIcon>
          ToDo App
        </NavbarLink>
      </div>
    </header>
  );
};

export default Navbar;
