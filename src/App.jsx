import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Register from "./pages/register/Register";
import UserInfo from "./pages/userInfo/UserInfo";
import Home from "./pages/home/Home";
import MainLayout from "./layout/MainLayout";
import Profile from "./pages/profile/Profile";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const isAuthenticated = false;

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
          element: (
            <ProtectedRoute isProtected={true}>
              <Home />
            </ProtectedRoute>
          ),
        },
        {
          path: "/profile",
          element: (
            <ProtectedRoute isProtected={true}>
              <Profile />
            </ProtectedRoute>
          ),
        },
        {
          path: "/dashboard",
          element: (
            <ProtectedRoute isProtected={true}>
              <Home />
            </ProtectedRoute>
          ),
        },
        {
          path: "/setting",
          element: (
            <ProtectedRoute isProtected={true}>
              <Home />
            </ProtectedRoute>
          ),
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
