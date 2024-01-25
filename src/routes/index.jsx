import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../views/Home";
import Detail from "../views/Detail";
import Profile from "../views/Profile";
import Error404 from "../views/Error404";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error404 />,
  },
  {
    path: "/detail/:eventId",
    element: <Detail />,
  },
  {
    path: "/profile",
    element: <Profile />,
    children: [
      {
        path: "my-info",
        element: <div>My Info</div>,
      },
      {
        path: "liked-events",
        element: <div>Liked Events</div>,
      },
    ],
  },
]);

export default function MyRoutes() {
  return <RouterProvider router={router} />;
}
