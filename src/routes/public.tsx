import Register from "../features/Register/Register";
import Main from "../features/main/Main";

export const publicRoutes = [
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/services",
    element: <Register />,
  },
];
