import React from "react";
import { Icon } from "./icon";

// Bottom bar shown on narrow screens only; the sticky sidebar covers desktop.
export const Nav = ({ items, active }) => (
  <nav className="nav" aria-label="Sections">
    <ul className="nav__list">
      {items.map(({ id, label, icon }) => (
        <li key={id}>
          <a
            href={`#${id}`}
            className={`nav__link ${active === id ? "is-active" : ""}`.trim()}
            aria-current={active === id ? "true" : undefined}
          >
            <Icon name={icon} size={19} />
            {label}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);
