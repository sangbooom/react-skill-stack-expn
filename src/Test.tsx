import React from "react";

interface Person {
  firstName: string;
  lastName: string;
}

interface Props {
  text: string;
  setText: (text: string) => void;
  ok?: boolean;
  i?: number;
  onChangeH?: () => void;
  person?: Person;
}

const Test: React.FC<Props> = ({ text, setText }) => {
  const asd = (): void => {
    setText("우하하");
  };
  return <div onClick={asd}>{text}</div>;
};

export default Test;
