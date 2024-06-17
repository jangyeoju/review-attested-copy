"use client";

import styled from "@emotion/styled";
import { Box } from "@mui/material";
import "../../../style/global.css";

import BasicBtn from "@/app/components/button/BasicBtn";
import MobileBox from "@/app/components/layout/MobileBox";
import MobileContainerBox from "@/app/components/layout/MobileContainerBox";
import MobileNav from "@/app/components/nav/MobileNav";

export default function Registration() {
  return (
    <MobileBox>
      <MobileNav text={"공인중개사 검증단 등록"} />
      <MobileContainerBox>
        <RegistrationWrap>
          <ul>
            <li>
              <h3>공인중개사 검증단</h3>
              <p>
                공인중개사 검증단은 이용자의 요구에 따라 해당물건 의 실거주자
                후기부등본을 확인하고 <br />
                객관적 입장에서 후기부등록을 작성합니다.
              </p>
            </li>
            <li>
              <h3>신청자격</h3>
              <p>
                회원 본인이 공인중개사인 경우{" "}
                <strong>공인중개사 자격증 사본</strong> 제출
              </p>
            </li>
            <li>
              <h3>검증방법</h3>
              <p>
                1. 이용자의 검증신청 시 공인중개사 선택
                <br />
                2. 공인중개사가 검증 진행여부 결정 <br />
                3. 검증진행 시 30일 이내 검증완료 <br />
                4. 검증완료 후 검증수수료 수령
              </p>
            </li>
            <li>
              <h3>검증 수수료</h3>
              <p>
                후기부등본 검증당 <strong>110,000원</strong>(부가세포함)
              </p>
            </li>
            <li>
              <h3>검증단 등록비</h3>
              <p>
                <strong>165,000원</strong>(부가세포함)
              </p>
            </li>
            <li>
              <h3>검증단 자격 유지기간</h3>
              <p>
                결제일로부터 <strong>1년</strong>
              </p>
            </li>
          </ul>
          <div className="bottom-btn">
            <BasicBtn
              text={"공인중개사 검증단 등록"}
              href={"/mypage/registration/agent"}
            />
          </div>
        </RegistrationWrap>
      </MobileContainerBox>
    </MobileBox>
  );
}

const RegistrationWrap = styled(Box)`
  padding-top: 6.5rem;
  height: 100% !important;
  position: relative;
  ul {
    li {
      margin-bottom: 2rem;
      h3 {
        font-size: 1.8rem;
        color: #00d45e;
        font-weight: 600;
        line-height: 150%;
        padding-left: 1rem;
        border-left: 2px solid #00d45e;
        margin-bottom: 1rem;
      }
      p {
        font-size: 1.6rem;
        color: #0e301d;
        line-height: 150%;
        font-weight: 400;
        strong {
          font-weight: bold;
          font-size: 1.6rem;
        }
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
