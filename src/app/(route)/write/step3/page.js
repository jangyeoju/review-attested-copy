"use client";
import * as React from "react";
import { Box, Button, IconButton } from "@mui/material";
import { createTheme, Divider, Icon, ThemeProvider } from "@mui/material";
import styled from "@emotion/styled";
import theme from "../../../../app/style/theme";
import Nav from "../../../components/nav/Nav";
import WriteTitle from "@/app/components/title/WriteTitle";
import Footer from "../../../components/footer/Footer";
import TextField from "@mui/material/TextField";
import BasicBtn from "@/app/components/button/BasicBtn";
import BasicModal from "@/app/components/modal/BasicModal";
export default function Step2() {
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

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
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
            <WriteBox>
              <WriteTitle
                num={"마지막단계"}
                text={"실거주 인증 서류를 첨부해 주세요."}
              />
              <div className="file-upload-box">
                <h3>실거주 인증 서류 첨부</h3>
                <div className="file-upload">
                  <StyledTextField
                    id="outlined-basic"
                    variant="outlined"
                    type="text"
                  />
                  <input type="file" id="file" name="file" />
                  <label for="file">파일첨부</label>
                </div>
                <p>※ 10Mb 이하의 이미지 파일 및 PDF 파일만 등록 가능합니다.</p>
              </div>
              <ul className="detail-box">
                <li>
                  1. 회원명과 거주지 주소가 정확히 표시된 서류 1건을
                  등록해주세요.
                </li>
                <li>
                  2. 등록서류 ①우편물 송장 사본 ②임대차계약서 사본 ③주민등록본
                  사본
                </li>
                <li>
                  3. 실거주 인증 서류를 등록하지 않은 경우, 실거주 미인증
                  후기부등본 등록되고 무료로 공개 됩니다
                </li>
              </ul>
            </WriteBox>
            <EndButton>
              <BasicBtn text={"이전"} />
              <BasicBtn text={"등록신청"} handleClick={handleClickOpen} />
              {/* <BasicModal handleClose={handleClose} open={open} title={"실거주 미인증 후기부등본(무료)으로 등록 "} content={"실거주미인증"}/> */}
              <BasicModal
                handleClose={handleClose}
                open={open}
                title={"실거주 미인증 후기부등본(무료)으로 등록 "}
                content={"실거주인증"}
              />
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
  .file-upload-box {
    margin: 2rem 0 1rem 0;
    h3 {
      font-size: 2rem;
      color: #0e301d;
      font-weight: 500;
      line-height: 150%;
      margin-bottom: 1rem;
    }
    p {
      font-size: 1.4rem;
      color: #888888;
      line-height: 150%;
      margin-top: 0.5rem;
    }
    .file-upload {
      display: flex;
      align-items: center;
      justify-content: space-between;
      input[type="file"] {
        display: none;
      }
      label {
        font-size: 1.6rem;
        color: #fff;
        background-color: #28e67c;
        border-radius: 4px;
        padding: 1.85rem 2rem;
        width: 20%;
        text-align: center;
        cursor: pointer;
      }
    }
  }
  .detail-box {
    background-color: #f6f6f6;
    padding: 3rem;
    border-radius: 8px;
    margin-top: 2rem;
    li {
      font-size: 1.6rem;
      color: #888888;
      line-height: 180%;
      font-weight: 400;
    }
  }
  @media ${() => theme.device.mobile} {
    .file-upload-box {
      .file-upload {
        label {
          width: 30%;
        }
      }
    }
  }
`;

const StyledTextField = styled(TextField)`
  width: 79%;
  .MuiOutlinedInput-root {
    border: 1px solid #d9d9d9;
    font-size: 14px !important;
  }
  input {
    border-radius: 4px;
    background-color: #fff;
    font-size: 1.6rem;
    outline: none;
    color: #0e301d;
  }
  border-radius: 4px;
  fieldset {
    padding: 1rem 2rem;
    border: none;
  }
  @media ${() => theme.device.mobile} {
    width: 68%;
  }
`;

const EndButton = styled(Box)`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  margin: 3rem 0 5rem 0;
  button {
    padding-left: 5rem;
    padding-right: 5rem;
    min-width: 15rem;
  }
  button:first-of-type {
    margin-right: 1rem;
  }
  button:last-of-type {
    margin: 0 !important;
  }
`;
