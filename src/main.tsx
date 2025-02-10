import { BrowserRouter as Router } from "react-router-dom";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AOS from "aos";
import App from "./App.tsx";
import "aos/dist/aos.css";
import "./index.css";

AOS.init();
createRoot(document.getElementById("root")!).render(
  <Router>
    <StrictMode>
      <App />
    </StrictMode>
    ,
  </Router>
);
