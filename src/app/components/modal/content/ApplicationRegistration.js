import styled from "@emotion/styled";
import { Box, Button, IconButton } from "@mui/material";
import { createTheme, Divider, Icon, ThemeProvider } from "@mui/material";
import * as React from "react";

import theme from "../../../../app/style/theme";

import BasicBtn from "@/app/components/button/BasicBtn";
import BasicSBtn from "@/app/components/button/BasicSBtn";

export default function ApplicationRegistration({ type, handleClose }) {
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
        <ApplicationBox>
          <div className="text-box">
            {type == "미인증" ? (
              <h3 className="error">실거주 인증서류 등록하지 않으셨습니다.</h3>
            ) : (
              <>
                <h3>서울시 강남구 논현동 100, 101동 101호</h3>
                <p>후기 판매가 무료</p>
              </>
            )}
          </div>
          {type == "미인증" ? (
            <h4>
              실거주 미인증 후기는 등록 후에도 판매가는 무료로 제공됩니다.
              <br />
              <strong>등록신청하시겠습니까?</strong>
            </h4>
          ) : (
            <h4>
              감사합니다.
              <br />
              후기부등본 등록 신청이 완료되었습니다.
              <br />
              운영자 검토 후 (5 영업일 이내) 후기부등본 등록여부가 결정됩니다.
            </h4>
          )}
          {type == "미인증" ? (
            <ButtonWrap>
              <BasicSBtn text={"취소"} handleClick={handleClose} />
              <BasicBtn text={"등록신청"} handleClick={handleClose} />
            </ButtonWrap>
          ) : (
            <ButtonWrap2>
              <BasicBtn text={"확인"} handleClick={handleClose} />
            </ButtonWrap2>
          )}
        </ApplicationBox>
      </ThemeProvider>
    </>
  );
}

const ApplicationBox = styled(Box)`
  .text-box {
    padding: 3rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid #d9d9d9;
    border-radius: 8px;
    margin-bottom: 2rem;
    h3 {
      font-size: 1.6rem;
      line-height: 150%;
      color: #0e301d;
      text-align: center;
      font-weight: 400;
      strong {
        font-size: 1.6rem;
      }
    }
    .error {
      color: red;
    }
  }
  h4 {
    font-size: 1.6rem;
    text-align: center;
    line-height: 150%;
    color: #0e301d;
    font-weight: 500;
    strong {
      font-size: 1.6rem;
    }
  }
`;

const ButtonWrap = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 4rem;
  button {
    width: 49%;
  }
`;

const ButtonWrap2 = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 4rem;
  button {
    width: 100%;
  }
`;
