"use client";
import * as React from "react";
import { Box, Button, IconButton } from "@mui/material";
import { createTheme, Divider, Icon, ThemeProvider } from "@mui/material";
import styled from "@emotion/styled";
import theme from "../app/style/theme";
import Nav from "./components/nav/Nav";
import ContainerBox from "./components/layout/ContainerBox";
import SearchBar from "./components/search/SearchBar";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import RoundCBtn from "./components/button/RoundCBtn";
import InputText from "./components/input/InputText";

import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import ShareIcon from "@mui/icons-material/Share";
import Footer from "./components/footer/Footer";
import ReviewBoxList from "./components/common/ReviewBoxList";
export default function Home() {
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
    <ThemeProvider theme={theme}>
      <Nav />
      <MainBanner>
        <ContainerBox>
          <div className="text-wrap">
            <h2>실거주자의 진짜 후기</h2>
            <h1>
              주소로 실거주 후기를
              <br />
              확인하세요
            </h1>
          </div>
          <div className="searchBar-wrap">
            <SearchBar />
          </div>
        </ContainerBox>
      </MainBanner>
      <MainSection>
        <ContainerBox>
          <ReviewBoxList />
          <NoticeList>
            <div className="title">
              <h2>공지 이벤트</h2>
              <a href="" className="add-btn">
                더보기
                <ControlPointIcon />
              </a>
            </div>
            <ul className="notice-list">
              <a href="">
                <li>
                  <h3>
                    후기등록 하면 스타벅스 커피 증정<span>NEW</span>
                  </h3>
                  <p>2024-05-03</p>
                </li>
              </a>
              <a href="">
                <li>
                  <h3>모든 회원 가입 고객, 100% 쿠폰 증정 이벤트</h3>
                  <p>2024-05-03</p>
                </li>
              </a>
              <a href="">
                <li>
                  <h3>후기부등본 런칭</h3>
                  <p>2024-05-03</p>
                </li>
              </a>
              <a href="">
                <li>
                  <h3>모든 회원 가입 고객, 100% 쿠폰 증정 이벤트</h3>
                  <p>2024-05-03</p>
                </li>
              </a>
              <a href="">
                <li>
                  <h3>후기부등본 런칭</h3>
                  <p>2024-05-03</p>
                </li>
              </a>
            </ul>
          </NoticeList>
        </ContainerBox>
      </MainSection>
      <MainBackgroundSection>
        <ContainerBox>
          <ExampleWrap>
            <MainTitle>
              <h1>
                먼저 살았던 <strong>실거주자가 쓴</strong> <br />
                <strong>진짜</strong> 상세한 전월세 <strong>후기</strong>
              </h1>
            </MainTitle>
            <div className="example-wrap">
              <div className="example-img">
                <img src="/img/main/example1.png" />
              </div>
              <div className="example-img">
                <img src="/img/main/example2.png" />
              </div>
              <div className="example-img">
                <img src="/img/main/example3.png" />
              </div>
            </div>
          </ExampleWrap>
        </ContainerBox>
      </MainBackgroundSection>
      <MainSection>
        <KeywordWrap />
        <ContainerBox>
          <BoxThList>
            <div className="w-33 box">
              <img src="/img/main/icon/number1.svg" />
              <h2>후기부등본</h2>
              <p>
                먼저 살았던 실거주자가 집에 대해 <br />
                표준화된 평가 항목에 따라 점수를 매기고 <br />
                상세 설명을 달아 놓은 실거주 후기 보고서
              </p>
            </div>
            <div className="w-33 box">
              <img src="/img/main/icon/number2.svg" />
              <h2>실거주 평가항목</h2>
              <p>
                임대분쟁, 층간소음, 고장시설, 난방, 곰팡결로, <br />
                누수침수, 수압배수, 냄새, 벌레, 채광통풍, <br />
                전기누전,기타소음, 인테리어 등등...
              </p>
            </div>
            <div className="w-33 box">
              <img src="/img/main/icon/number3.svg" />
              <h2>집구할 때 꼭 필요 한 정보</h2>
              <p>
                전월세 임차인이 새로 운 집을 구할 때 <br />
                꼭 알고 싶은 정보로 먼저 실거주한 사람만 <br />알 수 있는 상세한
                정보 를 제공합니다.
              </p>
            </div>
          </BoxThList>
        </ContainerBox>
      </MainSection>
      <MainBackgroundSection2>
        <MainTitle>
          <h1>후기부등본이 필요할 때</h1>
        </MainTitle>
        <ContainerBox>
          <BoxThList>
            <div className="w-33 box2">
              <img src="/img/main/icon/moving-truck.svg" />
              <h2>이사갈때</h2>
              <p>
                다음 세입자를 위해 실제 살았던 좋은 경험과 <br />
                불편했던 경험을 솔직하게 공유해 주세요.
              </p>
            </div>
            <div className="w-33 box2">
              <img src="/img/main/icon/contract.svg" />
              <h2>전월세 계약할 때</h2>
              <p>
                전월세 계약할 때 등기부등본 확인하듯 <br />
                후기부등본으로 실거주 후기를 꼼꼼히 <br />
                확인해 보고 계약하세요
              </p>
            </div>
            <div className="w-33 box2">
              <img src="/img/main/icon/mortgage.svg" />
              <h2>집 매입할 때</h2>
              <p>
                집을 매입할 때도 등기부등본 확인하 듯 <br />
                후기부등본으로 실거주 후기를 <br />
                확인해 보고 매입하세요.
              </p>
            </div>
          </BoxThList>
        </ContainerBox>
      </MainBackgroundSection2>
      <MainSection>
        <MainTitle>
          <h1>
            후기 쓰고 <strong>돈 벌기</strong>
          </h1>
        </MainTitle>
        <InfoWrap>
          <ContainerBox>
            <div className="info-img info-img1"></div>
            <div className="button-wrap">
              <RoundCBtn text={"후기 쓰고 돈 벌기"} />
            </div>
            <BoxThList>
              <div className="w-33 box3">
                <h2>유료 후기부등본</h2>
                <p>
                  <strong>실거주 인증 후기부등본</strong>은 유료로 제공됩니다.{" "}
                  <br />
                  실거주 인증은{" "}
                  <strong>
                    우편물 송장, 임대차계약서 <br />
                    또는 주민등록등본 사본
                  </strong>
                  을 통해 진행합니다. <br /> <br />
                  <strong>실거주 미인증 후기부등본</strong>은 무료입니다.
                </p>
              </div>
              <div className="w-33 box3">
                <h2>60% 수익쉐어</h2>
                <p>
                  기본적으로, 고객은 후기 부등본 조회 시 <br />
                  이용료를 지불합니다. <br /> <br />
                  그리고 <strong> 이용료의 최대 60%</strong>를 후기부등본 <br />
                  <strong>등록자에게 지급</strong>합니다.
                </p>
              </div>
              <div className="w-33 box3">
                <h2>다음 세입자를 위해</h2>
                <p>
                  좋은 점 혹은 나쁜 점
                  <br />
                  <br />
                  정보가 부족한 <strong> 다음 세입자</strong>들을 위해
                  후기부등본을 등록해 주세요.
                </p>
              </div>
            </BoxThList>
          </ContainerBox>
        </InfoWrap>
      </MainSection>
      <Divider />
      <MainSection>
        <MainTitle>
          <h1>
            친구 추천하고 <strong>돈 벌기</strong>
          </h1>
        </MainTitle>
        <InfoWrap>
          <ContainerBox>
            <div className="info-img info-img2"></div>
            <BoxThList>
              <div className="w-33 box3 h-26">
                <h2>팔로워(친구)</h2>
                <p>
                  회원이 친구를 추천하고 그 친구가 회원에 <br />
                  가입하면 <strong>회원의 팔로워</strong>가 됩니다.
                  <br />
                  <br />
                  팔로워가 후기부등본을 등록하고 <br />
                  <strong> 판매가 될 때 마다 계속 </strong> 추천한 회원에게도{" "}
                  <br />
                  이용료를 쉐어합니다.
                </p>
              </div>
              <div className="w-33 box3 h-26">
                <h2>팔로워 수익</h2>
                <p>
                  팔로워가 후기부등본을 판매할 때마다{" "}
                  <strong>
                    {" "}
                    이용료의 최대 6%(친구가 받는 수익의 최대 10%만큼)
                  </strong>
                  를 팔로워를 추천한 회원에게 지급합니다. 팔로워 수익은 팔로워
                  부터 받는 것이 아니라 회사가 별도로 지급합니다.
                </p>
              </div>
              <div className="w-33 box3 h-26">
                <h2>다다익선</h2>
                <p>
                  팔로워는 많으면 많을 수록 좋습니다. <br />
                  회원이 후기부등본을 등 록하지 않아도
                  <br />
                  팔로워가 많으면 계속 수익을 창출 할 수 있습니다.
                </p>
              </div>
            </BoxThList>
          </ContainerBox>
        </InfoWrap>
      </MainSection>
      <ContactBanner>
        <ContainerBox>
          <div className="left-box">
            <h1>
              후기부등본
              <br />
              실거주 후기 등록하고 돈 벌어 보세요.
            </h1>
            <p>회원가입 시 추천인 ID를 입력해 주세요.</p>
          </div>
          <div className="right-box">
            <div className="dp-flex">
              <h3>추천인 ID</h3>
              <div className="icon-btn">
                <IconButton>
                  <ContentCopyIcon />
                </IconButton>
                <IconButton>
                  <ShareIcon />
                </IconButton>
              </div>
            </div>
            <InputText />
            <p>로그인 후 아이디가 표시됩니다.</p>
          </div>
        </ContainerBox>
      </ContactBanner>
      <Footer />
    </ThemeProvider>
  );
}

