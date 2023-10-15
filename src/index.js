import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#9dd5f9",
      light: "#e4f4fb",
      dark: "#4f99cb",
      deep: "#2e5684",
    },
    secondary: {
      main: "#e29875",
      light: "#f5e4e0",
      dark: "#cd5610",
      deep: "#ad2401",
    },
    markers: {
      social: "#69cf91",
      university: "#7769cf",
      news: "#f85451",
      contrastText: "#ffffff",
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
