/*
 * @Description:
 * @Author: qingZhiKing
 * @Date: 2023-05-31 14:16:44
 * @LastEditTime: 2023-05-31 16:08:39
 * @LastEditors: qingZhiKing
 */
interface Props {
  time: string;
}
export default function Clock({ time }: Props) {
  return (
    <>
      <h1>{time}</h1>
      <input type="time" value={time} />
    </>
  );
}
