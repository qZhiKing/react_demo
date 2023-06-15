/*
 * @Description:  HOME页面
 * @Author: qingZhiKing
 * @Date: 2023-06-15 14:27:11
 * @LastEditTime: 2023-06-15 15:30:16
 * @LastEditors: qingZhiKing
 */
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <>
      <div>this is Homepage</div>
      <Link to="/content">跳转一下</Link>
    </>
  );
}
