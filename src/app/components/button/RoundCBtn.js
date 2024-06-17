"use client";

import styled from "@emotion/styled";
import { Button } from "@mui/material";

export default function RoundCBtn({ text }) {
  return <RSBtn variant="contained">{text}</RSBtn>;
}

const RSBtn = styled(Button)`
  font-size: 1.6rem;
  border-radius: 100px;
  padding: 0.3rem 2rem;
  box-shadow: none;
  color: #fff;
`;
