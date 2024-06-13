import * as React from "react";
import { Box, Button, IconButton } from "@mui/material";
import { createTheme, Divider, Icon, ThemeProvider } from "@mui/material";
import styled from "@emotion/styled";
import theme from "../../../app/style/theme";
export default function WriteTitle({ num, text }) {
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
        <WriteTitleWrap>
          <div className="num-box">{num}</div>
          <h2>{text}</h2>
        </WriteTitleWrap>
      </ThemeProvider>
    </>
  );
}

const WriteTitleWrap = styled(Box)`
  display: flex;
  align-items: center;
  background-color: #f2fff8;
  border-top: 2px solid #00d45e;
  padding: 1.4rem 2rem;
  .num-box {
    padding: 0.5rem 1rem;
    background-color: #00d45e;
    border-radius: 100px;
    color: #fff;
    font-size: 1.6rem;
    margin-right: 1rem;
  }
  h2 {
    font-size: 1.6rem;
    color: #0e301d;
    font-weight: 500;
  }
`;
