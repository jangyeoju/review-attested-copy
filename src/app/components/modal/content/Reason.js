import * as React from "react";
import { Box, Button, IconButton } from "@mui/material";
import { createTheme, Divider, Icon, ThemeProvider } from "@mui/material";
import styled from "@emotion/styled";
import theme from "../../../../app/style/theme";
import BasicBtn from "@/app/components/button/BasicBtn";

export default function Reason({ handleClose }) {
  return (
    <>
      <ReasonWrap>
        <h3>
          반려사유 블라블라
          <br />
          반려사유 블라블라 반려사유 블라블라
        </h3>
        <ButtonWrap>
          <BasicBtn text={"확인"} handleClick={handleClose} />
        </ButtonWrap>
      </ReasonWrap>
    </>
  );
}

const ReasonWrap = styled(Box)`
  padding: 5rem 0 0 0;
  h3 {
    font-size: 1.6rem;
    line-height: 150%;
    text-align: center;
    color: #0e301d;
    font-weight: 400;
  }
`;

const ButtonWrap = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 5rem;
  button {
    width: 100%;
  }
`;
