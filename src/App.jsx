import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Register from "./pages/register/Register";
import UserInfo from "./pages/userInfo/UserInfo";


function App() {
  
const router = createBrowserRouter([
  {
    path: "/",
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
