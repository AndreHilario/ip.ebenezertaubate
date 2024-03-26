import { BrowserRouter as Router } from "react-router-dom";
import { AppRoutes } from "./routes";
import { ContextProvider } from "./contexts/GlobalContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react"

function App() {
  return (
    <>
      <Analytics />
      <SpeedInsights />
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
