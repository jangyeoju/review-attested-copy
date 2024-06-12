"use client"
import * as React from "react";
import { useState } from 'react';
import { Box, Button, IconButton } from "@mui/material";
import {createTheme,Divider,Icon,ThemeProvider} from '@mui/material';
import "../../../style/global.css"
import styled from "@emotion/styled";
import theme from "../../../style/theme";
import MobileBox from "@/app/components/layout/MobileBox";
import MobileNav from "@/app/components/nav/MobileNav";
import MobileContainerBox from "@/app/components/layout/MobileContainerBox";
import BottomBtn from "@/app/components/button/BottomBtn";
import InputTextBtn from "@/app/components/input/InputTextBtn";
import BasicModal from "@/app/components/modal/BasicModal";

export default function Success(){
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

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    return(
        <>
           <ThemeProvider theme={theme}>
                <MobileBox>
                    <MobileNav text={"회원가입 완료"} type={"delete"}/>
                    <MobileContainerBox>
                        <JoinSuccess>
                            <div className="success-text">
                                <div class="icon-box">
                                    <img src="/img/mobile/icon/check-circle.svg"/>
                                </div>
                                <h2>회원 ID : <strong>12345678B</strong></h2>
                                <p className="sub-text">감사합니다.<br/>
                                회원가입이 완료되었습니다.<br/>
                                회원 ID는 자동 발급되었습니다.</p>
                            </div>
                            <div className="recommender-wrap">
                                <h3>추천인 ID 입력</h3>
                                <p className="sub-text">
                                추천인이 있는 경우 추천인 ID를 입력해주세요.<br/>
                                추천인이 없으면 ‘확인'을 눌러주세요.
                                </p>
                                {/*Error input */}
                                {/* <InputTextBtn text={"등록"} placeholder={"ID 등록은 3회까지 시도할 수 있습니다."} state={"error"} helperText={"10자리 ID를 입력해주세요."}/> */}
                                <InputTextBtn text={"등록"} placeholder={"ID 등록은 3회까지 시도할 수 있습니다."} state={"disabled"} value={"A12345678"} success={true}/>
                            </div>
                        </JoinSuccess>
                    </MobileContainerBox>
                    <BottomBtn text={"확인"}  handle={handleClickOpen}/>
                    <BasicModal handleClose={handleClose} open={open} title={"회원가입 쿠폰"} content={"회원가입쿠폰"}/>
                    {/* <BasicModal handleClose={handleClose} open={open} title={"첫 후기 등록 쿠폰"} content={"첫후기등록쿠폰"}/> */}
                </MobileBox>
            </ThemeProvider>
        </>
    )
}

const JoinSuccess = styled(Box)`
    .success-text{
        margin-top: 10rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding-bottom: 8rem;
        border-bottom: 1px solid #D9D9D9;
        h2{
            margin: 2rem 0 1rem 0;
            font-size: 2.4rem;
            color : #0E301D;
            font-weight: 400;
            line-height: 150%;
            strong{
                font-weight: bold;
                font-size: 2.4rem;
                color : #003BD4;
            }
        }
        .sub-text{
            font-size: 1.6rem;
            color: #888888;
            line-height: 150%;
            text-align: center;
        }
    }
    .recommender-wrap{
        padding: 3rem 0 ;
        h3{
            font-size: 2rem;
            color: #0E301D;
            font-weight: 500;
            line-height: 150%;
            margin-bottom: .5rem;
        }
        .sub-text{
            font-size: 1.6rem;
            color: #888888;
            line-height: 150%;
            font-weight: 400;
            margin-bottom: 2rem;
        }
    }
`;