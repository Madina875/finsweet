import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div></div>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/pricing">Pricing</Link>
        <Link to="/work">Work</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact</Link>
      </ul>
    </header>
  );
};

export default Header;
