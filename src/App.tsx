/*
 * @Description:
 * @Author: qingZhiKing
 * @Date: 2023-05-24 10:42:19
 * @LastEditTime: 2023-06-15 15:24:34
 * @LastEditors: qingZhiKing
 */
import "./App.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import routes from "./route/index.ts";
function App() {
  return (
    <Router>
      <Routes>
        {routes.map((item, key) => {
          return (
            <Route key={key} path={item.path} element={<item.component />} />
          );
        })}
      </Routes>
    </Router>
  );
}

export default App;
