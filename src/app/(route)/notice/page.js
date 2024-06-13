"use client";
import * as React from "react";
import { Box, Button, IconButton } from "@mui/material";
import { createTheme, Divider, Icon, ThemeProvider } from "@mui/material";
import styled from "@emotion/styled";
import theme from "../../../app/style/theme";
import Nav from "../../components/nav/Nav";
import Footer from "../../components/footer/Footer";
import ContainerBox from "@/app/components/layout/ContainerBox";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import BasicPagination from "@/app/components/pagination/BasicPagination";
import NoticeModal from "@/app/components/modal/NoticeModal";

export default function Notice() {
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

  const [select, setSelect] = React.useState("10");

  const handleChange = (event) => {
    setSelect(event.target.value);
  };

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
        <Banner>
          <ContainerBox>
            <h1>공지 이벤트</h1>
            <p>공지사항 및 이벤트를 확인하세요.</p>
          </ContainerBox>
        </Banner>
        <NoticeListWrap>
          <ContainerBox>
            <div className="title">
              <h3>
                총 <strong>20</strong>개
              </h3>
              <div className="search-wrap">
                <StyledInput
                  id="input-with-icon-adornment"
                  placeholder="제목을 입력하세요."
                  endAdornment={
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  }
                />
                <FormControl sx={{ minWidth: 100 }} size="small">
                  <StyledSelect
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    value={select}
                    onChange={handleChange}
                  >
                    <StyledMenuItem value={10}>등록순</StyledMenuItem>
                    <StyledMenuItem value={20}>등록순</StyledMenuItem>
                    <StyledMenuItem value={30}>등록순</StyledMenuItem>
                  </StyledSelect>
                </FormControl>
              </div>
            </div>
            <NoticeList>
              <ul className="notice-list">
                <NoticeBox onClick={handleClickOpen}>
                  <h3>
                    후기등록 하면 스타벅스 커피 증정<span>NEW</span>
                  </h3>
                  <p>2024-05-03</p>
                </NoticeBox>
                <NoticeModal
                  handleClose={handleClose}
                  open={open}
                  title={"후기등록 하면 스타벅스 커피 증정"}
                  date={"2024-04-24"}
                  content={"후기등록 하면 스타벅스 커피 증정합니다."}
                />
                <NoticeBox onClick={handleClickOpen}>
                  <h3>모든 회원 가입 고객, 100% 쿠폰 증정 이벤트</h3>
                  <p>2024-05-03</p>
                </NoticeBox>
                <NoticeBox onClick={handleClickOpen}>
                  <h3>후기부등본 런칭</h3>
                  <p>2024-05-03</p>
                </NoticeBox>
                <NoticeBox onClick={handleClickOpen}>
                  <h3>모든 회원 가입 고객, 100% 쿠폰 증정 이벤트</h3>
                  <p>2024-05-03</p>
                </NoticeBox>
                <NoticeBox onClick={handleClickOpen}>
                  <h3>후기부등본 런칭</h3>
                  <p>2024-05-03</p>
                </NoticeBox>
                <NoticeBox onClick={handleClickOpen}>
                  <h3>모든 회원 가입 고객, 100% 쿠폰 증정 이벤트</h3>
                  <p>2024-05-03</p>
                </NoticeBox>
                <NoticeBox onClick={handleClickOpen}>
                  <h3>후기부등본 런칭</h3>
                  <p>2024-05-03</p>
                </NoticeBox>
                <NoticeBox onClick={handleClickOpen}>
                  <h3>모든 회원 가입 고객, 100% 쿠폰 증정 이벤트</h3>
                  <p>2024-05-03</p>
                </NoticeBox>
                <NoticeBox onClick={handleClickOpen}>
                  <h3>후기부등본 런칭</h3>
                  <p>2024-05-03</p>
                </NoticeBox>
                <NoticeBox onClick={handleClickOpen}>
                  <h3>모든 회원 가입 고객, 100% 쿠폰 증정 이벤트</h3>
                  <p>2024-05-03</p>
                </NoticeBox>
              </ul>
            </NoticeList>
            <div className="center-wrap">
              <BasicPagination />
            </div>
          </ContainerBox>
        </NoticeListWrap>
        <Footer />
      </ThemeProvider>
    </>
  );
}

