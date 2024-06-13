import styled from "@emotion/styled";
import { createTheme, Divider, Icon, ThemeProvider } from "@mui/material";
import { Box, Button, IconButton } from "@mui/material";
import * as React from "react";

import theme from "../../style/theme";

export default function RoundSBtn({ text }) {
  const theme = createTheme({
    typography: {
      fontFamily: "Pretendard",
    },
    palette: {
      primary: {
        main: "#00D45E",
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <RSBtn variant="outlined">{text}</RSBtn>
      </ThemeProvider>
    </>
  );
}

const RSBtn = styled(Button)`
  font-size: 1.6rem;
  border-radius: 100px;
  padding: 0.3rem 2rem;
  box-shadow: none;
`;
