import * as React from "react";
import {
  Box,
  Button,
  IconButton,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import styled from "@emotion/styled";
import theme from "../../../app/style/theme";

export default function BasicBtn({ text, state, handleClick, color, href }) {
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
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        {state == "disabled" ? (
          <BasicBtnBox
            variant="contained"
            disabled
            onClick={handleClick}
            color={color}
            href={href}
          >
            {text}
          </BasicBtnBox>
        ) : (
          <BasicBtnBox
            variant="contained"
            onClick={handleClick}
            color={color}
            href={href}
          >
            {text}
          </BasicBtnBox>
        )}
      </ThemeProvider>
    </>
  );
}

const BasicBtnBox = styled(Button)`
  box-shadow: none;
  font-size: 1.6rem;
  color: #fff;
  border-radius: 4px;
  padding: 1.5rem 2rem;
  width: 100%;
`;
