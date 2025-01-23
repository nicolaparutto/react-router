//Importo l'OUTLET, strumento che gestisce l'innesto delle pagine:
import { Outlet } from "react-router-dom"

//Importo la NavBar:
import AppNavMenu from "../components/AppNavMenu"

//Import il footer:
import AppFooter from "../components/AppFooter"

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
            <AppFooter />
         </footer>
      </>
   )
}

export default DefaultLayout