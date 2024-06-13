import * as React from "react";
import { Box, Button, IconButton } from "@mui/material";
import { createTheme, Divider, Icon, ThemeProvider } from "@mui/material";
import styled from "@emotion/styled";
import theme from "../../../style/theme";
import BasicBtn from "../../button/BasicBtn";

export default function ApplySuccess({ handleClose }) {
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
        <ApplySuccessWrap>
          <h3>공인중개사 검증신청이 완료되었습니다.</h3>
          <div className="search-result">
            <h2>
              사무소 : <span>홍길동 사무소 (02-333-4444)</span>
            </h2>
            <h2>
              공인중개사 : <span>홍길동 </span>{" "}
            </h2>
            <h2>
              주소 : <span>서울시 강남구 논현동222</span>
            </h2>
          </div>
          <p>진행내역 후기부등본 마이페이지에서 확인 하실 수 있습니다.</p>
          <ButtonWrap>
            <BasicBtn text={"확인"} handleClick={handleClose} />
          </ButtonWrap>
        </ApplySuccessWrap>
      </ThemeProvider>
    </>
  );
}

const ApplySuccessWrap = styled(Box)`
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
    line-height: 15%;
    margin-top: 2rem;
  }
  .search-result {
    padding: 2rem 0;
    border-top: 1px solid #d9d9d9;
    border-bottom: 1px solid #d9d9d9;
    h2 {
      font-size: 2rem;
      color: #0e301d;
      line-height: 150%;
    }
    span {
      font-size: 2rem;
      color: #0e301d;
      font-weight: 400;
      margin-left: 0.5rem;
    }
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
