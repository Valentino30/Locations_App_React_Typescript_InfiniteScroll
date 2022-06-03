import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import { LocationProvider } from "./hooks/location";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <LocationProvider>
    <App />
  </LocationProvider>
);
