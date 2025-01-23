import { NavLink } from "react-router-dom"
//Import array linksMenu:
import navLinsk from "../data/navLinks"

function AppNavMenu() {
   return (
      <div className="nav-container">
         <div className="logo">
            <NavLink to="/"><img src="img/logo.png" alt="" /></NavLink>
         </div>
         <nav className="nav-bar">
            <ul>
               {navLinsk.map(navLink => (
                  <li key={navLink.id}>
                     <NavLink to={navLink.root}>{navLink.name}</NavLink>
                  </li>
               ))}
            </ul>
         </nav>
      </div>
   )
}

export default AppNavMenu