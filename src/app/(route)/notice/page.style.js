"use client";

import styled from "@emotion/styled";
import { Box } from "@mui/material";

import theme from "@/app/style/theme";

export const Banner = styled(Box)`
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
