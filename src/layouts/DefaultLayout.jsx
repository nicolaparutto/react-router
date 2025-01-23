//Importo l'OUTLET, strumento che gestisce l'innesto delle pagine:
import { Outlet } from "react-router-dom"

//Importo la NavBar:
import AppNavMenu from "../components/AppNavMenu"

//Il layout di default contiene la struttura principale delle pagine.
function DefaultLayout() {
   return (
      <>
         <header>
            <AppNavMenu />
         </header>

         <main>
            <Outlet />
         </main>

         <footer>
            footer
         </footer>
      </>
   )
}

export default DefaultLayout