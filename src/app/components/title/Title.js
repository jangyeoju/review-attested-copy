import styled from "@emotion/styled";
import { Box, Button, IconButton } from "@mui/material";
import { createTheme, Divider, Icon, ThemeProvider } from "@mui/material";
import * as React from "react";

import theme from "../../../app/style/theme";

export default function Title({ text }) {
  const theme = createTheme({
    typography: {
      fontFamily: "Pretendard",
    },
    palette: {
      primary: {
        main: "#28E67C",
      },
    },
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <TitleWrap>
          <h2>{text}</h2>
        </TitleWrap>
      </ThemeProvider>
    </>
  );
}

const TitleWrap = styled(Box)`
  padding-bottom: 2rem;
  width: 100%;
  border-bottom: 2px solid #00d45e;
  margin: 14rem 0 3rem;
  h2 {
    font-size: 2rem;
    color: #0e301d;
    font-weight: bold;
  }
  @media ${() => theme.device.mobile} {
    margin-top: 10rem;
  }
`;
