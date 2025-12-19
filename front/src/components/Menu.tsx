import { NavLink } from "react-router";
import type { MouseEvent } from 'react';
import { smoothScrollTo } from "../utils/utils";

export default function Menu({ className, onMenuOpen } : { className: string, onMenuOpen: () => void }) {
  function handleMenuClick(e: MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    smoothScrollTo(0, 700);
    onMenuOpen();
  }

  return (
    <nav className={className}>
      <NavLink 
      className={({ isActive }) => (isActive ? "navlink current" : "navlink")}
      to="/"
      onClick={handleMenuClick}>
        <span className="text-link">Projets</span>
      </NavLink>
      <NavLink 
      className={({ isActive }) => (isActive ? "navlink current" : "navlink")}
      to="/cv"
      onClick={handleMenuClick}>
        <span className="text-link">CV</span>
      </NavLink>
      {/* <NavLink 
      className={({ isActive }) => (isActive ? "navlink current" : "navlink")}
      to="/about">
        <span className="text-link">A propos</span>
      </NavLink> */}
    </nav>
  )
}