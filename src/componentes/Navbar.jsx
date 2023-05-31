import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        {/*links para navegar en la pagina*/}
        <Link to="/shop"> Tienda </Link>
        {/*to="" donde vas a ir cuando das click en el link*/}
        <Link to="/cart"> Carrito </Link>
      </div>
    </div>
  );
};
