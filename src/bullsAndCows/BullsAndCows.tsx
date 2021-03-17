/** @jsx jsx */
import React, { useState, useEffect, useCallback } from "react";
import { jsx, css } from "@emotion/react";
import Show from "./Show";

type Information = { try: string; record: string };

function shuffle() {
  let j, x, index;
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (index = arr.length - 1; index > 0; index--) {
    j = Math.floor(Math.random() * (index + 1));
    x = arr[index];
    arr[index] = arr[j];
    arr[j] = x;
  }
  return arr.splice(0, 4);
}

function BullsAndCows() {
  const [text, setText] = useState("");
  const [randomStr, setRandomStr] = useState<Array<number>>([]);
  const [result, setResult] = useState<Array<Information>>([]);

  useEffect(() => {
    randomGenStr();
  }, []);

  const randomGenStr = useCallback(() => {
    setRandomStr(shuffle());
  }, []);

  const onChangeInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setText(e.target.value);
    },
    []
  );

  const onSubmitHandler = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      let ball = 0;
      let strike = 0;
      let targetNumber = randomStr.join("");

      if (text === targetNumber) {
        alert("홈런!!");
        randomGenStr();
        setResult([]);
        setText("");
        return;
      }
      if (result.length >= 9) {
        alert(`답은 ${targetNumber}입니다.`);
        randomGenStr();
        setResult([]);
        setText("");
        return;
      } else {
        for (let i = 0; i < 4; i++) {
          if (text.includes(targetNumber[i])) {
            ball++;
          }
          if (text[i] === targetNumber[i]) {
            strike++;
          }
        }
      }
      setResult((prev) => [
        ...prev,
        { try: text, record: `${strike}스트라이크, ${ball}볼` },
      ]);
      setText("");
    },
    [randomStr, text, result]
  );

  const container = css({
    height: "100vh",
    margin: "0 auto",
    maxWidth: 480,
    "& > h1": { marginTop: 20, textAlign: "center" },
  });

  const form__input = css({
    width: "100%",
    height: 40,
    fontSize: 24,
  });

  return (
    <div css={container}>
      <h1>
        숫자야구{" "}
        <span role="img" aria-label="baseball">
          ⚾
        </span>
      </h1>
      <form onSubmit={onSubmitHandler}>
        <input
          type="number"
          onChange={onChangeInput}
          value={text}
          css={form__input}
        />
      </form>
      <h2 css={{ margin: "10px 0" }}>남은 기회 : {10 - result.length}</h2>
      <ul>
        {result.length >= 1 &&
          result.map((results: Information, index: number) => (
            <Show results={results} key={index} />
            // <li key={index}>
            //   <div>{results.try}</div>
            //   <div>{results.record}</div>
            // </li>
          ))}
      </ul>
    </div>
  );
}

export default (BullsAndCows);
