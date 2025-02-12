import Main from "../features/main/Main";
import ServicesPage from "../features/services";

export const publicRoutes = [
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/serviços",
    element: <ServicesPage />,
  },
];
