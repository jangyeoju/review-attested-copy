import styled from "@emotion/styled";
import { Box, Button, IconButton } from "@mui/material";
import { createTheme, Divider, Icon, ThemeProvider } from "@mui/material";
import * as React from "react";

import theme from "../../../../app/style/theme";
import BasicModal from "../BasicModal";

import BasicBtn from "@/app/components/button/BasicBtn";
import BasicSBtn from "@/app/components/button/BasicSBtn";

export default function VerificationRejected({ handleClose }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <VerificationRejectedWrap>
        <h3>검증을 거절하시겠습니까?</h3>
        <ButtonWrap>
          <BasicBtn text={"취소"} handleClick={handleClose} />
          <Button color="error" variant="contained" onClick={handleClickOpen}>
            거절
          </Button>
          <BasicModal
            handleClose={handleClose}
            open={open}
            title={"검증 거절"}
            content={"알림"}
            text={"검증을 거절하시겠습니까?"}
          />
        </ButtonWrap>
      </VerificationRejectedWrap>
    </>
  );
}

const VerificationRejectedWrap = styled(Box)`
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
    width: 49%;
    box-shadow: none;
    font-size: 1.6rem;
    color: #fff;
    border-radius: 4px;
    padding: 1.5rem 2rem;
  }
  button:last-of-type {
    background-color: #ff8484;
  }
`;
