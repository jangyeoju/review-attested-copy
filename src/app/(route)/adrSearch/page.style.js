"use client";

import styled from "@emotion/styled";
import { Box } from "@mui/material";

import theme from "@/app/style/theme";

export const Banner = styled(Box)`
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

export const SearchResult = styled(Box)`
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

export const ResultNone = styled(Box)`
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

export const ResultList = styled(Box)`
  margin-top: 5rem;
  & > div {
    margin-bottom: 2rem;
  }
  & > div:last-of-type {
    margin: 0;
  }
`;
