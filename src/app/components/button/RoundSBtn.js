"use client";

import styled from "@emotion/styled";
import { Button } from "@mui/material";
import * as React from "react";

export default function RoundSBtn({ text }) {
  return <RSBtn variant="outlined">{text}</RSBtn>;
}

const RSBtn = styled(Button)`
  font-size: 1.6rem;
  border-radius: 100px;
  padding: 0.3rem 2rem;
  box-shadow: none;
`;
