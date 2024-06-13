"use client";
import { Box, Button, IconButton } from "@mui/material";
import { createTheme, Divider, Icon, ThemeProvider } from "@mui/material";
import * as React from "react";
import "../../style/global.css";
import styled from "@emotion/styled";

import theme from "../../../app/style/theme";

import MobileBox from "@/app/components/layout/MobileBox";
import MobileContainerBox from "@/app/components/layout/MobileContainerBox";
import MobileNav from "@/app/components/nav/MobileNav";
export default function Login() {
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
        <MobileBox>
          <MobileNav text={"후기부등본"} />
          <MobileContainerBox>
            <LoginWrap>
              <div className="logo">
                <img src="/img/logo2.svg" />
              </div>
              <div className="login-btn-list">
                <Button variant="contained" className="naver-btn">
                  <img src="/img/mobile/login/icon/naver.png" /> 네이버로
                  회원가입하기
                </Button>
                <Button variant="contained" className="kakao-btn">
                  <img src="/img/mobile/login/icon/kakao.png" /> 카카오로
                  회원가입하기
                </Button>
                <Button variant="contained" className="google-btn">
                  <img src="/img/mobile/login/icon/google.png" /> 구글로
                  회원가입하기
                </Button>
              </div>
            </LoginWrap>
          </MobileContainerBox>
        </MobileBox>
      </ThemeProvider>
    </>
  );
}

const LoginWrap = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-image: url(../img/mobile/login/login_background.png);
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: 500px;

  .logo {
    img {
      width: 18rem;
    }
  }
  .login-btn-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 10rem;
    button {
      box-shadow: none;
      width: 100%;
      margin-bottom: 1rem;
      font-size: 1.8rem;
      padding: 1.2rem 0;
      img {
        margin-right: 1rem;
      }
    }
    .naver-btn {
      background-color: #00bf18;
      color: #fff;
    }
    .kakao-btn {
      background-color: #f9e000;
    }
    .google-btn {
      background-color: #ff3f2f;
      color: #fff;
    }
    button:last-of-type {
      margin: 0;
    }
  }
`;
