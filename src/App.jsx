import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Register from "./pages/register/Register";


function App() {
  
const router = createBrowserRouter([
  {
    path: "/",
    element: <Register />,
  },
]);
  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App