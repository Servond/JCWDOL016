import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Auth } from "./context/auth.tsx";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Auth>
      <App />
    </Auth>
  </StrictMode>
);
