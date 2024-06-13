import * as React from "react";
import {
  Box,
  Button,
  IconButton,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import styled from "@emotion/styled";
import theme from "../../style/theme";

export default function BasicSBtn({ text, state, handleClick, color }) {
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
        {state == "disabled" ? (
          <BasicBtnBox
            variant="outlined"
            disabled
            onClick={handleClick}
            color={color}
          >
            {text}
          </BasicBtnBox>
        ) : (
          <BasicBtnBox variant="outlined" onClick={handleClick} color={color}>
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
  color: #00d45e;
`;
