import Register from "../features/Register/Register";
import Main from "../features/main/Main";

export const publicRoutes = [
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/cadastro",
    element: <Register />,
  },
  // {
  //   path: "/live",
  //   element: <Register />,
  // },
  // {
  //   path: "/cadastro",
  //   element: <Register />,
  // },

];
