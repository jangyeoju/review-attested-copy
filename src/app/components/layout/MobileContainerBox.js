import styled from "@emotion/styled";
import { Box } from "@mui/material";
import * as React from "react";

import theme from "../../style/theme";
export default function MobileContainerBox({ children }) {
  return (
    <>
      <MobileContainer>{children}</MobileContainer>
    </>
  );
}

const MobileContainer = styled(Box)`
  padding: 2rem 2rem 0 2rem;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  @media ${() => theme.device.mobile} {
    width: 100%;
    /* height: auto; */
  }
`;
