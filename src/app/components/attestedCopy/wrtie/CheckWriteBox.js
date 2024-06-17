"use client";

import styled from "@emotion/styled";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Box } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import TextField from "@mui/material/TextField";
import * as React from "react";

export default function CheckWriteBox({
  num,
  categoryName,
  qText,
  qtype,
  addBox,
}) {
  const [error, setError] = React.useState(false);
  const [text, setText] = React.useState(false);
  const [add, setAdd] = React.useState(false);
  const handleClick = () => {
    setAdd(!add);
  };

  let [inputCount, setInputCount] = React.useState(0);

  const onInputHandler = (e) => {
    setInputCount(e.target.value.length);
    if (e.target.value.length > 1) {
      setText(true);
    }
    if (e.target.value.length == 0) {
      setText(false);
    }
    if (e.target.value.length < 30) {
      setError(true);
    }
    if (e.target.value.length >= 30) {
      setError(false);
    }
  };

  return (
    <CheckWriteBoxWrap>
      <div className="catagory-title">
        <div className="num-box">
          <h5>{num}</h5>
        </div>
        <h4>{categoryName}</h4>
      </div>
      <div className="q-text">
        <h3>
          <span>Q.</span>
          {qText}
        </h3>
      </div>
      {qtype == "1" ? (
        <FormControl>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <StyledFormControlLabel
              value="0"
              control={<Radio />}
              label="매우 많다(0)"
            />
            <StyledFormControlLabel
              value="1"
              control={<Radio />}
              label="있는 편이다(1)"
            />
            <StyledFormControlLabel
              value="3"
              control={<Radio />}
              label="없는 편이다(3)"
            />
            <StyledFormControlLabel
              value="5"
              control={<Radio />}
              label="전혀 없다(5)"
            />
          </RadioGroup>
        </FormControl>
      ) : (
        <></>
      )}
      {addBox == "add" ? (
        <AddBox onClick={handleClick}>
          <div className="box"></div>
          <h3>
            상세설명 입력 시 판매가 <strong>100원 증가</strong>
          </h3>
          <div className="box">
            {!add ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
          </div>
        </AddBox>
      ) : addBox == "addNone" ? (
        <AddBox onClick={handleClick} className="none-box">
          <div className="box"></div>
          <h3>
            상세설명 입력 시 판매가 <strong>100원 증가</strong>
          </h3>
          <div className="box">
            {!add ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
          </div>
        </AddBox>
      ) : (
        <></>
      )}
      {add || !addBox ? (
        <>
          <TextArea
            id="outlined-multiline-static"
            multiline
            rows={7}
            sx={{ whiteSpace: "pre-line" }}
            onChange={onInputHandler}
            placeholder={`ㆍ 상세설명 입력 시 판매가가 [100]원씩 올라갑니다.\nㆍ 상세설명은 정상적인 내용으로 최소 30자 이상 입력해야 합니다.\nㆍ 서비스와 무관하거나 권리침해, 욕설, 비하, 명예훼손, 혐오, 스팸 등 불법적인 내용 및 미풍양속에 어긋나는 내용을 게시하면 운영정책 및 관련 법률에 의해 제재될 수 있습니다. 본인이 쓴 내용에 대한 법적 책임은 본인에게 있습니다.`}
          />

          <div className="text-num">
            {text ? (
              <>
                {error ? (
                  <p className="error">30자 이상 입력해야합니다.</p>
                ) : (
                  <p className="good">판매가가 100원 상승하였습니다.</p>
                )}
              </>
            ) : (
              <></>
            )}
            <span className="num">
              ({inputCount}/<span>300</span>)
            </span>
          </div>
        </>
      ) : (
        <></>
      )}
    </CheckWriteBoxWrap>
  );
}

const CheckWriteBoxWrap = styled(Box)`
  padding: 3rem;
  border: 1px solid #d9d9d9;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  .catagory-title {
    display: flex;
    align-items: center;
    margin-bottom: 1.5rem;
    .num-box {
      background-color: #00d45e;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 3rem;
      height: 3rem;
      margin-right: 1rem;
    }
    h5 {
      color: #fff;
      font-size: 1.6rem;
    }
    h4 {
      font-size: 2rem;
      color: #0e301d;
    }
  }
  .q-text {
    padding: 1.5rem 2rem;
    border: 1px solid #d9d9d9;
    border-radius: 8px;
    width: 100%;
    margin-bottom: 1.5rem;
    h3 {
      font-size: 1.8rem;
      span {
        font-size: 1.8rem;
        color: #00d45e;
        margin-right: 0.5rem;
        display: inline-block;
      }
    }
  }
  .text-num {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    .num {
      margin-left: 0.5rem;
    }
    span {
      font-size: 1.4rem;
      color: #888888;
      line-height: 200%;
    }
    .error {
      font-size: 1.4rem;
      line-height: 200%;
      color: #ff8484;
      font-weight: 500;
    }
    .good {
      font-size: 1.4rem;
      line-height: 200%;
      color: #00d45e;
      font-weight: 500;
    }
  }
  .none-box {
    background-color: #f6f6f6 !important;
  }
`;

const StyledFormControlLabel = styled(FormControlLabel)`
  margin-right: 4rem;
  span {
    font-size: 1.6rem;
  }
`;

const TextArea = styled(TextField)`
  width: 100%;
  margin-top: 1.5rem;
  textarea {
    font-size: 1.6rem;
    line-height: 150%;
    white-space: pre-wrap;
  }
`;

const AddBox = styled(Box)`
  background-color: #f2fff8;
  padding: 1.5rem 2rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 2rem;
  cursor: pointer;
  strong {
    color: #003bd4 !important;
  }
  .box {
    width: 2.5rem;
    height: 2.5rem;
  }
  svg {
    width: 2.5rem;
    height: 2.5rem;
  }
`;
