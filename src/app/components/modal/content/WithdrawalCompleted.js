"use client";

import styled from "@emotion/styled";
import { Box } from "@mui/material";
import * as React from "react";

import BasicBtn from "@/app/components/button/BasicBtn";

export default function WithdrawalCompleted({ handleClose }) {
  return (
    <>
      <NoticeWrap>
        <h3>
          회원탈퇴 처리되었습니다. <br />
          이용해 주셔서 감사합니다.
        </h3>
      </NoticeWrap>
      <ButtonWrap>
        <BasicBtn text={"확인"} handleClick={handleClose} />
      </ButtonWrap>
    </>
  );
}

const NoticeWrap = styled(Box)`
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
