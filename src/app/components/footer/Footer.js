import styled from "@emotion/styled";
import { Box, Button, IconButton } from "@mui/material";
import { createTheme, Divider, Icon, ThemeProvider } from "@mui/material";
import * as React from "react";

import theme from "../../../app/style/theme";
import ContainerBox from "../layout/ContainerBox";
import BasicModal from "../modal/BasicModal";

export default function Footer() {
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

  const [open2, setOpen2] = React.useState(false);

  const handleClickOpen2 = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  const [open3, setOpen3] = React.useState(false);

  const handleClickOpen3 = () => {
    setOpen3(true);
  };

  const handleClose3 = () => {
    setOpen3(false);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <FooterWrap>
          <ContainerBox>
            <div className="logo-box">
              <img src="/img/logo2.svg" />
            </div>
            <ul className="footer-info">
              <li>주식회사 후기부등본</li>
              <li>대표 : 이혁재 </li>
              <li>주소 : 서울시 OO구 OO로 후기부등본빌딩 000호</li>
              <li>사업자등록번호 : 111-88-11111 </li>
            </ul>
            <ul className="footer-info">
              <li>통신판매업 신고번호 : 제2024-OO구000호</li>
              <li>전화번호 : 070-0000-0000 </li>
              <li>이메일 : hugibuteam@gmail.com </li>
              <li>개인정보보호책임자 : 이혁재 </li>
            </ul>
          </ContainerBox>
        </FooterWrap>
        <FooterBottom>
          <ContainerBox>
            <div className="modal-wrap">
              <ModalBtn onClick={handleClickOpen}>이용약관</ModalBtn>
              <span> | </span>
              <ModalBtn onClick={handleClickOpen2}>개인정보처리방침</ModalBtn>
              <span> | </span>
              <ModalBtn onClick={handleClickOpen3}>서비스 운영정책</ModalBtn>
            </div>
            <BasicModal
              handleClose={handleClose}
              open={open}
              title={"이용약관"}
              content={"이용약관"}
            />
            <BasicModal
              handleClose={handleClose2}
              open={open2}
              title={"개인정보처리방침"}
              content={"개인정보처리방침"}
            />
            <BasicModal
              handleClose={handleClose3}
              open={open3}
              title={"서비스 운영정책"}
              content={"서비스"}
            />
          </ContainerBox>
        </FooterBottom>
      </ThemeProvider>
    </>
  );
}

const FooterWrap = styled(Box)`
  background-color: #f6f6f6;
  padding: 8rem 0;
  & > div {
    display: flex;
    align-items: flex-start;
  }
  .logo-box {
    margin-right: 8rem;
  }
  .footer-info:first-of-type {
    margin-right: 8rem;
  }
  .footer-info {
    li {
      font-size: 1.6rem;
      color: #888888;
      line-height: 150%;
      font-weight: 400;
      margin-bottom: 0.5rem;
    }
    li:last-of-type {
      margin: 0;
    }
  }
  @media ${() => theme.device.tablet} {
    & > div {
      flex-direction: column;
    }
    .logo-box {
      margin: 0 0 3rem 0;
    }
    .footer-info:first-of-type {
      margin: 0 0 1rem 0;
    }
  }
  @media ${() => theme.device.mobile} {
    padding: 5rem 0;
    .footer-info {
      li {
        font-size: 1.4rem;
      }
    }
  }
`;

const ModalBtn = styled(Button)`
  border: none;
  color: #fff;
  font-size: 1.6rem;
  outline: none;
  font-weight: 400;
  padding: 0 1rem;
  @media ${() => theme.device.mobile} {
    font-size: 1.4rem;
  }
`;

const FooterBottom = styled(Box)`
  background-color: #5b5b5b;
  padding: 1rem 0;
  .modal-wrap {
    display: flex;
    align-items: center;
    span {
      color: #fff;
      font-size: 1.4rem;
    }
  }
`;
