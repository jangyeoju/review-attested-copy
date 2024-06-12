
import * as React from "react";
import { useState } from 'react';
import { Box, Button, IconButton } from "@mui/material";
import {createTheme,Divider,Icon,ThemeProvider} from '@mui/material';
import styled from "@emotion/styled";
import theme from "../../../style/theme";

export default function JoinCoupon(){

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

    return(
        <>
            <ThemeProvider theme={theme}>
                <JoinCouponWrap>
                    <div className="icon-box">
                        <img src="/img/mobile/icon/coupon.svg" />
                    </div>
                    <div className="coupon-box">
                        <h4>회원가입 쿠폰</h4>
                        <h3>1,000원</h3>
                    </div>
                    <p>
                    회원 가입 쿠폰이 발급되었습니다.<br/>
                    유효기간 내에 후기부등본 조회 결제 시 이용하세요.<br/>
                    상세내용은 마이페이지 쿠폰에서 확인하세요.
                    </p>
                </JoinCouponWrap>
            </ThemeProvider>
        </>
    )
}

const JoinCouponWrap = styled(Box)`
  
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .coupon-box{
        padding: 2rem 0;
        width: 100%;
        border: 1px solid #D9D9D9;
        border-radius: 16px;
        margin: 2rem 0;
        h4{
            font-size: 1.8rem;
            color: #00D45E;
            font-weight: 500;
            text-align: center;
        }
        h3{
            font-weight: bold;
            font-size: 2.8rem;
            text-align: center;
            line-height: 150%;
            color: #0E301D;
        }
    }
    p{
        font-size: 1.6rem;
        text-align: center;
        line-height: 150%;
        color: #0E301D;
    }
    @media ${() => theme.device.mobile} {
        margin-top: 5rem;
    }
`;