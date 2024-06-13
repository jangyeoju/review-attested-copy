import styled from "@emotion/styled";
import { Box, Button, IconButton } from "@mui/material";
import { createTheme, Divider, Icon, ThemeProvider } from "@mui/material";
import * as React from "react";

import theme from "../../../style/theme";

export default function Service() {
  return (
    <>
      <ContentWrap>
        <p>
          제 1 조 (목적)
          <br />
          본 서비스 운영정책은 OOOO(이하 "회사")의 다음 서비스와 관련한 사항을
          안내합니다.
          <br />
          1. 후기부등본 서비스
          <br />
          2. 후기부등본 검증 서비스
          <br />
          3. 후기부등본 판매 수익쉐어 서비스
          <br />
          4. 포인트 인출
          <br />
          <br />
          제 2 조 (인증회원제 운영)
          <br />
          회사는 본인 이름, 이메일, 휴대폰번호 등으로 가입한 자를 대상으로
          서비스를 제공하는 <br />
          것을 원칙으로 합니다. 다만, 일부 서비스는 비회원에 대하여도 제공할 수
          있습니다.
          <br />
          <br />
          제 3 조 (후기부등본 서비스)
          <br />
          1. 실거주 후기는 실제 살아본 경험 및 객관적 사실에 근거하여야 합니다.
          다음 각 호에 <br />
          해당하는 게시물을 게재하는 경우, 회사는 회원이 작성한 후기부등본에
          대하여 우<br />
          선적으로 등록 거절 처리를 할 수 있으며, 등록되더라도 사전 통지 없이
          삭제할 수 <br />
          있습니다.
        </p>
      </ContentWrap>
    </>
  );
}

const ContentWrap = styled(Box)`
  p {
    font-size: 1.6rem;
    line-height: 150%;
  }
`;
