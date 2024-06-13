import styled from "@emotion/styled";
import { createTheme, Divider, Icon, ThemeProvider } from "@mui/material";
import { Box, Button, IconButton } from "@mui/material";
import * as React from "react";

import theme from "../../style/theme";

export default function RedSBtn({ text, handleClick }) {
  const theme = createTheme({
    typography: {
      fontFamily: "Pretendard",
    },
    palette: {
      primary: {
        main: "#FF8484",
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <RedSButton variant="outlined" onClick={handleClick}>
          {text}
        </RedSButton>
      </ThemeProvider>
    </>
  );
}

const RedSButton = styled(Button)`
  font-size: 1.4rem;
  border-radius: 100px;
  padding: 0.5rem 1.5rem;
  box-shadow: none;
  @media ${() => theme.device.mobile} {
    font-size: 1.2rem;
    padding: 0.3rem 1.5rem;
    min-width: auto !important;
  }
`;
