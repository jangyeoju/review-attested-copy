"use client";

import styled from "@emotion/styled";
import { Box } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import * as React from "react";

import BasicBtn from "../../button/BasicBtn";
import InputTextEnd from "../../input/InputTextEnd";

export default function PointCharge({ handleClose }) {
  const [alignment, setAlignment] = React.useState("web");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  return (
    <PointChargeWrap>
      <ul>
        <li>
          <div className="text-box">
            <h3>충전금액</h3>
          </div>
          <div className="charge-box">
            <InputTextEnd InputAdornment={"원"} />
            <StyledToggleButtonGroup
              color="primary"
              value={alignment}
              exclusive
              onChange={handleChange}
              aria-label="Platform"
            >
              <StyledToggleButton value="10000">10,000원</StyledToggleButton>
              <StyledToggleButton value="30000">30,000원</StyledToggleButton>
              <StyledToggleButton value="50000">50,000원</StyledToggleButton>
              <StyledToggleButton value="100000">100,000원</StyledToggleButton>
              <StyledToggleButton value="300000">300,000원</StyledToggleButton>
              <StyledToggleButton value="500000">500,000원</StyledToggleButton>
            </StyledToggleButtonGroup>
          </div>
        </li>
        <li>
          <div className="text-box">
            <h3>결제 수단</h3>
          </div>
          <div className="text-box">
            <FormControl>
              <StyledRadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <StyledFormControlLabel
                  value="female"
                  control={<Radio />}
                  label="신용카드 결제"
                />
                <StyledFormControlLabel
                  value="male"
                  control={<Radio />}
                  label="간편 결제"
                />
              </StyledRadioGroup>
            </FormControl>
          </div>
        </li>
      </ul>
      <div className="bottom-btn">
        <BasicBtn text={"결제"} handleClick={handleClose} />
      </div>
    </PointChargeWrap>
  );
}

const PointChargeWrap = styled(Box)`
  ul {
    li {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      .text-box {
        height: 5.6rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      h3 {
        font-size: 1.6rem;
        color: #0e301d;
        font-weight: 500;
      }
      .charge-box {
        width: 70%;
      }
    }
  }
  .bottom-btn {
    width: 100%;
    margin-top: 4rem;
    button {
      width: 100%;
    }
  }
`;

const StyledToggleButtonGroup = styled(ToggleButtonGroup)`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  .Mui-selected {
    border: 1px solid #28e67c !important;
  }
`;

const StyledToggleButton = styled(ToggleButton)`
  font-size: 1.6rem;
  border: 1px solid #d9d9d9 !important;
  border-radius: 4px !important;
  width: 32%;
  margin-bottom: 1rem;
`;

const StyledRadioGroup = styled(RadioGroup)`
  label:last-of-type {
    margin: 0;
  }
  .MuiTypography-root {
    color: #0e301d;
  }
`;

const StyledFormControlLabel = styled(FormControlLabel)`
  span {
    font-size: 1.6rem;
  }
`;
