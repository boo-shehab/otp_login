import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Register from "./pages/register/Register";
import UserInfo from "./pages/userInfo/UserInfo";
import Home from "./pages/Home/Home";


function App() {
  
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Register",
    element: <Register />,
  },
  {
    path: "/user-info",
    element: <UserInfo />,
  },
]);
  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
