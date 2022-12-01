import React from "react";
import { Link, NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
         UseContext
        </Link>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <NavLink className={  ({ isActive })=> `nav-link ${ isActive ? 'active' : '' }` } to="/"> {/* Verifica si nos encuentramos en la pestaña y lo resalta para indetificarlo */}
                Home
              </NavLink>
            </li>
            <li className="nav-item">
                <NavLink className={  ({ isActive })=> `nav-link ${ isActive ? 'active' : '' }` } to="login"> { /* NavLink hace los mismo que link y a, pero permite agregarle estilos con className */ }
                Login
              </NavLink>
            </li>
            <li className="nav-item">
                <NavLink className={  ({ isActive })=> `nav-link ${ isActive ? 'active' : '' }` } to="about">
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
