"use client";

import styled from "@emotion/styled";
import { Box } from "@mui/material";

import theme from "./style/theme";

export const MainBanner = styled(Box)`
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

export const MainTitle = styled(Box)`
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

export const MainSection = styled(Box)`
  padding: 8rem 0;
  @media ${() => theme.device.mobile} {
    padding: 5rem 0;
  }
`;

export const MainBackgroundSection = styled(Box)`
  padding: 8rem 0;
  background-color: #f3fff8;
  @media ${() => theme.device.mobile} {
    padding: 5rem 0;
  }
`;
export const MainBackgroundSection2 = styled(Box)`
  padding: 8rem 0;
  background-color: #fbfbfb;
  @media ${() => theme.device.mobile} {
    padding: 5rem 0;
  }
`;

export const NoticeList = styled(Box)`
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

export const ExampleWrap = styled(Box)`
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

export const KeywordWrap = styled(Box)`
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

export const BoxThList = styled(Box)`
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

export const InfoWrap = styled(Box)`
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

export const ContactBanner = styled(Box)`
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
