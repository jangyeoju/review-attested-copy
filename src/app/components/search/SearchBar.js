"use client";

import styled from "@emotion/styled";
import { Box } from "@mui/material";
import * as React from "react";

import theme from "../../style/theme";
import RoundCBtn from "../button/RoundCBtn";

import SearchList from "@/app/components/search/SearchList";

export default function SearchBar({ showSearchHistory }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <SearchBarWrap onClick={handleClickOpen}>
        <input
          type="text"
          id="search"
          name="search"
          placeholder="주소나 장소를 검색하세요."
        ></input>
        <RoundCBtn text={"검색"} variant={"contained"} />
      </SearchBarWrap>
      {showSearchHistory && open ? (
        <>
          <SearchListWrap>
            <SearchList handleClose={handleClose} />
          </SearchListWrap>
        </>
      ) : (
        <></>
      )}
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

export const SearchListWrap = styled(Box)`
  width: 98rem;
  border-radius: 16px;
  box-shadow: 4px 12px 20px rgba(0, 0, 0, 0.08);
  background-color: #fff;
  position: absolute;
  top: 9rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  & > div {
    border-radius: 16px;
  }
  @media ${() => theme.device.tablet} {
    width: 100%;
    top: 7rem;
  }
`;
