"use client";

import styled from "@emotion/styled";
import { Box, Button, IconButton } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import * as React from "react";
import { useState } from "react";
import "../../style/global.css";

import BottomBtn from "@/app/components/button/BottomBtn";
import InputText from "@/app/components/input/InputText";
import SelectBasic from "@/app/components/input/SelectBasic";
import MobileBox from "@/app/components/layout/MobileBox";
import MobileContainerBox from "@/app/components/layout/MobileContainerBox";
import BasicModal from "@/app/components/modal/BasicModal";
import MobileNav from "@/app/components/nav/MobileNav";

export default function Join() {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [open2, setOpen2] = React.useState(false);

  const handleClickOpen2 = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  const data = [{ id: 0, title: "만 14세 이상입니다." }, { id: 1 }, { id: 2 }];

  const [checkItems, setCheckItems] = useState([]);

  // 체크박스 단일 선택
  const handleSingleCheck = (checked, id) => {
    if (checked) {
      setCheckItems((prev) => [...prev, id]);
    } else {
      setCheckItems(checkItems.filter((el) => el !== id));
    }
  };

  // 체크박스 전체 선택
  const handleAllCheck = (checked) => {
    if (checked) {
      const idArray = [];
      data.forEach((el) => idArray.push(el.id));
      setCheckItems(idArray);
    } else {
      setCheckItems([]);
    }
  };

  return (
    <>
      <MobileBox>
        <MobileNav text={"회원가입"} type={"delete"} />
        <MobileContainerBox>
          <JoinWrap>
            <ul className="join-list">
              <li className="join-list-box">
                <h2>로그인 계정</h2>
                <ul className="sns-login">
                  <li>
                    <IconButton>
                      <img src="/img/mobile/login/icon/naver.svg" />
                    </IconButton>
                  </li>
                  <li>
                    <IconButton>
                      <img src="/img/mobile/login/icon/kakao.svg" />
                    </IconButton>
                  </li>
                  <li>
                    <IconButton>
                      <img src="/img/mobile/login/icon/google.svg" />
                    </IconButton>
                  </li>
                </ul>
              </li>
              <li className="join-list-box">
                <h2>이름</h2>
                <InputText value={"홍길동"} />
              </li>
              <li className="join-list-box">
                <h2>이메일</h2>
                <InputText state={"disabled"} />
              </li>
              <li className="join-list-box">
                <h2>휴대폰 번호</h2>
                <InputText
                  state={"error"}
                  helperText={"잘못된 휴대폰번호 입니다."}
                />
              </li>
              <li className="join-list-box">
                <h2>생년월일</h2>
                <div className="col-3-wrap">
                  <div class="col-3">
                    <SelectBasic
                      type={"year"}
                      state={"error"}
                      helperText={"만 14세 이상, 1900년대 이후만 가능합니다."}
                    />
                  </div>
                  <div class="col-3">
                    <SelectBasic type={"month"} state={"error"} />
                  </div>
                  <div class="col-3">
                    <SelectBasic type={"day"} state={"error"} />
                  </div>
                </div>
                <span className="helperText">
                  만 14세 이상, 1900년대 이후만 가능합니다.
                </span>
              </li>
            </ul>
            <div className="check-list">
              <div>
                <StyledFormControlLabel
                  label="전체동의"
                  control={
                    <Checkbox
                      name="select-all"
                      onChange={(e) => handleAllCheck(e.target.checked)}
                      checked={checkItems.length === data.length ? true : false}
                    />
                  }
                />
              </div>
              {data?.map((data, key) => (
                <div key={key} className="check-list-wrap">
                  <div>
                    <Checkbox
                      type="checkbox"
                      name={`select-${data.id}`}
                      onChange={(e) =>
                        handleSingleCheck(e.target.checked, data.id)
                      }
                      checked={checkItems.includes(data.id) ? true : false}
                    />
                  </div>
                  {data.id == 1 ? (
                    <div className="second-row">
                      <h4>
                        <span onClick={handleClickOpen}>이용약관</span>동의
                      </h4>
                    </div>
                  ) : data.id == 2 ? (
                    <div className="second-row">
                      <h4>
                        <span onClick={handleClickOpen2}>개인정보처리방침</span>
                        동의
                      </h4>
                    </div>
                  ) : (
                    <div className="second-row">
                      <h4>{data.title}</h4>
                    </div>
                  )}
                </div>
              ))}
              <BasicModal
                handleClose={handleClose}
                open={open}
                title={"이용약관"}
                content={"이용약관"}
              />
              <BasicModal
                handleClose={handleClose2}
                open={open2}
                title={"개인정보처리방침"}
                content={"개인정보처리방침"}
              />
            </div>
          </JoinWrap>
        </MobileContainerBox>
        <BottomBtn text={"회원가입"} type={"disabled"} />
      </MobileBox>
    </>
  );
}

const JoinWrap = styled(Box)`
  height: 100%;
  padding-top: 6.5rem;
  margin-bottom: 5rem;
  .join-list {
    .join-list-box {
      margin-bottom: 2rem;
    }
    h2 {
      font-size: 1.8rem;
      color: #0e301d;
      margin-bottom: 1.5rem;
    }
    .sns-login {
      display: flex;
      align-items: center;
    }
    input {
      border: 1px solid #d9d9d9;
    }
  }
  .helperText {
    font-size: 1.2rem;
    line-height: 200%;
    color: red;
  }
  .col-3-wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    .col-3 {
      width: 32%;
    }
    input {
      width: 100%;
    }
  }
  .check-list {
    margin-top: 3rem;
    .MuiFormControlLabel-root {
      margin: 0 !important;
    }
    svg {
      width: 2.5rem;
      height: 2.5rem;
    }
    h4 {
      font-size: 1.6rem;
      color: #0e301d;
      line-height: 150%;
      font-weight: 400;
      display: flex;
      align-items: center;
      span {
        font-size: 1.6rem;
        color: #0e301d;
        cursor: pointer;
        text-decoration: underline;
        margin-right: 5px;
        font-weight: 600;
      }
    }
    .check-list-wrap {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: row-reverse;
    }
  }
`;

const StyledFormControlLabel = styled(FormControlLabel)`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #d9d9d9;
  span {
    font-size: 1.8rem;
    font-weight: 600;
    color: #0e301d;
  }
`;
