/** @jsx jsx */
import React, { useState } from "react";
import Todo from "./todolist/Todo";
import "./App.css";
import { jsx, ThemeProvider } from "@emotion/react";
import BullsAndCows from "./bullsAndCows/BullsAndCows";

const themeLight = {
  text: "#000",
  inputText: "#000",
  inputBorder: "#000",
  inputBackgroundColor: "#fff",
  background: "#fff",
  buttonText: "000",
  buttonTextHover: "#fff",
  buttonBorder: "#000",
  buttonBg: "rgba(0, 0, 0, 0)",
  buttonBgHover: "rgba(0, 0, 0, 0.7)",
  nthBg: "#f2f2f2",
  headerMainTitleText: "#6200EE", 
  headerSubTitleText: "#018786",
  headerContentText: "B00020",
};

const themeDark = {
  text: "#fff",
  inputText: "#fff",
  inputBorder: "#fff",
  inputBackgroundColor: "#000",
  background: "#121212",
  buttonText: "fff",
  buttonTextHover: "#000",
  buttonBorder: "#fff",
  buttonBg: "rgba(48, 48, 47, 1)",
  buttonBgHover: "rgba(255, 255, 255, 1)",
  nthBg: "#30302f",
  headerMainTitleText: "#BB86FC",
  headerSubTitleText: "#03DAC6",
  headerContentText: "CF6679",
};

const App: React.FC = () => {
  const [isDark, setDark] = useState(false);

  return (
    <ThemeProvider theme={isDark ? themeDark : themeLight}>
      <Todo isDark={isDark} setDark={setDark} />
    </ThemeProvider>
    // <BullsAndCows />
  );
};

export default App;
