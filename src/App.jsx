//Router:
import { BrowserRouter, Routes, Route } from "react-router-dom"

//Pagine:
import DefaultLayout from "./layouts/DefaultLayout"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import PostsPage from "./pages/PostsPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout}>
          <Route path="/" Component={HomePage} />
          <Route path="/about" Component={AboutPage} />
          <Route path="/posts" Component={PostsPage} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App