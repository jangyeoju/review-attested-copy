"use client";

import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import * as React from "react";

export default function SelectBasic({ type, state, placeholder }) {
  const [select, setSelect] = React.useState(10);
  const handleChange = (event) => {
    setSelect(event.target.value);
  };

  const [select2, setSelect2] = React.useState(10);

  const handleChange2 = (event) => {
    setSelect2(event.target.value);
  };

  const [select3, setSelect3] = React.useState(10);

  const handleChange3 = (event) => {
    setSelect3(event.target.value);
  };

  return (
    <SelectWrap>
      <StyledFormControl fullWidth>
        {type == "year" && state == "" ? (
          <StyledSelect
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={select}
            onChange={handleChange}
            placeholder={placeholder}
          >
            <StyledMenuItem value={10}>1990년</StyledMenuItem>
            <StyledMenuItem value={20}>1989년</StyledMenuItem>
            <StyledMenuItem value={30}>1988년</StyledMenuItem>
          </StyledSelect>
        ) : type == "year" && state == "error" ? (
          <StyledSelect
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={select}
            onChange={handleChange}
            error
          >
            <StyledMenuItem value={10}>1990년</StyledMenuItem>
            <StyledMenuItem value={20}>1989년</StyledMenuItem>
            <StyledMenuItem value={30}>1988년</StyledMenuItem>
          </StyledSelect>
        ) : type == "year" && state == "disabled" ? (
          <StyledSelect
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={select}
            onChange={handleChange}
            disabled
          >
            <StyledMenuItem value={10}>1990년</StyledMenuItem>
            <StyledMenuItem value={20}>1989년</StyledMenuItem>
            <StyledMenuItem value={30}>1988년</StyledMenuItem>
          </StyledSelect>
        ) : (
          <></>
        )}
        {type == "month" && state == "" ? (
          <StyledSelect
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={select2}
            onChange={handleChange2}
          >
            <StyledMenuItem value={10}>1월</StyledMenuItem>
            <StyledMenuItem value={20}>2월</StyledMenuItem>
            <StyledMenuItem value={30}>3월</StyledMenuItem>
          </StyledSelect>
        ) : type == "month" && state == "error" ? (
          <StyledSelect
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={select}
            onChange={handleChange}
            error
          >
            <StyledMenuItem value={10}>1월</StyledMenuItem>
            <StyledMenuItem value={20}>2월</StyledMenuItem>
            <StyledMenuItem value={30}>3월</StyledMenuItem>
          </StyledSelect>
        ) : type == "month" && state == "disabled" ? (
          <StyledSelect
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={select}
            onChange={handleChange}
            disabled
          >
            <StyledMenuItem value={10}>1월</StyledMenuItem>
            <StyledMenuItem value={20}>2월</StyledMenuItem>
            <StyledMenuItem value={30}>3월</StyledMenuItem>
          </StyledSelect>
        ) : (
          <></>
        )}
        {type == "day" && state == "" ? (
          <StyledSelect
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={select3}
            onChange={handleChange3}
          >
            <StyledMenuItem value={10}>20일</StyledMenuItem>
            <StyledMenuItem value={20}>19일</StyledMenuItem>
            <StyledMenuItem value={30}>18일</StyledMenuItem>
          </StyledSelect>
        ) : type == "day" && state == "error" ? (
          <StyledSelect
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={select}
            onChange={handleChange}
            error
          >
            <StyledMenuItem value={10}>20일</StyledMenuItem>
            <StyledMenuItem value={20}>19일</StyledMenuItem>
            <StyledMenuItem value={30}>18일</StyledMenuItem>
          </StyledSelect>
        ) : type == "day" && state == "disabled" ? (
          <StyledSelect
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={select}
            onChange={handleChange}
            disabled
          >
            <StyledMenuItem value={10}>20일</StyledMenuItem>
            <StyledMenuItem value={20}>19일</StyledMenuItem>
            <StyledMenuItem value={30}>18일</StyledMenuItem>
          </StyledSelect>
        ) : (
          <></>
        )}
      </StyledFormControl>
    </SelectWrap>
  );
}

const SelectWrap = styled(Box)`
  width: 100%;
`;

const StyledFormControl = styled(FormControl)`
  .Mui-error {
    margin: 0;
    border-color: red !important;
  }
`;

const StyledSelect = styled(Select)`
  font-size: 1.6rem;
`;

const StyledMenuItem = styled(MenuItem)`
  font-size: 1.6rem;
`;
