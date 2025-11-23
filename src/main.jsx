// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import BackgroundBoxesDemo from "./BackgroundBoxesDemo.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/BackgroundBoxesDemo" element={<BackgroundBoxesDemo />} />
        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
