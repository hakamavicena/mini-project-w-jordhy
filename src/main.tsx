import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import GetToKnow from "./get-to-know.tsx";
import Reasoning from "./reasoning.tsx";
import Activity from "./activity.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <GetToKnow />
    <Reasoning />
    <Activity />
  </StrictMode>
);
