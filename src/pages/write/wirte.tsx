/*
 * @Description:
 * @Author: qingZhiKing
 * @Date: 2024-04-18 15:49:25
 * @LastEditTime: 2024-05-11 15:06:11
 * @LastEditors: qingZhiKing
 */
import { useState } from "react";
import gfm from "@bytemd/plugin-gfm";
import { Editor, Viewer } from "@bytemd/react";
import zhHans from "bytemd/lib/locales/zh_Hans.json";
import gemoji from "@bytemd/plugin-gemoji";
import highlight from "@bytemd/plugin-highlight-ssr";
import mediumZoom from "@bytemd/plugin-medium-zoom";
import "./write.less";
import "bytemd/dist/index.min.css";
import "highlight.js/styles/vs.css";

const plugins = [gfm(), gemoji(), highlight(), mediumZoom()];

const App = () => {
  const [value, setValue] = useState("");

  return (
    <div className="write">
      <Editor
        locale={zhHans}
        value={value}
        plugins={plugins}
        onChange={(v) => {
          setValue(v);
        }}
        // uploadImages={async (files) => {
        //   console.log(files);
        // }}
      />
    </div>
  );
};

export default App;
