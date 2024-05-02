import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AuthContextProvider } from "./context/AuthContext.jsx";
import { UtilesContextProvider } from "./context/UtilesContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UtilesContextProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </UtilesContextProvider>
  </React.StrictMode>
);
