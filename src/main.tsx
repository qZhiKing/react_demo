/*
 * @Description:
 * @Author: qingZhiKing
 * @Date: 2023-05-24 10:42:19
 * @LastEditTime: 2023-08-01 11:40:38
 * @LastEditors: qingZhiKing
 */
import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter as Router } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
