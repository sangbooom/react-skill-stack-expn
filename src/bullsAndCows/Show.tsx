/** @jsx jsx */
import React from "react";
import { jsx, css } from "@emotion/react";

type Information = { try: string; record: string };
interface ShowProps {
  results: Information;
}

const li = css({
  listStyle: "none",
  "& > div": {
    fontSize: 20,
  },
});

const Show: React.FC<ShowProps> = ({ results }) => {
  return (
    <li css={li}>
      <div>{results.try}</div>
      <div>{results.record}</div>
    </li>
  );
};

export default React.memo(Show);
