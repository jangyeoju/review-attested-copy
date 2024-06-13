import * as React from "react";
import { Box, Button, IconButton } from "@mui/material";
import { createTheme, Divider, Icon, ThemeProvider } from "@mui/material";
import styled from "@emotion/styled";
import theme from "../../../../app/style/theme";
import AttestedCopy from "../../attestedCopy/attestedCopy";
import BasicBtn from "../../button/BasicBtn";

export default function PaymentSuccess({ handleClose }) {
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
        <PaymentSuccessWrap>
          <h3>결제가 완료되었습니다.</h3>
          <div className="box-shadow-none">
            <AttestedCopy
              tag1={true}
              tag2={true}
              tag3={true}
              price={"3,300원"}
            />
          </div>
          <p>결제 후 7일간 조회할 수 있습니다.</p>
          <div className="bottom-btn">
            <BasicBtn text={"확인"} handleClick={handleClose} />
          </div>
        </PaymentSuccessWrap>
      </ThemeProvider>
    </>
  );
}

const PaymentSuccessWrap = styled(Box)`
  h3 {
    font-size: 1.6rem;
    color: #0e301d;
    text-align: center;
    font-weight: 400;
    margin-bottom: 2rem;
  }
  p {
    font-size: 1.4rem;
    color: #888888;
    line-height: 150%;
    margin-top: 1rem;
  }
  .box-shadow-none > div {
    box-shadow: none;
    border: 1px solid #d9d9d9;
  }
  .bottom-btn {
    width: 100%;
    margin-top: 4rem;
    button {
      width: 100%;
    }
  }
`;
