"use client";
import styled from "@emotion/styled";
import { Box, Button, IconButton } from "@mui/material";
import { createTheme, Divider, Icon, ThemeProvider } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import * as React from "react";

import theme from "../../../app/style/theme";
import Footer from "../../components/footer/Footer";
import Nav from "../../components/nav/Nav";

import AttestedCopy from "@/app/components/attestedCopy/attestedCopy";
import ReviewBoxList from "@/app/components/common/ReviewBoxList";
import ContainerBox from "@/app/components/layout/ContainerBox";
import SearchBar from "@/app/components/search/SearchBar";
import SearchList from "@/app/components/search/SearchList";

export default function AdrSearch() {
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
            <h3>실거주자의 진짜후기</h3>
            <h1>
              주소로 실거주 후기를
              <br />
              확인하세요
            </h1>
          </ContainerBox>
          <div className="center-wrap">
            <SearchBar handleClickOpen={handleClickOpen} />
            {open ? (
              <>
                <SearchListWrap>
                  <SearchList handleClose={handleClose} />
                </SearchListWrap>
              </>
            ) : (
              <></>
            )}
          </div>
        </Banner>
        <ContainerBox>
          <ReviewBoxList />
        </ContainerBox>
        <SearchResult>
          <ContainerBox>
            <div className="title">
              <h3>
                검색결과 <strong>3</strong>건
              </h3>
              <div className="search-wrap">
                <FormControl sx={{ minWidth: 100 }} size="small">
                  <StyledSelect
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    value={select}
                    onChange={handleChange}
                  >
                    <StyledMenuItem value={10}>최신순</StyledMenuItem>
                    <StyledMenuItem value={20}>등록순</StyledMenuItem>
                    <StyledMenuItem value={30}>등록순</StyledMenuItem>
                  </StyledSelect>
                </FormControl>
              </div>
            </div>
          </ContainerBox>

          {/*검색결과 없을 때 */}
          {/* <ResultNone>
                    <p>검색 결과가 없습니다.</p>
                </ResultNone> */}

          <ContainerBox>
            <ResultList>
              <AttestedCopy
                tag1={true}
                tag2={true}
                tag3={true}
                price={"3,300원"}
              />
              <AttestedCopy
                tag1={true}
                tag2={true}
                tag3={false}
                price={"무료"}
              />
              <AttestedCopy
                tag1={true}
                tag2={true}
                tag3={false}
                price={"3,300원"}
              />
            </ResultList>
          </ContainerBox>
        </SearchResult>
        <Footer />
      </ThemeProvider>
    </>
  );
}

const Banner = styled(Box)`
  background-color: #28ef80;
  width: 100%;
  padding: 10rem 0;
  margin-top: 7rem;
  position: relative;
  margin-bottom: 10rem;

  h3 {
    font-size: 2rem;
    color: #fff;
    margin-bottom: 1rem;
    font-weight: 400;
    line-height: 150%;
    text-align: center;
  }
  h1 {
    font-size: 4.5rem;
    color: #fff;
    font-weight: bold;
    line-height: 140%;
    text-align: center;
  }
  .center-wrap {
    width: 98rem;
    position: absolute;
    bottom: 0;
    right: 50%;
    transform: translate(50%, 50%);
    z-index: 97;
  }
  @media ${() => theme.device.tablet} {
    padding: 7rem 0;
    margin-bottom: 8rem;
    h1 {
      font-size: 3.5rem;
    }
    .center-wrap {
      width: 90%;
    }
  }
`;

const SearchResult = styled(Box)`
  padding: 8rem 0;
  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 2rem;
    border-bottom: 2px solid #28e67c;
    .search-wrap {
      display: flex;
      align-items: center;
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
  @media ${() => theme.device.mobile} {
    padding: 5rem 0;
  }
`;

const SearchListWrap = styled(Box)`
  width: 98rem;
  border-radius: 16px;
  box-shadow: 4px 12px 20px rgba(0, 0, 0, 0.08);
  background-color: #fff;
  position: absolute;
  top: 9rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  & > div {
    border-radius: 16px;
  }
  @media ${() => theme.device.tablet} {
    width: 100%;
    top: 7rem;
  }
`;

const StyledSelect = styled(Select)`
  font-size: 1.4rem;
`;

const StyledMenuItem = styled(MenuItem)`
  font-size: 1.4rem;
`;

const ResultNone = styled(Box)`
  height: 30rem;
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    font-size: 2rem;
    color: #888888;
    font-weight: 400;
  }
  @media ${() => theme.device.mobile} {
    p {
      font-size: 1.6rem;
    }
  }
`;

const ResultList = styled(Box)`
  margin-top: 5rem;
  & > div {
    margin-bottom: 2rem;
  }
  & > div:last-of-type {
    margin: 0;
  }
`;
