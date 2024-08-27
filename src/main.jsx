import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ContextProvider } from "./context";
import { initialState, reducer } from "./context/reducer";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextProvider initialState={initialState} reducer={reducer}>
        <App />
      </ContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
