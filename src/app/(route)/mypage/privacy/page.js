"use client";

import styled from "@emotion/styled";
import { Box, Button, IconButton } from "@mui/material";
import { useState } from "react";
import "../../../style/global.css";

import InputText from "@/app/components/input/InputText";
import SelectBasic from "@/app/components/input/SelectBasic";
import MobileBox from "@/app/components/layout/MobileBox";
import MobileContainerBox from "@/app/components/layout/MobileContainerBox";
import BasicModal from "@/app/components/modal/BasicModal";
import MobileNav from "@/app/components/nav/MobileNav";

export default function Privacy() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <MobileBox>
      <MobileNav text={"개인정보"} />
      <MobileContainerBox>
        <PrivacyWrap>
          <ul className="privacy-list">
            <li className="privacy-list-box">
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
            <li className="privacy-list-box">
              <h2>회원 ID</h2>
              <InputText value={"213CC94Y52"} state={"disabled"} />
            </li>
            <li className="privacy-list-box">
              <h2>이름</h2>
              <InputText value={"홍길동"} state={"disabled"} />
            </li>
            <li className="privacy-list-box">
              <h2>이메일</h2>
              <InputText value={"admin@naver.com"} state={"disabled"} />
            </li>
            <li className="privacy-list-box">
              <h2>휴대폰 번호</h2>
              <InputText
                state={"error"}
                helperText={"잘못된 휴대폰번호 입니다."}
              />
            </li>
            <li className="privacy-list-box">
              <h2>생년월일</h2>
              <div className="col-3-wrap">
                <div class="col-3">
                  <SelectBasic type={"year"} state={"disabled"} />
                </div>
                <div class="col-3">
                  <SelectBasic type={"month"} state={"disabled"} />
                </div>
                <div class="col-3">
                  <SelectBasic type={"day"} state={"disabled"} />
                </div>
              </div>
            </li>
          </ul>
          <div className="button-wrap">
            <Button variant="outlined" color="error" onClick={handleClickOpen}>
              회원탈퇴
            </Button>
            <BasicModal
              handleClose={handleClose}
              open={open}
              title={"회원 탈퇴"}
              content={"회원탈퇴"}
            />
          </div>
        </PrivacyWrap>
      </MobileContainerBox>
    </MobileBox>
  );
}

const PrivacyWrap = styled(Box)`
  /* height: 100%; */
  padding-top: 6.5rem;
  margin-bottom: 5rem;
  .button-wrap {
    margin-top: 2rem;
    button {
      color: #ff8484;
      border-color: #ff8484;
      padding: 1.3rem 5rem;
      font-size: 1.6rem;
    }
  }
  .privacy-list {
    padding-bottom: 2rem;
    width: 100%;
    border-bottom: 1px solid #d9d9d9;
    .privacy-list-box {
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
`;
