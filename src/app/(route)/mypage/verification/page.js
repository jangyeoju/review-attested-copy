"use client";

import styled from "@emotion/styled";
import { Box } from "@mui/material";
import "../../../style/global.css";

import AttestedCopyMobile from "@/app/components/attestedCopy/mobileView/page";
import MobileBox from "@/app/components/layout/MobileBox";
import MobileContainerBox from "@/app/components/layout/MobileContainerBox";
import MobileNav from "@/app/components/nav/MobileNav";
export default function Verification() {
  return (
    <MobileBox>
      <MobileNav text={"검증신청 후기부등본"} />
      <MobileContainerBox>
        <VerificationWrap>
          <h2>
            총 <strong>000</strong>건
          </h2>
          <div className="complete-list">
            <AttestedCopyMobile type={"완료"} view={"none"} />
            <AttestedCopyMobile type={"접수"} view={"none"} />
            <AttestedCopyMobile type={"진행"} view={"none"} />
            <AttestedCopyMobile type={"거절"} view={"none"} />
          </div>
        </VerificationWrap>
      </MobileContainerBox>
    </MobileBox>
  );
}

const VerificationWrap = styled(Box)`
  padding-top: 6.5rem;
  width: 100%;
  h2 {
    font-size: 1.8rem;
    color: #0e301d;
    font-weight: 400;
    strong {
      font-weight: bold;
      font-size: 1.8rem;
    }
  }
  .complete-list {
    margin: 2rem 0;
    & > div {
      margin-bottom: 2rem;
    }
  }
`;
