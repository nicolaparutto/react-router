//Router:
import { BrowserRouter, Routes, Route } from "react-router-dom"

//Default Layout:
import DefaultLayout from "./layouts/DefaultLayout"

//Pagine:
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import PostsPage from "./pages/PostsPage"
import PostsDetailsPage from "./pages/PostsDetailsPage"
import AddPostPage from "./pages/AddPostPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout}>
          <Route path="/" Component={HomePage} />
          <Route path="/about" Component={AboutPage} />
          <Route path="/posts" Component={PostsPage} />
          <Route path="/dettaglio-post/:id" Component={PostsDetailsPage} />
          <Route path="/aggiungi-post" Component={AddPostPage} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App