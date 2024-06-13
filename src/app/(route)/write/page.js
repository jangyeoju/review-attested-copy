"use client";
import * as React from "react";
import { Box, Button, IconButton } from "@mui/material";
import { createTheme, Divider, Icon, ThemeProvider } from "@mui/material";
import styled from "@emotion/styled";
import theme from "../../../app/style/theme";
import Nav from "../../components/nav/Nav";
import Footer from "../../components/footer/Footer";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import WriteTitle from "@/app/components/title/WriteTitle";
import InputText from "@/app/components/input/InputText";
import SelectBasic from "@/app/components/input/SelectBasic";
import BasicBtn from "@/app/components/button/BasicBtn";
export default function Write() {
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
        <Nav />
        <SubBanner>
          <h2>후기부등본을 등록하세요.</h2>
          <h1>후기부등본 등록</h1>
        </SubBanner>
        <WriteWrap>
          <ContainerBox3>
            <h3>다음 세입자를 위해 실거주 후기를 등록하고 돈도 벌어 보세요.</h3>
            <h3>
              실거주 후기부등본은 <strong>유료로 판매</strong>됩니다.
              <br />
              후기등록자에게 <strong>판매수익의 60%</strong>를 지급해드립니다.
              <br />
              <strong>
                2000년 이후 실거주 했던 여러 주소지에 대해 최대 30건
              </strong>
              까지 등록할 수 있습니다.
            </h3>
            <ul className="process-wrap">
              <li>
                <h4>1단계</h4>
                <h2>주소</h2>
              </li>
              <div className="icon-box">
                <KeyboardArrowRightIcon />
              </div>
              <li>
                <h4>2단계</h4>
                <h2>평가(20)</h2>
              </li>
              <div className="icon-box">
                <KeyboardArrowRightIcon />
              </div>
              <li>
                <h4>3단계</h4>
                <h2>완료</h2>
              </li>
            </ul>
            <WriteBox>
              <WriteTitle
                num={"1단계"}
                text={"실거주 했던 주소를 입력해 주세요."}
              />
              <ul>
                <li>
                  <h4>도로명 주소</h4>
                  <InputText placeholder={"도로명 주소를 입력하세요."} />
                </li>
                <li>
                  <h4>상세주소</h4>
                  <InputText placeholder={"상세주소를 입력하세요."} />
                </li>
                <li>
                  <div className="text-box">
                    <h4>거주년도</h4>
                  </div>
                  <div className="select-wrap">
                    <SelectBasic type={"year"} placeholder={"거주년도"} />
                    <p>※ 2000년 이후 실거주자만 등록가능</p>
                  </div>
                </li>
              </ul>
            </WriteBox>
            <EndButton>
              <BasicBtn text={"다음"} />
            </EndButton>
          </ContainerBox3>
        </WriteWrap>
        <Footer />
      </ThemeProvider>
    </>
  );
}

const SubBanner = styled(Box)`
  background-color: #00d45e;
  padding: 16rem 0 8rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 3.5rem;
    color: #fff;
    line-height: 150%;
    font-weight: bold;
  }
  h2 {
    color: #fff;
    font-size: 1.8rem;
    line-height: 150%;
  }
`;

const WriteWrap = styled(Box)`
  padding: 5rem 0;
  h3 {
    font-size: 1.8rem;
    color: #0e301d;
    font-weight: 500;
    line-height: 150%;
    strong {
      font-size: 1.8rem;
      font-weight: bold;
      color: #00d45e;
    }
  }
  h3:first-of-type {
    margin-bottom: 1rem;
  }
  .process-wrap {
    display: flex;
    align-items: center;
    margin: 3rem 0 5rem 0;
    li {
      width: 32%;
      border: 1px solid #d9d9d9;
      padding: 3rem;
      border-radius: 16px;
      h4 {
        font-size: 1.6rem;
        color: #0e301d;
        margin-bottom: 0.5rem;
        line-height: 150%;
      }
      h2 {
        font-size: 2.8rem;
        color: #00d45e;
        font-weight: bold;
        line-height: 150%;
      }
    }
    .icon-box {
      padding: 0 1rem;
      svg {
        width: 3rem;
        height: 3rem;
      }
    }
  }
  @media ${() => theme.device.mobile} {
    .process-wrap {
      flex-direction: column;
      li {
        width: 100%;
        padding: 2rem;
        h4 {
          font-size: 1.4rem;
          margin-bottom: 0;
        }
        h2 {
          font-size: 2rem;
        }
      }
      .icon-box {
        transform: rotate(90deg);
      }
    }
  }
`;

const ContainerBox3 = styled(Box)`
  width: 98rem;
  margin: 0 auto;
  @media ${() => theme.device.tablet} {
    width: 100%;
    padding: 0 5%;
  }
`;

const WriteBox = styled(Box)`
  ul {
    padding: 2rem 0 5rem 0;
    li {
      display: flex;
      align-items: center;
      margin-bottom: 2rem;
      .text-box {
        height: 5.8rem;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        width: 30%;
      }
      h4 {
        font-size: 1.6rem;
        color: #0e301d;
        width: 30%;
      }
      .select-wrap {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        p {
          font-size: 1.4rem;
          color: red;
          margin-top: 0.5rem;
        }
      }
    }
  }
  @media ${() => theme.device.mobile} {
    ul {
      padding: 2rem 0 3rem 0;
      li {
        flex-direction: column;
        h4 {
          width: 100%;
          margin-bottom: 1rem;
        }
        .text-box {
          width: 100%;
          height: auto;
        }
      }
    }
  }
`;

const EndButton = styled(Box)`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  button {
    padding-left: 5rem;
    padding-right: 5rem;
  }
`;