const MainBanner = styled(Box)`
  background-image: url(../img/main/main_banner.png);
  background-position: bottom right;
  background-repeat: no-repeat;
  background-size: 870px;

  background-color: #28e67c;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  height: 55rem;
  margin-top: 7.8rem;

  .text-wrap {
    h2 {
      font-size: 2.4rem;
      color: #fff;
      font-weight: 500;
      line-height: 150%;
      margin-bottom: 0.5rem;
    }
    h1 {
      font-size: 5rem;
      line-height: 140%;
      font-weight: bold;
      color: #fff;
    }
  }
  .searchBar-wrap {
    width: 50%;
    margin-top: 5rem;
  }

  @media ${() => theme.device.mobile} {
    margin-top: 7rem;
    background-position: bottom;
    background-size: 400px;
    align-items: flex-start;
    padding: 5rem 0;
    .text-wrap {
      h2 {
        font-size: 2rem;
        text-align: center;
      }
      h1 {
        font-size: 3.5rem;
        text-align: center;
      }
    }
    .searchBar-wrap {
      width: 100%;
      margin-top: 3rem;
    }
  }
`;

const MainTitle = styled(Box)`
  margin-bottom: 5rem;
  h1 {
    font-size: 4rem;
    text-align: center;
    line-height: 140%;
    font-weight: bold;
    strong {
      font-size: 4rem;
      color: #00d45e;
    }
  }
  @media ${() => theme.device.mobile} {
    h1 {
      font-size: 3rem;
      margin-bottom: 3rem;
      strong {
        font-size: 3rem;
      }
    }
  }
`;

