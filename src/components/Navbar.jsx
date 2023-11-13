import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNavToggle = () => {
    setNav(!nav);
  };

  return (
    <nav className="flex items-center justify-between flex-wrap bg-slate-800 p-6">
      <Link to="/">
        <div className="flex items-center flex-shrink-0 text-white">
          <img src="/react.svg" alt="React Logo" className="w-10" />
          <h1 className="text-2xl font-bold text-white">Bazar React</h1>
        </div>
      </Link>

      {/* <div className="flex items-center flex-shrink-0 text-gray-800 mr-6 gap-2"> */}
      <ul
        className={`text-gray-600 justify-between ${
          !nav ? "flex" : "hidden"
        } sm:items-center sm:justify-between sm:gap-4 text-center`}
      >
        <li>
          <Link
            to="/"
            className="  text-teal-200 hover:text-white font-bold text-xl text-center"
          >
            Inicio
          </Link>
        </li>
      </ul>
      {/* </div> */}

      <button
        className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 focus:outline-none"
        onClick={handleNavToggle}
      >
        {nav ? <FaTimes /> : <FaBars />}
      </button>
    </nav>
  );
};

export default Navbar;
