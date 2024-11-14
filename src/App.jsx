import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Register from "./pages/register/Register";
import UserInfo from "./pages/userInfo/UserInfo";
import Home from "./pages/Home/Home";
import Header from "./components/header/Header";
import MainLayout from "./layout/MainLayout";


function App() {
  
const router = createBrowserRouter([
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/user-info",
    element: <UserInfo />,
  },
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/dashboard",
        element: <Home />,
      },
      {
        path: "/setting",
        element: <Home />,
      },
    ],
  },
]);
  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
