import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import GetToKnow from "./GetToKnow.tsx";
import Reasoning from "./reasoning.tsx";
import Activities from "./Activities.tsx";
import Footer from "./Footer.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <GetToKnow />
    <Reasoning />
    <Activities />
    <Footer />
  </StrictMode>
);
