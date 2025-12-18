import { NavLink } from "react-router";

export default function Menu({ className } : { className: string }) {
  return (
    <nav className={className}>
      <NavLink 
      className={({ isActive }) => (isActive ? "navlink current" : "navlink")}
      to="/">
        <span className="text-link">Projets</span>
      </NavLink>
      <NavLink 
      className={({ isActive }) => (isActive ? "navlink current" : "navlink")}
      to="/cv">
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