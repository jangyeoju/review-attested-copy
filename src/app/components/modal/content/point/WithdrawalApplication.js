import styled from "@emotion/styled";
import { Box, Button, IconButton } from "@mui/material";
import { createTheme, Divider, Icon, ThemeProvider } from "@mui/material";
import * as React from "react";

import theme from "../../../../style/theme";

import BasicBtn from "@/app/components/button/BasicBtn";

export default function WithdrawalApplication({ handleClose }) {
  const theme = createTheme({
    typography: {
      fontFamily: "Pretendard",
    },
    palette: {
      primary: {
        main: "#28E67C",
      },
    },
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <CertificationWrap>
          <h3>
            인출신청이 완료되었습니다. <br />
            인출신청후 인출완료까지는 영업일 기준 5일 소요됩니다.
          </h3>
        </CertificationWrap>
        <ButtonWrap>
          <BasicBtn text={"확인"} handleClick={handleClose} />
        </ButtonWrap>
      </ThemeProvider>
    </>
  );
}

const CertificationWrap = styled(Box)`
  padding: 3rem 0 0 0;
  h3 {
    font-size: 1.6rem;
    color: #0e301d;
    text-align: center;
    font-weight: 500;
  }
`;

const ButtonWrap = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 4rem;
  button {
    width: 100%;
  }
`;
