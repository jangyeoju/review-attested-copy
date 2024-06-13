import * as React from "react";
import { Box, Button, IconButton } from "@mui/material";
import { createTheme, Divider, Icon, ThemeProvider } from "@mui/material";
import styled from "@emotion/styled";
import theme from "../../../style/theme";

export default function TermsOfUse() {
  return (
    <>
      <ContentWrap>
        <p>
          제 1 조 (목적)
          <br />
          이 약관은 “OOOOOO”(이하 "회사”라 함)가 제공하는 “후기부등본 서비스”와
          관련하여 <br />
          회사와 “회원” 간의 서비스 이용 조건 및 절차, 회사와 “회원” 간의 권리,
          의무 및 기타 <br />
          필요한 사항을 규정하는 것을 목적으로 합니다.
          <br />
          <br />
          제 2 조 (용어의 정의)
          <br />
          1. “후기부등본”이란 “회원”이 실거주 한 전월세 “임대물”에 대해 회사가
          정한 <br />
          평가항목에 따라 평가를 하고 의견을 작성한 정보와 그 문서를 말합니다.
          <br />
          2. “후기부등본 서비스”란 “회원”이 후기부등본을 작성하여 등록하고
          “이용자”가 검색,
          <br />
          조회할 수 있도록 제공하는 일체의 것들을 말합니다.
          <br />
          3. “이용자”란 후기부등본 서비스에 접속하여 본 약관에 따라 서비스를
          받는 자로서 <br />
          “회원”과 “비회원”을 포함합니다.
          <br />
          4. “회원”이라 함은 후기부등본 서비스에 개인정보를 제공하여 가입하고
          후기부등본 <br />
          서비스를 이용하는 자를 말합니다.
          <br />
          5. “비회원”이라 함은 후기부등본 서비스에서 회원으로 가입하지 않고
          후기부등본 <br />
          서비스를 이용하는 자를 말합니다.
          <br />
          6. “팔로워”란 기 회원의 추천을 통해 후기부등본 서비스에 가입한
          회원으로 등록할 때 <br />
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
