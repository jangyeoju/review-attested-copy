"use client";

import styled from "@emotion/styled";
import { Button } from "@mui/material";
import * as React from "react";

export default function BasicSBtn({ text, state, handleClick, color }) {
  return (
    <>
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
