import { NavLink } from "react-router";

export default function Footer() {
  return(
    <footer>
      <nav>
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
      </nav>
      <div className="social">
        <ul>
          <li>
        
          </li>
        </ul>
      </div>
    </footer>
  )
}