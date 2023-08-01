/*
 * @Description:
 * @Author: qingZhiKing
 * @Date: 2023-05-24 10:42:19
 * @LastEditTime: 2023-08-01 11:56:40
 * @LastEditors: qingZhiKing
 */
import { Route, Routes } from "react-router-dom";
import LayoutHTML from "./pages/layout/layout";
import NotFound from "./pages/NotFound/notFound";
import "./App.css";
function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<LayoutHTML />}></Route>
        <Route path="/404" element={<NotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
