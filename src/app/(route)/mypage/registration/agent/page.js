"use client";

import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { useState } from "react";
import "../../../../style/global.css";

import BasicBtn from "@/app/components/button/BasicBtn";
import InputText from "@/app/components/input/InputText";
import MobileBox from "@/app/components/layout/MobileBox";
import MobileContainerBox from "@/app/components/layout/MobileContainerBox";
import BasicModal from "@/app/components/modal/BasicModal";
import MobileNav from "@/app/components/nav/MobileNav";
export default function Agent() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <MobileBox>
      <MobileNav text={"등록신청 및 결제"} />
      <MobileContainerBox>
        <AgentWrap>
          <ul className="privacy-list">
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
              <InputText state={"disabled"} value={"01012341234"} />
            </li>
            <li className="privacy-list-box">
              <h2>공인중개사 사무소명</h2>
              <InputText value={"홍길동 사무소"} />
            </li>
            <li className="privacy-list-box">
              <h2>사무실 주소</h2>
              <InputText value={"서울시 강남구 역삼동"} />
            </li>
            <li>
              <h2>공인중개사 사무소명</h2>
              <p> 2023-04-17 11:23, 삼성카드 (1344) 165,000원 </p>
            </li>
          </ul>
          <div className="bottom-btn">
            <BasicBtn text={"확인"} handleClick={handleClickOpen} />
            <BasicModal
              handleClose={handleClose}
              open={open}
              title={"검증단 등록 완료"}
              content={"검증단등록완료"}
            />
          </div>
        </AgentWrap>
      </MobileContainerBox>
    </MobileBox>
  );
}

const AgentWrap = styled(Box)`
  padding-top: 6.5rem;
  position: relative;
  height: 100%;
  .privacy-list {
    li {
      margin-bottom: 2rem;
      h2 {
        font-size: 1.6rem;
        color: #0e301d;
        font-weight: 500;
        margin-bottom: 1rem;
      }
    }
    li:last-of-type {
      display: flex;
      align-items: center;
      justify-content: space-between;
      h2 {
        margin: 0;
      }
      p {
        font-size: 1.6rem;
        color: #0e301d;
        font-weight: 400;
      }
    }
  }
  .bottom-btn {
    position: absolute;
    bottom: 2rem;
    left: 0;
    width: 100%;
    button {
      font-size: 1.6rem;
      padding: 1.3rem 3rem;
      width: 100%;
    }
  }
`;
