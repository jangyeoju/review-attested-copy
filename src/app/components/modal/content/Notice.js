"use client";

import styled from "@emotion/styled";
import { Box } from "@mui/material";

import BasicBtn from "@/app/components/button/BasicBtn";

export default function Notice({ handleClose, text }) {
  return (
    <>
      <NoticeWrap>
        <h3>{text}</h3>
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
