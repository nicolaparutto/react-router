import { NavLink } from "react-router-dom"

function AppNavMenu() {
   return (
      <div>
         <nav>
            <ul>
               <li>
                  <NavLink to="/">Home</NavLink>
               </li>
               <li>
                  <NavLink to="/about">Chi Siamo</NavLink>
               </li>
               <li>
                  <NavLink to="/posts">I Nostri Post</NavLink>
               </li>
            </ul>
         </nav>
      </div>
   )
}

export default AppNavMenu