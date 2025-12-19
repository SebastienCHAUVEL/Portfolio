import { NavLink } from "react-router";

export default function Menu({ className, onMenuOpen } : { className: string, onMenuOpen: () => void }) {
  return (
    <nav className={className}>
      <NavLink 
      className={({ isActive }) => (isActive ? "navlink current" : "navlink")}
      to="/"
      onClick={onMenuOpen}>
        <span className="text-link">Projets</span>
      </NavLink>
      <NavLink 
      className={({ isActive }) => (isActive ? "navlink current" : "navlink")}
      to="/cv"
      onClick={onMenuOpen}>
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