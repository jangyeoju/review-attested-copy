"use client"
import * as React from "react";
import { useState } from 'react';
import { Box, Button, IconButton } from "@mui/material";
import {createTheme,Divider,Icon,ThemeProvider} from '@mui/material';
import "../../../style/global.css"
import styled from "@emotion/styled";
import theme from "../../../../app/style/theme";
import MobileBox from "@/app/components/layout/MobileBox";
import MobileNav from "@/app/components/nav/MobileNav";
import MobileContainerBox from "@/app/components/layout/MobileContainerBox";
import AttestedCopyMobile from "@/app/components/attestedCopy/mobileView/page";
import BasicBtn from "@/app/components/button/BasicBtn";
export default function Verification(){
    const theme = createTheme({
        typography:{
            fontFamily : "Pretendard"
        },
        palette: {
            primary: {
              main: "#28E67C",
            },
        },
    })

    const [add, setAdd] = React.useState(false);

    const handleClickAdd = () => {
      setAdd(!add);
    };
  

    return(
        <>
            <ThemeProvider theme={theme}>
            <MobileBox>
                <MobileNav text={"검증신청 후기부등본"}/>
                 <MobileContainerBox>   
                    <VerificationWrap>
                        <h2>총 <strong>000</strong>건</h2>
                        <div className="complete-list">
                        <AttestedCopyMobile type={"완료"} view={"none"}/>
                        <AttestedCopyMobile type={"접수"} view={"none"}/>
                        <AttestedCopyMobile type={"진행"} view={"none"}/>
                        <AttestedCopyMobile type={"거절"} view={"none"}/>
                        </div>
                    </VerificationWrap>
                </MobileContainerBox>
            </MobileBox>
            </ThemeProvider>
        </>
    )
}

const VerificationWrap = styled(Box)`
    padding-top: 6.5rem;
    width: 100%;
    h2{
        font-size: 1.8rem;
        color: #0E301D;
        font-weight: 400;
        strong{
            font-weight: bold;
            font-size: 1.8rem;
        }
    }
    .complete-list{
        margin: 2rem 0;
        &>div{
            margin-bottom: 2rem;
        }
    }
`;
