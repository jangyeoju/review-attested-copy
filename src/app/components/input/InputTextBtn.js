"use client";

import styled from "@emotion/styled";
import { Box, Button } from "@mui/material";
import * as React from "react";

import InputText from "./InputText";

export default function InputTextBtn({
  text,
  placeholder,
  state,
  helperText,
  value,
  success,
}) {
  return (
    <InputTextBtnBox>
      <InputTextBtnWrap>
        <div className="input">
          <InputText
            placeholder={placeholder}
            state={state}
            helperText={helperText}
            value={value}
          />
        </div>
        <div className="button">
          <Button variant="contained">{text}</Button>
        </div>
      </InputTextBtnWrap>
      {success ? <span>추천인 ID를 등록했습니다.</span> : <></>}
    </InputTextBtnBox>
  );
}

const InputTextBtnBox = styled(Box)`
  span {
    font-size: 1.2rem;
    color: #28e67c;
    line-height: 200%;
  }
`;

const InputTextBtnWrap = styled(Box)`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  .input {
    width: 73%;
  }
  .button {
    width: 25%;
  }
  button {
    box-shadow: none;
    font-size: 1.6rem;
    color: #fff;
    padding: 1.5rem 2rem;
    width: 100%;
  }
`;
