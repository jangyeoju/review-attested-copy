import * as React from "react";
import { createTheme, Divider, Icon, ThemeProvider } from "@mui/material";
import { Box, Button, IconButton } from "@mui/material";
import styled from "@emotion/styled";
import theme from "../../style/theme";
import RoundCBtn from "../button/RoundCBtn";

export default function SearchBar({ type, open, handleClickOpen }) {
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
        <SearchBarWrap onClick={handleClickOpen}>
          <input
            type="text"
            id="search"
            name="search"
            placeholder="주소나 장소를 검색하세요."
          ></input>
          <RoundCBtn text={"검색"} variant={"contained"} />
        </SearchBarWrap>
      </ThemeProvider>
    </>
  );
}

const SearchBarWrap = styled(Box)`
  background-color: #fff;
  border-radius: 100px;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  box-shadow: 4px 12px 20px rgba(0, 0, 0, 0.08);
  input[type="text"] {
    border: none;
    font-size: 2rem;
    padding: 2rem;
    outline: none;
    width: 80%;
  }
  button {
    font-size: 2rem;
    padding: 1rem 3.5rem;
  }
  @media ${() => theme.device.mobile} {
    input[type="text"] {
      font-size: 1.6rem;
      padding: 1rem;
    }
    button {
      font-size: 1.6rem;
      padding: 0.5rem 3rem;
    }
  }
`;
