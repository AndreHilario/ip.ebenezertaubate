import { BrowserRouter as Router } from "react-router-dom";
import { AppRoutes } from "./routes";
import { ContextProvider } from "./contexts/GlobalContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { MuiThemeProvider } from "./providers/MuiThemeProvider";

function App() {
  return (
    <MuiThemeProvider>
      <Analytics />
      <SpeedInsights />
      <Router>
        <ToastContainer />
        <ContextProvider>
          <AppRoutes />
        </ContextProvider>
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
