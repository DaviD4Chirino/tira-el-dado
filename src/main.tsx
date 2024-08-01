import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import MUIThemeProvider from "./MUIThemeProvider.tsx";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { HistoryProvider } from "./contexts/History.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MUIThemeProvider>
      <SpeedInsights />
      <HistoryProvider>
        <App />
      </HistoryProvider>
    </MUIThemeProvider>
  </React.StrictMode>
);
