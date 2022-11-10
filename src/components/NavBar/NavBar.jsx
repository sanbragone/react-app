import "./navBar.css";
import * as React from "react";
import ShoppingCartIcon from "./CartWidget/CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => (
  <nav className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid">
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="./">
              <img
                src="/logo.png"
                className="nav-link active logo"
                aria-current="page"
              ></img>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="./">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/category/cara/">
              Cara
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/category/cuerpo/">
              Cuerpo
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/category/manos/">
              Manos
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/category/bano/">
              Baño
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/category/noche/">
              Noche
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/category/cabello/">
              Cabello
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/category/exterior/">
              Exterior
            </Link>
          </li>
        </ul>
      </div>
    </div>
    <ShoppingCartIcon />
  </nav>
);

export default NavBar;
