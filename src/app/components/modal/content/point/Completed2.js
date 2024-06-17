"use client";

import styled from "@emotion/styled";
import { Box } from "@mui/material";
import * as React from "react";

import BasicBtn from "@/app/components/button/BasicBtn";

export default function Completed2({ handleClose }) {
  return (
    <>
      <CompletedWrap>
        <h3>
          공인중개사 검증단 등록이 완료되었습니다.
          <br />
          <strong>유효기간 : 2025.01.31 까지</strong>
        </h3>
      </CompletedWrap>
      <ButtonWrap>
        <BasicBtn text={"확인"} handleClick={handleClose} />
      </ButtonWrap>
    </>
  );
}

const CompletedWrap = styled(Box)`
  padding: 3rem 0 0 0;
  h3 {
    font-size: 1.6rem;
    color: #0e301d;
    text-align: center;
    font-weight: 500;
    strong {
      font-weight: bold;
      font-size: 1.6rem;
    }
  }
`;

const ButtonWrap = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 4rem;
  button {
    width: 100%;
  }
`;
