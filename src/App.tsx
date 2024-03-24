import { BrowserRouter as Router } from "react-router-dom";
import { AppRoutes } from "./routes";
import { ContextProvider } from "./contexts/GlobalContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <>
      <Analytics />
      <Router>
        <ToastContainer />
        <ContextProvider>
          <AppRoutes />
        </ContextProvider>
      </Router>
    </>
  );
}

export default App;
