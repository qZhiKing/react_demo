/*
 * @Description:  content页面
 * @Author: qingZhiKing
 * @Date: 2023-06-15 14:27:18
 * @LastEditTime: 2024-03-29 09:50:26
 * @LastEditors: qingZhiKing
 */
import { useState, useRef, useEffect } from "react";
export default function Content() {
  const [list, setList] = useState([]);
  const refDIV = useRef(null);
  useEffect(() => {
    console.log(refDIV.current);
  });
  return (
    <>
      <div ref={refDIV}>这是内容页面</div>
    </>
  );
}
