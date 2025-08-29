import React from "react";
import { Link } from "react-router-dom";
import headerLogo from "../../assets/logo.svg";
const Header = () => {
  return (
    <header className="bg-[#1C1E53] grid place-items-center h-[90px]">
      <div className="container flex justify-between text-white place-items-center">
        <div>
          <Link to="/">
            <img src={headerLogo} alt="header-logo" />
          </Link>
        </div>
        <ul className="flex gap-[40px] text-[#BBBBCB]">
          <Link className="hover:text-white" to="/">
            Home
          </Link>
          <Link className="hover:text-white" to="/about">
            About
          </Link>
          <Link className="hover:text-white" to="/pricing">
            Pricing
          </Link>
          <Link className="hover:text-white" to="/work">
            Work
          </Link>
          <Link className="hover:text-white" to="/blog">
            Blog
          </Link>
          <button>
            <Link
              to="/contact"
              className="pt-4 pb-4 pl-12 pr-12 border place-items-center rounded-[41px] hover:text-white"
            >
              Contact us
            </Link>
          </button>
        </ul>
      </div>
    </header>
  );
};

export default Header;
