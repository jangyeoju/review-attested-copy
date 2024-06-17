"use client";

import styled from "@emotion/styled";
import { Box } from "@mui/material";
import * as React from "react";

export default function WriteTitle({ num, text }) {
  return (
    <WriteTitleWrap>
      <div className="num-box">{num}</div>
      <h2>{text}</h2>
    </WriteTitleWrap>
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
