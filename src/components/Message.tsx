/*
 * @Description:
 * @Author: qingZhiKing
 * @Date: 2023-05-25 16:35:30
 * @LastEditTime: 2023-06-13 11:47:39
 * @LastEditors: qingZhiKing
 */
import { useState, useRef } from "react";

function Message() {
  const [name, setName] = useState("龙");
  const domRef = useRef(null);
  const handleChangeName = () => {
    // return
    setName("饶骄阳");
    console.log(domRef.current);
  };
  return (
    <>
      <div ref={domRef}>{name}</div>
      <button onClick={handleChangeName}>修改名字</button>
    </>
  );
}

export default Message;
