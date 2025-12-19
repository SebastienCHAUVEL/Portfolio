import { NavLink, useNavigate } from "react-router";
import type { MouseEvent } from "react";
import { smoothScrollTo } from "../utils/utils";

export default function Menu({ className, onMenuOpen } : { className: string, onMenuOpen: () => void }) {
  const navigate = useNavigate();

  function handleNavClick(e: MouseEvent<HTMLAnchorElement>, path: string) {
    e.preventDefault();

    // Notify parent on navlink click
    onMenuOpen();
    
    // Wait for the scroll to finish before navigate
    smoothScrollTo(0, 500, undefined, () => {
      navigate(path);
    });
  }

  return (
    <nav className={className}>
      <NavLink 
      className={({ isActive }) => (isActive ? "navlink current" : "navlink")}
      to="/"
      onClick={(e) => handleNavClick(e, '/')}>
        <span className="text-link">Projets</span>
      </NavLink>
      <NavLink 
      className={({ isActive }) => (isActive ? "navlink current" : "navlink")}
      to="/cv"
      onClick={(e) => handleNavClick(e, '/cv')}>
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