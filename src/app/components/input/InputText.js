"use client";

import styled from "@emotion/styled";
import TextField from "@mui/material/TextField";
import * as React from "react";

export default function InputText({ state, helperText, value, placeholder }) {
  return (
    <>
      {state == "disabled" ? (
        <StyledTextField
          id="outlined-basic"
          variant="outlined"
          type="text"
          disabled
          placeholder={placeholder}
          value={value}
        />
      ) : (
        <></>
      )}
      {state == "error" ? (
        <StyledTextField
          id="outlined-basic"
          variant="outlined"
          type="text"
          helperText={helperText}
          error
          value={value}
        />
      ) : (
        <></>
      )}
      {!state ? (
        <StyledTextField
          id="outlined-basic"
          variant="outlined"
          type="text"
          value={value}
          placeholder={placeholder}
        />
      ) : (
        <></>
      )}
    </>
  );
}

const StyledTextField = styled(TextField)`
  width: 100%;
  .MuiOutlinedInput-root {
    border: 1px solid #d9d9d9;
    font-size: 14px !important;
  }
  .Mui-error {
    border-color: red !important;
  }
  input {
    border-radius: 4px;
    background-color: #fff;
    font-size: 1.6rem;
    outline: none;
    color: #0e301d;
  }
  border-radius: 4px;
  fieldset {
    padding: 1rem 2rem;
    border: none;
  }
  .Mui-disabled {
    background-color: #f6f6f6;
  }
  p {
    color: red !important;
    line-height: 200%;
  }
  .Mui-error {
    margin: 0;
    input {
      /* border: 1px solid red !important; */
    }
  }
`;
