//Importo l'OUTLET, strumento che gestisce l'innesto delle pagine:
import { Outlet } from "react-router-dom"

//Il layout di default contiene la struttura principale delle pagine.
function DefaultLayout() {
   return (
      <>
         <header>
            header
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