import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ExperienceProvider } from "./context/ExperienceProvider";
import "./styles/index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ExperienceProvider>
      <App />
    </ExperienceProvider>
  </StrictMode>,
);
