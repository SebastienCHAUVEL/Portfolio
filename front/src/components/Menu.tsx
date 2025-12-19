import { NavLink } from "react-router";
import { smoothScrollTo } from "../utils/utils";

export default function Menu({ className, onMenuOpen } : { className: string, onMenuOpen: () => void }) {
  function handleMenuClick() {
    smoothScrollTo(
      0
    );
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