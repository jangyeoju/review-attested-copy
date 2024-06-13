"use client";
import * as React from "react";
import { useState } from "react";
import { Box, Button, IconButton } from "@mui/material";
import { createTheme, Divider, Icon, ThemeProvider } from "@mui/material";
import "../../../style/global.css";
import styled from "@emotion/styled";
import theme from "../../../../app/style/theme";
import MobileBox from "@/app/components/layout/MobileBox";
import MobileNav from "@/app/components/nav/MobileNav";
import MobileContainerBox from "@/app/components/layout/MobileContainerBox";
import AttestedCopyMobile from "@/app/components/attestedCopy/mobileView/page";
import BasicBtn from "@/app/components/button/BasicBtn";
export default function Complete() {
  const theme = createTheme({
    typography: {
      fontFamily: "Pretendard",
    },
    palette: {
      primary: {
        main: "#28E67C",
      },
    },
  });

  const [add, setAdd] = React.useState(false);

  const handleClickAdd = () => {
    setAdd(!add);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <MobileBox>
          <MobileNav text={"결제한 후기부등본"} />
          <MobileContainerBox>
            <CompleteWrap>
              <h2>
                총 <strong>000</strong>건
              </h2>
              <div className="complete-list">
                <AttestedCopyMobile type={"기간"} view={"none"} />
                <AttestedCopyMobile type={"기간"} view={"none"} />
                <AttestedCopyMobile type={"기간"} view={"none"} />
                {add ? (
                  <>
                    <AttestedCopyMobile type={"기간"} view={"none"} />
                    <AttestedCopyMobile type={"기간"} view={"none"} />
                    <AttestedCopyMobile type={"기간"} view={"none"} />
                  </>
                ) : (
                  <></>
                )}
              </div>
              {!add ? (
                <div className="bottom-btn">
                  <BasicBtn text={"더보기"} handleClick={handleClickAdd} />
                </div>
              ) : (
                <></>
              )}
            </CompleteWrap>
          </MobileContainerBox>
        </MobileBox>
      </ThemeProvider>
    </>
  );
}

const CompleteWrap = styled(Box)`
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
  .bottom-btn {
    button {
      padding: 1.3rem 2rem;
      width: 100%;
    }
  }
  @media ${() => theme.device.mobile} {
    .bottom-btn {
      padding-bottom: 2rem;
    }
  }
`;
