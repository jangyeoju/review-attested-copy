"use client";

import styled from "@emotion/styled";
import { Box } from "@mui/material";
import * as React from "react";

import theme from "../../../app/style/theme";

export default function ReviewBoxList() {
  return (
    <ReviewBoxListWrap>
      <div className="review-box">
        <div className="text-wrap">
          <h2>최신후기</h2>
          <h3>30개</h3>
        </div>
        <img src="/img/main/icon/new.png" />
      </div>
      <div className="review-box">
        <div className="text-wrap">
          <h2>실거주 인증후기</h2>
          <h3>30개</h3>
        </div>
        <img src="/img/main/icon/mark.png" />
      </div>
      <div className="review-box">
        <div className="text-wrap">
          <h2>무료 후기</h2>
          <h3>30개</h3>
        </div>
        <img src="/img/main/icon/free.png" />
      </div>
      <div className="review-box">
        <div className="text-wrap">
          <h2>평점 높은 후기</h2>
          <h3>30개</h3>
        </div>
        <img src="/img/main/icon/star.png" />
      </div>
    </ReviewBoxListWrap>
  );
}

const ReviewBoxListWrap = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  .review-box {
    background-color: #fff;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    border-radius: 14px;
    padding: 3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 24%;
    height: 14rem;
    .text-wrap {
      h2 {
        font-size: 2.2rem;
        color: #0e301d;
        font-weight: bold;
        line-height: 150%;
        margin-bottom: 0.5rem;
      }
      h3 {
        font-size: 1.6rem;
        color: #00d45e;
        line-height: 150%;
      }
    }
  }

  @media ${() => theme.device.mobile} {
    .review-box {
      width: 49%;
      padding: 2rem;
      margin-bottom: 1rem;
      height: 10rem;
      .text-wrap {
        h2 {
          font-size: 1.6rem;
        }
      }
      img {
        width: 24px;
      }
    }
  }
  @media ${() => theme.device.mobile3} {
    .review-box {
      img {
        width: 24px;
      }
    }
  }
`;