const MainSection = styled(Box)`
  padding: 8rem 0;
  @media ${() => theme.device.mobile} {
    padding: 5rem 0;
  }
`;

const MainBackgroundSection = styled(Box)`
  padding: 8rem 0;
  background-color: #f3fff8;
  @media ${() => theme.device.mobile} {
    padding: 5rem 0;
  }
`;
const MainBackgroundSection2 = styled(Box)`
  padding: 8rem 0;
  background-color: #fbfbfb;
  @media ${() => theme.device.mobile} {
    padding: 5rem 0;
  }
`;

const NoticeList = styled(Box)`
  margin-top: 5rem;
  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 1rem;
    border-bottom: 2px solid #00d45e;
    h2 {
      font-size: 2.4rem;
      color: #0e301d;
      line-height: 150%;
    }
    .add-btn {
      display: flex;
      align-items: center;
      font-size: 1.6rem;
      color: #888888;
      svg {
        width: 2rem;
        height: 2rem;
        margin-left: 0.5rem;
      }
    }
  }
  .notice-list {
    a {
      display: inline-block;
      width: 100%;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }
    li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1.5rem 0;
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
    }
    a:last-of-type {
      border-bottom: none;
    }
  }

  @media ${() => theme.device.mobile} {
    .title {
      h2 {
        font-size: 2rem;
      }
    }
    .notice-list {
      li {
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
    }
  }
  @media ${() => theme.device.mobile2} {
    .title {
      h2 {
        font-size: 1.8rem;
      }
    }
    .notice-list {
      li {
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
    }
  }
`;

const ExampleWrap = styled(Box)`
  .example-wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    .example-img {
      width: 33%;
      img {
        width: 100%;
      }
    }
  }

  @media ${() => theme.device.mobile} {
    .example-wrap {
      display: flex;
      align-items: center;
      justify-content: center;
      .example-img {
        width: 80%;
        margin-top: 0;
      }
    }
  }
`;

