"use client";

import styled from "@emotion/styled";
import { Box } from "@mui/material";
import Rating from "@mui/material/Rating";
import TextField from "@mui/material/TextField";
import * as React from "react";

export default function GeneralOpinionBox() {
  const [error, setError] = React.useState(false);
  const [text, setText] = React.useState(false);

  let [inputCount, setInputCount] = React.useState(0);

  const onInputHandler = (e) => {
    setInputCount(e.target.value.length);
    if (e.target.value.length < 30) {
      setError(true);
    }
    if (e.target.value.length >= 30) {
      setError(false);
    }
  };
  return (
    <GeneralOpinionBoxWrap>
      <div className="title">
        <h2>종합의견</h2>
        <div className="rating-box">
          <Rating
            name="half-rating"
            defaultValue={2.5}
            precision={0.5}
            readOnly
          />
          <h3>3.5점</h3>
        </div>
      </div>
      <>
        <TextArea
          id="outlined-multiline-static"
          multiline
          rows={7}
          sx={{ whiteSpace: "pre-line" }}
          onChange={onInputHandler}
          placeholder={`ㆍ 종합의견 정상적인 내용으로 최소 30자 이상 입력해야 합니다.\nㆍ 서비스와 무관하거나 권리침해, 욕설, 비하, 명예훼손, 혐오, 스팸 등 불법적인 내용 및 미풍양속에 어긋나는 내용을 게시하면 운영정책 및 관련 법률에 의해 제재될 수 있습니다. 본인이 쓴 내용에 대한 법적 책임은 본인에게 있습니다.`}
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
    </GeneralOpinionBoxWrap>
  );
}

const GeneralOpinionBoxWrap = styled(Box)`
  padding: 3rem;
  border-radius: 8px;
  border: 1px solid #d9d9d9;
  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    h2 {
      font-size: 2rem;
      font-weight: bold;
      color: #0e301d;
    }
    .rating-box {
      display: flex;
      align-items: center;
      svg {
        width: 2.5rem;
        height: 2.5rem;
      }
    }
    h3 {
      font-size: 1.4rem;
      color: #fff;
      background-color: #f6c413;
      border-radius: 100px;
      padding: 0.3rem 0.8rem;
      margin-left: 1rem;
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
