import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import styled, { ThemeProvider } from "styled-components";

const root = ReactDOM.createRoot(document.getElementById("root"));

const darkTheme = {
  textColor: "Whitesmoke",
  backgroundColor: "#111",
};

const lightTheme = {
  textColor: "#111",
  backgroundColor: "Whitesmoke",
};

root.render(
  <ThemeProvider theme={darkTheme}>
    <App />
  </ThemeProvider>
);
