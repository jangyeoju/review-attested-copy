import styled from "@emotion/styled";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import CloseIcon from "@mui/icons-material/Close";
import { createTheme, Divider, Icon, ThemeProvider } from "@mui/material";
import { Box, Button, IconButton } from "@mui/material";
import * as React from "react";

import theme from "../../../app/style/theme";
export default function MobileNav({ text, type }) {
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
        <MobileNavWrap>
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          <h1>{text}</h1>
          <IconButton>{type == "delete" ? <CloseIcon /> : <></>}</IconButton>
        </MobileNavWrap>
      </ThemeProvider>
    </>
  );
}

const MobileNavWrap = styled(Box)`
  background-color: #fff;
  padding: 1.2rem 2rem;
  position: fixed;
  top: 0;
  width: 64rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #d9d9d9;
  z-index: 99;
  button {
    width: 4rem;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      width: 3rem;
      height: 3rem;
    }
  }
  h1 {
    font-size: 2rem;
    color: #0e301d;
    font-weight: 400;
  }
  @media ${() => theme.device.mobile} {
    width: 100%;
    padding: 1rem 2rem;
    h1 {
      font-size: 1.8rem;
    }
    button {
      svg {
        width: 2.4rem;
        height: 2.4rem;
      }
    }
  }
`;
