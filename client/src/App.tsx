import './App.css'
import Landing from './pages/Landing/Landing'
import Queja from './pages/Queja/Queja'
import Sugerencia from './pages/Sugerencia/Sugerencia'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/queja",
    element: <Queja />,
  },
  {
    path: "/sugerencia",
    element: <Sugerencia />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
