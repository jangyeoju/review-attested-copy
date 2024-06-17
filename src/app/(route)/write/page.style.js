"use client";

import styled from "@emotion/styled";
import { Box } from "@mui/material";

import theme from "@/app/style/theme";

export const SubBanner = styled(Box)`
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

export const WriteWrap = styled(Box)`
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

export const ContainerBox3 = styled(Box)`
  width: 98rem;
  margin: 0 auto;
  @media ${() => theme.device.tablet} {
    width: 100%;
    padding: 0 5%;
  }
`;

export const WriteBox = styled(Box)`
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

export const EndButton = styled(Box)`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  button {
    padding-left: 5rem;
    padding-right: 5rem;
  }
`;
