"use client"
import * as React from "react";
import { useState } from 'react';
import { Box, Button, IconButton } from "@mui/material";
import {createTheme,Divider,Icon,ThemeProvider} from '@mui/material';
import "../../style/global.css"
import styled from "@emotion/styled";
import theme from "../../../app/style/theme";
import MobileBox from "@/app/components/layout/MobileBox";
import MobileNav from "@/app/components/nav/MobileNav";
import MobileContainerBox from "@/app/components/layout/MobileContainerBox";
import BasicBtn from "@/app/components/button/BasicBtn";

export default function Mypage(){
    const theme = createTheme({
        typography:{
            fontFamily : "Pretendard"
        },
        palette: {
            primary: {
              main: "#28E67C",
            },
            secondary: {
             main: "#003BD4"
            },
            error : {
                main : "#FF8484"
            }
        },
    })
    return(
        <>
            <ThemeProvider theme={theme}>
                <MobileBox>
                    <MobileNav text={"마이페이지"}/>
                    {/* <MobileContainerBox>    */}
                        <MypageWrap>
                            <ul>
                                <a href="/mypage/complete">
                                    <li>
                                        <div>
                                            <h2>결제한 후기부등본</h2>
                                            <h3>-  건</h3>
                                        </div>
                                    </li>
                                </a>
                                <a href="/mypage/verificationList">
                                    <li>
                                        <div className="add-list">
                                            <h4>검증신청 후기부등본</h4>
                                            <h4>-  건</h4>
                                        </div>
                                    </li>
                                </a>
                                <a href="/mypage/writeList">
                                    <li>
                                        <h2>작성한 후기부등본</h2>
                                        <h3>-  건</h3>
                                    </li>
                                </a>
                                <li>
                                    <BasicBtn text={"후기부등본 쓰기"}/>
                                </li>
                                <Divider />
                                <a href="/mypage/followers">
                                    <li>
                                        <h2>팔로워</h2>
                                        <h3>-명</h3>
                                    </li>
                                </a>
                                <Divider />
                                <a href="/mypage/point">
                                    <li>
                                        <h2>포인트</h2>
                                        <h3>-원</h3>
                                    </li>
                                </a>
                                <Divider />
                                <a href="/mypage/coupon">
                                    <li>
                                        <h2>쿠폰</h2>
                                        <h3><span>1</span> 건</h3>
                                    </li>
                                </a>
                                <Divider />
                                <a href="/mypage/privacy">
                                    <li>
                                        <h2>개인정보</h2>
                                    </li>
                                </a>
                                <Divider />
                                <a href="/mypage/registration">
                                    <li>
                                        <div>
                                            <h2>공인중개사 검증단</h2>
                                            <h3>-  까지</h3>
                                            {
                                                //공인중개사 검증단 O
                                                // <h3><span className="blue-text">2025년 12월 31일</span> 까지</h3>
                                            }
                                        </div>
                                        {/* 
                                            // 검증 후기부등본 O
                                            <div className="add-list">
                                                <h4>검증 후기부등본</h4>
                                                <h4>4  건</h4>
                                            </div> 
                                        */}
                                    </li>
                                </a>
                                <li>
                                <div className="add-btn-list">
                                    <BasicBtn text={"공인중개사 검증단 등록"} color={"secondary"} href={"/mypage/registration/agent"}/>
                                </div>
                                {
                                    //공인중개사 검증단 연장 등록 버튼
                                    /* <div className="add-btn-list2">
                                        <BasicBtn text={"공인중개사 검증단 연장 등록"} color={"error"}/>
                                     </div> */
                                }
                                </li>
                                <Divider />
                                <a href="/mypage/notificationSettings">
                                    <li>
                                        <h2>알림 설정</h2>
                                    </li>
                                </a>
                                <Divider/>
                            </ul>
                        </MypageWrap>
                    {/* </MobileContainerBox> */}
                </MobileBox>
            </ThemeProvider>
        </>
    )
}

const MypageWrap = styled(Box)`
    /* height: 100%; */
    padding-top: 6.5rem;
    margin-bottom: 5rem;
    width: 100%;
    ul{
        width: 100%;
        a{
            width: 100%;
        }
        li{
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            padding: 2rem 3rem;
            &>div{
                display: flex;
                align-items: center;
                justify-content: space-between; 
                width: 100%;
            }
            h2{
                font-size: 1.8rem;
                color: #0E301D;
                font-weight: 400;
            }
            h3{
                font-size: 1.8rem;
                color: #0E301D;
                font-weight: 500;
            }
            span{
                font-size: 1.8rem;
                color: #00D45E;
                font-weight: bold;
            }
            .blue-text{
                color: #003BD4;
            }
            .add-list{
                h4{
                    font-size: 1.6rem;
                    color: #888888;
                    font-weight: 400;
                }
            }
            .add-btn-list{
                button{
                    background-color: #003BD4;
                }
            }
            .add-btn-list2{
                button{
                    background-color: #FF8484;
                }
            }
            button{
                width: 100%;
                padding: 1.2rem 2rem;
            }
        }
        a:first-of-type li {
            flex-direction: column;
        }
        a:nth-of-type(2) li{
            margin: 0;
            padding: 0 3rem;
        }
    }
`;