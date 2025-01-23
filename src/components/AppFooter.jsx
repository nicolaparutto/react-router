import { Link } from "react-router-dom"
//Import array linksMenu:
import navLinks from "../data/navLinks"

function AppFooter() {
   return (
      <section className="footer-section">
         <div className="footer-links">
            <span>Link Utili:</span>
            <ul>
               {navLinks.map(navLink => (
                  <li key={navLink.id}>
                     <Link to={navLink.root}>{navLink.name}</Link>
                  </li>
               ))}
            </ul>
         </div>
      </section>
   )
}

export default AppFooter