"use client";
import * as React from "react";
import { useState } from "react";
import { Box, Button, IconButton } from "@mui/material";
import { createTheme, Divider, Icon, ThemeProvider } from "@mui/material";
import "../../../style/global.css";
import styled from "@emotion/styled";
import theme from "../../../../app/style/theme";
import MobileBox from "@/app/components/layout/MobileBox";
import MobileNav from "@/app/components/nav/MobileNav";
import MobileContainerBox from "@/app/components/layout/MobileContainerBox";
import BasicPagination from "@/app/components/pagination/BasicPagination";
import ShareIcon from "@mui/icons-material/Share";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

export default function Followers() {
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
          <MobileNav text={"팔로워"} />
          <MobileContainerBox>
            <FollowersWrap>
              <h3>
                팔로워는 회원님의 추천으로 가입한 회원입니다. 팔로워가
                후기부등본으로 수익을 올릴 때마다 회원님께도 팔로워 수익의 최대
                10%를 계속 지급합니다.
              </h3>
              <h2>
                총 <span>000 </span> 명
              </h2>
              <div className="follower-table">
                <div className="thead">
                  <div className="th w-3">순번</div>
                  <div className="th w-4">이름 (ID)</div>
                  <div className="th w-4">회원가입일</div>
                </div>
                <div className="tbody">
                  <div className="td w-3">10</div>
                  <div className="td w-4">홍**(aba-)</div>
                  <div className="td w-4">2020-01-01</div>
                </div>
                <div className="tbody">
                  <div className="td w-3">9</div>
                  <div className="td w-4">홍**(aba-)</div>
                  <div className="td w-4">2020-01-01</div>
                </div>
                <div className="tbody">
                  <div className="td w-3">8</div>
                  <div className="td w-4">홍**(aba-)</div>
                  <div className="td w-4">2020-01-01</div>
                </div>
                <div className="tbody">
                  <div className="td w-3">7</div>
                  <div className="td w-4">홍**(aba-)</div>
                  <div className="td w-4">2020-01-01</div>
                </div>
                <div className="tbody">
                  <div className="td w-3">6</div>
                  <div className="td w-4">홍**(aba-)</div>
                  <div className="td w-4">2020-01-01</div>
                </div>
                <div className="tbody">
                  <div className="td w-3">5</div>
                  <div className="td w-4">홍**(aba-)</div>
                  <div className="td w-4">2020-01-01</div>
                </div>
                <div className="tbody">
                  <div className="td w-3">4</div>
                  <div className="td w-4">홍**(aba-)</div>
                  <div className="td w-4">2020-01-01</div>
                </div>
                <div className="tbody">
                  <div className="td w-3">3</div>
                  <div className="td w-4">홍**(aba-)</div>
                  <div className="td w-4">2020-01-01</div>
                </div>
                <div className="tbody">
                  <div className="td w-3">2</div>
                  <div className="td w-4">홍**(aba-)</div>
                  <div className="td w-4">2020-01-01</div>
                </div>
                <div className="tbody">
                  <div className="td w-3">1</div>
                  <div className="td w-4">홍**(aba-)</div>
                  <div className="td w-4">2020-01-01</div>
                </div>
              </div>
              <div className="center-wrap">
                <BasicPagination />
              </div>
              <div className="recommand-wrap">
                <h2>추천문구</h2>
                <div className="recommand-box">
                  <p>
                    후기부등본(https://www.hugibu.com) <br />
                    실거주 후기 등록하고 돈 벌어 보세요. <br />
                    회원가입 시 추천인 ID를 입력해주세요.
                    <br />
                    <strong>추천인 ID : 1234A6789B</strong>
                  </p>
                  <div className="icon-wrap">
                    <IconButton>
                      <ShareIcon />
                    </IconButton>
                    <IconButton>
                      <ContentCopyIcon />
                    </IconButton>
                  </div>
                </div>
              </div>
            </FollowersWrap>
          </MobileContainerBox>
        </MobileBox>
      </ThemeProvider>
    </>
  );
}

const FollowersWrap = styled(Box)`
  padding-top: 6.5rem;
  h3 {
    font-size: 1.8rem;
    color: #0e301d;
    line-height: 150%;
    font-weight: 400;
    padding-bottom: 2rem;
    border-bottom: 1px solid #d9d9d9;
    width: 100%;
    margin-bottom: 2rem;
  }
  h2 {
    font-size: 1.8rem;
    color: #0e301d;
    font-weight: 400;
    span {
      font-size: 1.8rem;
      color: #0e301d;
      font-weight: bold;
    }
  }
  .center-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem 0;
  }
  .follower-table {
    margin-top: 2rem;
    border: 1px solid #d9d9d9;
    border-top: none;
    .w-3 {
      width: 30%;
    }
    .w-4 {
      width: 40%;
    }
    .thead {
      display: flex;
      align-items: center;
      .th {
        background-color: #f6f6f6;
        padding: 1rem 2rem;
        font-size: 1.6rem;
        color: #0e301d;
        font-weight: 600;
        border-top: 1px solid #d9d9d9;
        border-right: 1px solid #d9d9d9;
        text-align: center;
      }
      .th:last-of-type {
        border-right: none;
      }
    }
    .tbody {
      display: flex;
      align-items: center;
      .td {
        background-color: #fff;
        padding: 1rem 2rem;
        font-size: 1.6rem;
        color: #0e301d;
        font-weight: 400;
        border: 1px solid #d9d9d9;
        border-left: none;
        border-bottom: none;
        text-align: center;
      }
      .td:last-of-type {
        border-right: none;
      }
    }
  }
  .recommand-wrap {
    h2 {
      margin-bottom: 1rem;
    }
    .recommand-box {
      background-color: #f6f6f6;
      padding: 2rem;
      border-radius: 8px;
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      p {
        font-size: 1.6rem;
        color: #0e301d;
        line-height: 150%;
        font-weight: 400;
        strong {
          font-size: 1.6rem;
          font-weight: bold;
          color: #00d45e;
          padding-top: 1rem;
          display: inline-block;
        }
      }
      button {
        svg {
          width: 2rem;
          height: 2rem;
          color: #00d45e;
        }
      }
    }
  }
`;
