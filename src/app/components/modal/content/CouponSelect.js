"use client";

import styled from "@emotion/styled";
import { Box } from "@mui/material";
import * as React from "react";

import BasicBtn from "@/app/components/button/BasicBtn";
import BasicSBtn from "@/app/components/button/BasicSBtn";

export default function CouponSelect({ handleClose }) {
  return (
    <CouponSelectWrap>
      <h2>쿠폰을 선택해주세요.</h2>
      <table>
        <tbody>
          <tr>
            <th className="w-20">선택</th>
            <th className="w-30">쿠폰명</th>
            <th className="w-30">금액</th>
            <th className="w-30">남은 기간</th>
          </tr>
          <tr>
            <td className="w-20">
              <input type="radio" name="coupon"></input>
            </td>
            <td className="w-30">첫 후기 등록</td>
            <td className="w-30">1,000원</td>
            <td className="w-30">90일</td>
          </tr>
          <tr>
            <td className="w-20">
              <input type="radio" name="coupon"></input>
            </td>
            <td className="w-30">회원가입</td>
            <td className="w-30">1,000원</td>
            <td className="w-30">90일</td>
          </tr>
        </tbody>
      </table>
      <ul>
        <li>쿠폰은 후기를 조회할 때만 이용할 수 있습니다.</li>
        <li>쿠폰은 유효기간내 1회만 이용 가능합니다.</li>
        <li>쿠폰을 현금으로 환불되지 않습니다</li>
      </ul>
      <ButtonWrap>
        <BasicSBtn text={"취소"} handleClick={handleClose} />
        <BasicBtn text={"확인"} handleClick={handleClose} />
      </ButtonWrap>
    </CouponSelectWrap>
  );
}

const CouponSelectWrap = styled(Box)`
  h2 {
    font-size: 1.6rem;
    color: #0e301d;
    line-height: 150%;
    margin-bottom: 1rem;
  }
  table {
    width: 100%;
    .w-30 {
      width: 30%;
    }
    .w-20 {
      width: 20%;
    }
    th,
    td {
      font-size: 1.6rem;
      color: #0e301d;
      font-weight: 400;
      padding: 1.5rem 0;
      border: 0.5px solid #d9d9d9;
      margin: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 55px;
      text-align: center;
    }
    th {
      background-color: #f2fff8;
    }
    tr {
      display: flex;
      align-items: center;
    }
  }
  ul {
    padding-left: 2rem;
    margin-top: 1rem;
    li {
      list-style: disc;
      font-size: 1.4rem;
      color: #888888;
      font-weight: 400;
    }
  }
`;

const ButtonWrap = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 4rem;
  button {
    width: 49%;
  }
`;