const KeywordWrap = styled(Box)`
  background-image: url(../img/main/keywordWrapPc.png);
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  height: 30rem;
  @media ${() => theme.device.mobile} {
    background-size: cover;
  }
  @media ${() => theme.device.mobile3} {
    background-image: url(../img/main/keywordWrapMo.png);
    height: 35rem;
  }
`;

const BoxThList = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 5rem;
  .w-33 {
    width: 32%;
  }
  .box {
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 18px;
    background-color: #fff;
    padding: 4rem;
    min-height: 25rem;
    h2 {
      font-size: 2.8rem;
      color: #0e301d;
      font-weight: bold;
      margin: 2rem 0 1.5rem 0;
    }
    p {
      color: #888888;
      font-size: 1.6rem;
      line-height: 150%;
    }
  }
  .box2 {
    border-radius: 18px;
    background-color: #fff;
    padding: 4rem;
    box-shadow: 4px 12px 20px rgba(0, 0, 0, 0.05);
    min-height: 27rem;
    max-height: 27rem;
    h2 {
      font-size: 2.8rem;
      color: #00d45e;
      font-weight: bold;
      margin: 2rem 0 1.5rem 0;
    }
    img {
      width: 50px;
    }
    p {
      color: #888888;
      font-size: 1.6rem;
      line-height: 150%;
    }
  }
  .box3 {
    background-color: #fff;
    border: 1px solid #00d45e;
    padding: 4rem;
    border-radius: 18px;
    min-height: 25rem;
    max-height: 25rem;
    h2 {
      font-size: 2.8rem;
      color: #00d45e;
      font-weight: bold;
      margin: 0 0 1rem 0;
    }
    p {
      color: #888888;
      font-size: 1.6rem;
      line-height: 150%;
      strong {
        font-weight: bold;
        font-size: 1.6rem;
      }
    }
  }
  .h-26 {
    min-height: 26rem;
    max-height: 26rem;
  }
  @media ${() => theme.device.tablet} {
    flex-direction: column;
    .w-33 {
      width: 100%;
      margin-bottom: 2rem;
      height: auto !important;
      min-height: auto !important;
      max-height: auto !important;
      padding: 3rem !important;
    }
    h2 {
      font-size: 2.4rem !important;
    }
    p br {
      display: none;
    }
    .w-33:last-of-type {
      margin: 0;
    }
    .h-26 {
      height: auto;
    }
  }
`;

const InfoWrap = styled(Box)`
  .info-img {
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
  }
  .info-img1 {
    background-image: url(../img/main/info1.png);
    height: 33rem;
  }
  .info-img2 {
    background-image: url(../img/main/info2.png);
    height: 35rem;
  }
  .button-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5rem 0;
    button {
      font-size: 2rem;
      padding: 1rem 5rem;
    }
  }
  @media ${() => theme.device.mobile2} {
    .info-img1 {
      background-image: url(../img/main/info1_mo.png);
      height: 60rem;
    }
    .info-img2 {
      background-image: url(../img/main/info2_mo.png);
      height: 88rem;
    }
  }
`;

const ContactBanner = styled(Box)`
  background-color: #00d45e;
  padding: 8rem 0;
  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .left-box {
    h1 {
      font-size: 3.5rem;
      color: #fff;
      font-weight: bold;
      line-height: 140%;
      margin-bottom: 1rem;
    }
    p {
      font-size: 2.4rem;
      color: #fff;
      line-height: 150%;
      margin-top: 0.5rem;
      font-weight: 400;
    }
  }
  .right-box {
    width: 40%;
    .dp-flex {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 1rem;
    }
    h3 {
      font-size: 1.8rem;
      font-weight: bold;
      color: #fff;
    }
    p {
      font-size: 1.4rem;
      color: #fff;
      margin-top: 1rem;
      line-height: 150%;
      font-weight: 400;
    }
    button {
      svg {
        color: #fff;
        width: 2rem;
        height: 2rem;
      }
    }
  }
  @media ${() => theme.device.tablet} {
    & > div {
      flex-direction: column;
      align-items: flex-start;
    }
    .left-box {
      h1 {
        font-size: 2.8rem;
      }
      p {
        font-size: 2rem;
      }
    }
    .right-box {
      width: 100%;
      margin-top: 2rem;
    }
  }
  @media ${() => theme.device.mobile} {
    padding: 5rem 0;
    .left-box {
      width: 100%;
      h1 {
        font-size: 2.2rem;
      }
      p {
        font-size: 1.8rem;
      }
    }
  }
`;
