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

export default function Coupon(){
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
                <MobileBox>
                    <MobileNav text={"쿠폰"}/>
                    <MobileContainerBox>
                        <CouponWrap>
                            <div className="coupon-table">
                                <div className="thead">
                                    <div className="th w-3">쿠폰명</div>
                                    <div className="th w-3">금액</div>
                                    <div className="th w-4">발급일</div>
                                    <div className="th w-3">남은기간</div>
                                </div>
                                <div className="tbody">
                                    <div className="td w-3">첫 후기등록</div>
                                    <div className="td w-3">1,000원</div>
                                    <div className="td w-4">2020-01-01</div>
                                    <div className="td w-3">90일</div>
                                </div>
                                <div className="tbody">
                                    <div className="td w-3">회원가입</div>
                                    <div className="td w-3">1,000원</div>
                                    <div className="td w-4">2020-01-01</div>
                                    <div className="td w-3">90일</div>
                                </div>
                            </div>
                            <div className="text-info">
                                <p>
                                    1. 쿠폰은 후기를 조회할 때만 이용할 수 있습니다. <br/>
                                    2. 쿠폰은 유효기간내 1회만 이용 가능합니다. <br/>
                                    3. 쿠폰을 현금으로 환불되지 않습니다.
                                </p>
                            </div>
                        </CouponWrap>
                    </MobileContainerBox>
                </MobileBox>
            </ThemeProvider>
        </>
    )
}

const CouponWrap = styled(Box)`
    margin-top: 6.5rem;
    .text-info{
        padding: 2rem 0;
        p{
            font-size: 1.4rem;
            color: #888888;
            line-height: 150%;
        }
    }
    .coupon-table{
        margin-top: 2rem;
        border: 1px solid #d9d9d9;
        border-top: none;
        .w-2{
            width: 20%;
        }
        .w-3{
            width: 30%;
            /* min-width: 7rem; */
        }
        .w-4{
            width: 40%;
            /* min-width: 7rem; */
        }
        .thead{
            display: flex;
            align-items: center;
            .th{
                background-color: #F6F6F6;
                padding: 1rem 2rem;
                font-size: 1.6rem;
                color: #0E301D;
                font-weight: 600;
                border-top: 1px solid #d9d9d9;
                border-right: 1px solid #d9d9d9;
                text-align: center;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
            }
            .th:last-of-type{
                border-right: none;
            }
        }
        .tbody{
            display: flex;
            align-items: center;
            .td{
                background-color: #fff;
                padding: 1rem 2rem;
                font-size: 1.6rem;
                color: #0E301D;
                font-weight: 400;
                border: 1px solid #d9d9d9;
                border-left: none;
                border-bottom: none;
                text-align: center;
                overflow:hidden;
                text-overflow:ellipsis;
                white-space:nowrap;
            }
            .td:last-of-type{
                border-right: none;
            }
        }
    }
    @media ${() => theme.device.mobile} {
        .coupon-table{
            .thead{
                .th{
                    padding: 1rem .5rem;
                }
            }
            .tbody{
                .td{
                    padding: 1rem .5rem;
                }
            }
        }
    }
`;