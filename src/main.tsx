import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import MUIThemeProvider from "./MUIThemeProvider.tsx";
import { SpeedInsights } from "@vercel/speed-insights/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MUIThemeProvider>
      <SpeedInsights />
      <App />
    </MUIThemeProvider>
  </React.StrictMode>
);
