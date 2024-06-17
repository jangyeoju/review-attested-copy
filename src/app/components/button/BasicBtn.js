"use client";

import styled from "@emotion/styled";
import { Button } from "@mui/material";
import * as React from "react";

export default function BasicBtn({ text, state, handleClick, color, href }) {
  return (
    <>
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
