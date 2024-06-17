"use client";

import { ThemeProvider, createTheme } from "@mui/material";

export default function GlobalThemeProvider({ children }) {
  const theme = createTheme({
    typography: {
      fontFamily: "Pretendard",
    },
    palette: {
      primary: {
        main: "#28E67C",
      },
      secondary: {
        main: "#003BD4",
      },
      error: {
        main: "#FF8484",
      },
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
