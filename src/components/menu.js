import React, { useState } from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

export const Menu = ({ menu }) => {
  const [show, setShow] = useState(false);

  const _handleActiveSection = (e) => {
    window.location.hash = e.target.hash;
    setShow(!show);
  };

  return (
    <header className="l-header" id="header">
      <Router>
        <nav className="nav bd-container">
          <span className="nav__logo">Menu</span>
          <div
            className={show ? "nav__menu show-menu" : "nav__menu"}
            id="nav-menu"
          >
            <ul className="nav__list">
              {menu.map(({ label, section, className }) => (
                <li className="nav__item" key={label}>
                  <NavLink
                    className={({ isActive }) => 
                      isActive ? "nav__link active-link" : "nav__link"
                    }
                    onClick={_handleActiveSection}
                    to={`/${section}`}
                  >
                    <i className={`bx ${className} nav__icon`} /> {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div
            className="nav__toggle"
            id="nav-toggle"
            onClick={() => setShow(!show)}
          >
            <i className="bx bx-grid-alt" />
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Navigate to="/#home" replace />} />
        </Routes>
      </Router>
    </header>
  );
};