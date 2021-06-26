import { useState } from "react";
import useInterval from "../hooks/useInterval";
// moment.js의 fromNow()를 쓰는것과 직접 만들어 쓰는 것과 성능차이가 있을까?

const GetTimeFromNow = (updatedAt: number) => {
  const [dateTime, setDateTime] = useState(new Date());

  //   useEffect(() => {
  //     const id = setInterval(() => setDateTime(new Date()), 60000);
  //     return () => {
  //       clearInterval(id);
  //     };
  //   }, []);

  // setInterval 사용 시의 문제점 : https://velog.io/@jakeseo_me/%EB%B2%88%EC%97%AD-%EB%A6%AC%EC%95%A1%ED%8A%B8-%ED%9B%85%EC%8A%A4-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%EC%97%90%EC%84%9C-setInterval-%EC%82%AC%EC%9A%A9-%EC%8B%9C%EC%9D%98-%EB%AC%B8%EC%A0%9C%EC%A0%90

  useInterval(() => {
    setDateTime(new Date());
  }, 1000);

  const timeAgo = Math.floor((dateTime.getTime() - updatedAt) / 1000 / 60);
  console.log(updatedAt);

  if (timeAgo / 60 >= 24 * 30 * 12) {
    return Math.floor(timeAgo / 60 / 24 / 30 / 12) + "년전";
  } else if (timeAgo / 60 >= 24 * 30) {
    return Math.floor(timeAgo / 60 / 24 / 30) + "달전";
  } else if (timeAgo / 60 >= 24) {
    return Math.floor(timeAgo / 60 / 24) + "일전";
  } else if (timeAgo / 60 >= 1) {
    return Math.floor(timeAgo / 60) + "시간전";
  } else if (timeAgo >= 1) {
    return timeAgo + "분전";
  } else {
    return "방금전";
  }
};

export default GetTimeFromNow;
