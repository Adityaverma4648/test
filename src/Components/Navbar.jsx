import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaBars, FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", route: "/" },
    { name: "About", route: "/about" },
    { name: "Projects", route: "/projects" },
    { name: "Contact", route: "/contact" },
  ];

  return (
    <div className="w-screen h-[104px] bg-[#010208] fixed top-0 left-0 z-50 text-white flex justify-center items-center">
      <div className="w-10/12 flex justify-between items-center">
        <div>
          <img src={logo} alt="logo" />
        </div>

        <div className="flex-1 flex-grow-1 sm:flex hidden justify-center items-center">
          {navLinks?.map((d) => {
            const isActive = location.pathname === d.route;
            return (
              <Link
                key={d.route}
                to={d.route}
                className={`h-[36px] w-[106px] rounded-[100px] flex justify-center items-center ${
                  isActive ? "bg-white text-black" : ""
                }`}
              >
                {d.name}
              </Link>
            );
          })}
        </div>

        <div className="flex justify-center items-center">
          <button
            type="button"
            className="border border-white rounded-[100px] w-[108px] h-[40px]"
          >
            HIRE ME
          </button>

          <button
            type="button"
            className="text-white ms-2 sm:hidden flex cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <FaXmark color="#fff" size={32} />
            ) : (
              <FaBars color="#fff" size={32} />
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="absolute top-[104px] left-0 w-full bg-[#010208] flex flex-col items-center py-4 sm:hidden">
          {navLinks.map((d) => {
            const isActive = location.pathname === d.route;
            return (
              <Link
                key={d.route}
                to={d.route}
                className={`w-full text-center py-3 ${
                  isActive ? "bg-white text-black" : "text-white"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {d.name}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Navbar;
