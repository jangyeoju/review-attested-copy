"use client";

import styled from "@emotion/styled";
import { Box } from "@mui/material";
import * as React from "react";

import BasicBtn from "@/app/components/button/BasicBtn";

export default function Certification({ handleClose }) {
  return (
    <>
      <CertificationWrap>
        <h3>본인인증이 필요합니다.</h3>
      </CertificationWrap>
      <ButtonWrap>
        <BasicBtn text={"확인"} handleClick={handleClose} />
      </ButtonWrap>
    </>
  );
}

const CertificationWrap = styled(Box)`
  padding: 3rem 0 0 0;
  h3 {
    font-size: 1.6rem;
    color: #0e301d;
    text-align: center;
    font-weight: 500;
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
