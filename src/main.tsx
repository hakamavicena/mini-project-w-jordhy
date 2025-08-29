import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import GetToKnow from "./GetToKnow.tsx";
import Reasoning from "./reasoning.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <GetToKnow />
    <Reasoning />
  </StrictMode>
);
