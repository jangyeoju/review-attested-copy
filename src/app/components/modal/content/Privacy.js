import * as React from "react";
import { Box, Button, IconButton } from "@mui/material";
import { createTheme, Divider, Icon, ThemeProvider } from "@mui/material";
import styled from "@emotion/styled";
import theme from "../../../style/theme";

export default function Privacy() {
  return (
    <>
      <ContentWrap>
        <p>
          OOOO(이하 ‘회사’)의 개인정보처리방침은 아래의 내용을 담고 있습니다.
          <br />
          <br />
          제1조 목적
          <br />
          제2조 수집하는 개인정보의 항목
          <br />
          제3조 개인정보 수집에 대한 동의
          <br />
          제4조 개인정보의 수집 및 이용목적
          <br />
          제5조 쿠키에 의한 개인정보 수집
          <br />
          제6조 목적 외 사용 및 제3자에 대한 제공 및 공유
          <br />
          제7조 개인정보의 열람, 정정
          <br />
          제8조 개인정보 수집, 이용, 제공에 대한 동의철회(회원탈퇴)
          <br />
          제9조 수집하는 개인정보의 보유 및 이용기간
          <br />
          제10조 개인정보보호를 위한 기술 및 관리적 대책
          <br />
          제11조 링크사이트
          <br />
          제12조 개인정보의 위탁처리
          <br />
          제13조 이용자의 권리와 의무
          <br />
          제14조 의견수렴 및 불만처리
          <br />
          제15조 개인정보관리책임자 및 담당자
          <br />
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
