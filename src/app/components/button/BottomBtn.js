"use client";

import styled from "@emotion/styled";
import { Box, Button } from "@mui/material";
import * as React from "react";

import theme from "../../../app/style/theme";

export default function BottomBtn({ text, type, handle }) {
  return (
    <BottomBtnWrap>
      {type == "disabled" ? (
        <BottomButton variant="contained" disabled>
          {text}
        </BottomButton>
      ) : (
        <BottomButton variant="contained" onClick={handle}>
          {text}
        </BottomButton>
      )}
    </BottomBtnWrap>
  );
}

const BottomBtnWrap = styled(Box)`
  position: fixed;
  bottom: 0;
  background-color: #fff;
  padding: 2rem;
  width: 64rem;
  @media ${() => theme.device.mobile} {
    width: 100%;
    position: static;
  }
`;

const BottomButton = styled(Button)`
  width: 100%;
  padding: 1rem 2rem;
  font-size: 1.8rem;
  outline: none;
  box-shadow: none;
  color: #fff;
`;
