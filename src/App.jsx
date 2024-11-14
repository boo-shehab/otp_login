import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Register from "./pages/register/Register";
import UserInfo from "./pages/userInfo/UserInfo";
import Home from "./pages/Home/Home.jsx";
import MainLayout from "./layout/MainLayout";
import Profile from "./pages/profile/Profile";


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
        path: "/profile",
        element: <Profile />
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
