import "./App.css"
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom"
import { ThemeProvider } from "@mui/material"
import Root from "./pages/Root"
import Home from "./pages/Home/Home"
import { Theme } from "./utils/Theme"
import Contact from "./pages/Contact/Contact"

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Root />}>
        <Route index path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Route>,
    ),
  )

  return (
    <div className="App">
      <ThemeProvider theme={Theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </div>
  )
}

export default App