const Banner = styled(Box)`
  background-color: #28e67c;
  width: 100%;
  padding: 10rem 0;
  margin-top: 7rem;
  background-image: url(../img/notice/banner.png);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: bottom;
  h1 {
    font-size: 3rem;
    color: #fff;
    font-weight: bold;
    line-height: 150%;
    margin-bottom: 1rem;
  }
  P {
    font-size: 1.8rem;
    color: #fff;
    line-height: 150%;
  }
  @media ${() => theme.device.mobile} {
    padding: 8rem 0;
    background-size: 1000px;
    background-position: bottom;
    h1 {
      font-size: 2.4rem;
      margin-bottom: 0.5rem;
    }
    p {
      font-size: 1.6rem;
    }
  }
`;

const NoticeListWrap = styled(Box)`
  padding: 5rem 0;
  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 2rem;
    border-bottom: 2px solid #28e67c;
    .search-wrap {
      display: flex;
      align-items: center;
      & > div:first-child {
        margin-right: 2rem;
      }
    }
    h3 {
      font-size: 1.8rem;
      color: #0e301d;
      font-weight: bold;
      strong {
        font-size: 1.8rem;
        color: #28e67c;
        font-weight: bold;
      }
    }
  }
  .center-wrap {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 5rem;
  }
  @media ${() => theme.device.mobile} {
    .notice-title {
      flex-direction: column;
      align-items: flex-start;
      .search-wrap {
        width: 100%;
        justify-content: space-between;
        margin-top: 1rem;
      }
    }
  }
`;

const NoticeList = styled(Box)`
  .notice-list {
  }
  @media ${() => theme.device.mobile} {
    .title {
      h2 {
        font-size: 2rem;
      }
    }
  }
  @media ${() => theme.device.mobile2} {
    .title {
      h2 {
        font-size: 1.8rem;
      }
    }
  }
`;

const StyledInput = styled(Input)`
  width: 30rem;
  svg {
    width: 2rem;
    height: 2rem;
  }
  input {
    font-size: 1.6rem;
    padding: 7px 0;
  }
  @media ${() => theme.device.mobile} {
    width: 20rem;
    input {
      font-size: 1.4rem;
    }
  }
  @media ${() => theme.device.mobile2} {
    width: 70%;
  }
`;

const NoticeBox = styled(Box)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 1.5rem 0;
  cursor: pointer;
  h3 {
    font-size: 1.8rem;
    color: #0e301d;
    line-height: 150%;
    font-weight: 400;
    span {
      color: #fff;
      display: inline-block;
      border-radius: 100px;
      background-color: #f6c413;
      font-size: 1.4rem;
      padding: 0.1rem 1rem;
      margin-left: 1rem;
    }
  }
  p {
    font-size: 1.6rem;
    color: #888888;
    line-height: 150%;
  }
  &:hover {
    h3 {
      color: #00d45e;
    }
  }
  @media ${() => theme.device.mobile} {
    h3 {
      font-size: 1.6rem;
      span {
        font-size: 1.2rem;
      }
    }
    p {
      font-size: 1.4rem;
    }
  }
  @media ${() => theme.device.mobile2} {
    h3 {
      font-size: 1.4rem;
      span {
        font-size: 1.1rem;
      }
    }
    p {
      font-size: 1.2rem;
    }
  }
`;

const StyledSelect = styled(Select)`
  font-size: 1.4rem;
`;

const StyledMenuItem = styled(MenuItem)`
  font-size: 1.4rem;
`;
