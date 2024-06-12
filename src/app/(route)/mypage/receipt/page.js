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
import BasicBtn from "@/app/components/button/BasicBtn";
export default function Receipt(){
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
                <MobileNav text={"온라인 영수증"} type={"delete"}/>
                 <MobileContainerBox>   
                    <ReceiptWrap>
                        <div className="table">
                            <div className="title">
                                <h3>구매자명 (회원ID)</h3>
                            </div>
                            <div className="name td">
                             홍길동 (UAVHXKAJ)
                            </div>
                            <div className="thead">
                                <div className="th">거래일시</div>
                                <div className="th">취소일시</div>
                            </div>
                            <div className="tbody">
                                <div className="td">2023-05-02 12:12</div>
                                <div className="td">-</div>
                            </div>
                            <div className="thead">
                                <div className="th">상품명</div>
                                <div className="th">금액</div>
                            </div>
                            <div className="tbody">
                                <div className="td">후기부등본</div>
                                <div className="td">3,300원</div>
                            </div>
                            <div className="thead">
                                <div className="th">승인번호</div>
                                <div className="th">결제대행사</div>
                            </div>
                            <div className="tbody">
                                <div className="td">2312312312</div>
                                <div className="td">이니시스</div>
                            </div>
                            <div className="thead">
                                <div className="th">결제수단</div>
                                <div className="th">결제수단정보</div>
                            </div>
                            <div className="tbody">
                                <div className="td">롯데카드</div>
                                <div className="td">1230********1234</div>
                            </div>
                        </div>
                        <div className="table">
                            <div className="title">
                                <h3>판매자 정보</h3>
                            </div>
                            <div className="thead">
                                <div className="th">판매자 상호</div>
                                <div className="th">대표자명</div>
                            </div>
                            <div className="tbody">
                                <div className="td">(주)후기부등본</div>
                                <div className="td">이혁재</div>
                            </div>
                            <div className="thead">
                                <div className="th">사업자등록번호</div>
                                <div className="th">주소</div>
                            </div>
                            <div className="tbody">
                                <div className="td">555-11-00000</div>
                                <div className="td">서울시 강남구 역삼동 1231</div>
                            </div>
                        </div>
                        <p>
                        - 해당영수증은 거래내역 확인을 위한 용도이며, 회계처리 증빙으로 사용이 불가능합니다.<br/>
                        - 회계처리 증빙용 자료를 각 결제대행사를 통해 발급받을 수 있습니다. - 현금영수증 : 국세청 홈텍스에서 발급받을 수 있습니다.
                        </p>
                        <div className="bottom-btn">
                            <BasicBtn text={"확인"}/>
                        </div>
                    </ReceiptWrap>
                </MobileContainerBox>
            </MobileBox>
        </ThemeProvider>
        </>
    )
}

const ReceiptWrap = styled(Box)`
    padding-top: 6.5rem;
    width: 100%;
    height: 100%;
    position: relative;
    .bottom-btn{
        position: absolute;
        bottom: 0;
        width: 100%;
        padding: 2rem 0;
        button{
            padding: 1.3rem 2rem;
            width: 100%;
        }
    }
    .table{
        border: 1px solid #d9d9d9;
        border-bottom: none;
        margin-bottom: 2rem;
        .title{
            padding: 1rem 2rem;
            background-color: #00D45E;
            h3{
                font-size: 1.6rem;
                color: #fff;
            }
        }
        .thead{
            display: flex;
            align-items: center;
            &>div {
                width: 50%;
            }
            &>div:first-of-type{
                border-right: 1px solid #d9d9d9;
            }
        }
        .tbody{
            display: flex;
            align-items: center;
            &>div {
                width: 50%;
            }
            &>div:first-of-type{
                border-right: 1px solid #d9d9d9;
            }
        }
        .td{
            background-color: #fff;
            padding: 1rem 2rem;
            font-size: 1.6rem;
            color: #0E301D;
            font-weight: 400;
            border-bottom: 1px solid #d9d9d9;
        }
        .th{
            background-color: #F6F6F6;
            padding: 1rem 2rem;
            font-size: 1.6rem;
            color: #0E301D;
            font-weight: 600;
            border-bottom: 1px solid #d9d9d9;
        }
    }
    p{
        font-size: 1.4rem;
        color: #888888;
        line-height: 150%;
    }
    @media ${() => theme.device.mobile} {
        .table{
            .td{
                height: 55px;
                display: flex;
                align-items: center;
            }
        }
    }
`;