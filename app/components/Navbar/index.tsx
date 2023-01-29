import { useState } from "react";
import { FaLaptopCode } from "react-icons/fa";
import NavbarLink from "./NavbarLink";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-900 md:flex md:justify-between">
      <div className="flex items-center justify-between px-4 py-3">
        <div>
          <FaLaptopCode color="#ffffff" size="4rem" />
        </div>
        <div className="md:hidden">
          <button
            className="block text-gray-500 hover:text-white focus:text-white focus:outline-none"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                />
              ) : null}
              {!isOpen ? (
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              ) : null}
            </svg>
          </button>
        </div>
      </div>
      <div
        className={`px-2 pt-2 pb-4 ${
          isOpen ? "block" : "hidden"
        } md:flex md:items-center`}
      >
        <NavbarLink to="/">Home</NavbarLink>
        <NavbarLink to="/counter">Counter</NavbarLink>
        <NavbarLink to="/handle-user-input">Handle User Input</NavbarLink>
        <NavbarLink to="/todo-app">ToDo App</NavbarLink>
      </div>
    </header>
  );
};

export default Navbar;