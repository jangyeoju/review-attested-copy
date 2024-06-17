import styled from "@emotion/styled";
import { Box } from "@mui/material";
import * as React from "react";

import theme from "../../../app/style/theme";

export default function Title({ text }) {
  return (
    <TitleWrap>
      <h2>{text}</h2>
    </TitleWrap>
  );
}

const TitleWrap = styled(Box)`
  padding-bottom: 2rem;
  width: 100%;
  border-bottom: 2px solid #00d45e;
  margin: 14rem 0 3rem;
  h2 {
    font-size: 2rem;
    color: #0e301d;
    font-weight: bold;
  }
  @media ${() => theme.device.mobile} {
    margin-top: 10rem;
  }
`;
