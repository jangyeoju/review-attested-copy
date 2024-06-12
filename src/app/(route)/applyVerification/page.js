"use client"
import * as React from "react";
import { Box, Button, IconButton } from "@mui/material";
import {createTheme,Divider,Icon,ThemeProvider} from '@mui/material';
import styled from "@emotion/styled";
import theme from "../../../app/style/theme";
import Nav from "../../components/nav/Nav";
import Footer from "../../components/footer/Footer";
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import BasicSBtn from "@/app/components/button/BasicSBtn";
import BasicBtn from "@/app/components/button/BasicBtn";
import BasicModal from "@/app/components/modal/BasicModal";
export default function ApplyVerification(){
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
            <Nav/>
            <SubBanner>
                <h2>공인중개사에게 검증을 맡겨 보세요.</h2>
                <h1>공인중개사 검증신청</h1>
            </SubBanner>
            <ContainerBox2>
               <ApplyVerificationWrap>
                    <StyledTextField id="outlined-basic"  variant="outlined" type="text" 
                    onClick={handleClickOpen}
                    placeholder="공인중개사 검색"
                        InputProps={{
                            endAdornment: (
                            <InputAdornment position="end">
                                <SearchIcon />
                            </InputAdornment>
                            ),
                        }}
                        />
                    <BasicModal handleClose={handleClose} open={open} title={"공인중개사"} content={"공인중개사"}/>
                                   
                    <div className="search-result">
                        <h2>사무소 : <span>홍길동 사무소 (02-333-4444)</span></h2>
                        <h2>공인중개사 : <span>홍길동 </span> </h2>
                        <h2>주소 : <span>서울시 강남구 논현동222</span></h2>
                    </div>
                    <div className="search-info">
                        <h3>※ 유의사항</h3>
                        <h4>
                        1. 검증 신청 후 공인중개사가 수락하면 검증이 진행됩니다. <br/>
                        2. 평균 30일 소요 됩니다. <br/>
                        3.검증완료시공인중개사평점과상세설명이함께 표시됩니다. <br/>
                        4. 공인중개사 선택은 검증단에 등록된 회원만 가능합니다.
                        </h4>
                    </div>
                    <div className="price-box">
                        <h3>결제금액</h3>
                        <h2>165,000<span>원</span></h2>
                    </div>
                    <ButtonWrap>
                        <BasicSBtn text={"취소"}/>
                        <BasicBtn text={"결제"}/>
                    </ButtonWrap>
               </ApplyVerificationWrap>
            </ContainerBox2>
            <Footer />
        </ThemeProvider>
        </>
    )
}

const SubBanner = styled(Box)`
    background-color: #00D45E;
    padding: 16rem 0 8rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1{
        font-size: 3.5rem;
        color: #fff;
        line-height: 150%;
        font-weight: bold;
    }
    h2{
        color: #fff;
        font-size: 1.8rem;
        line-height: 150%;
    }

`;

const ApplyVerificationWrap = styled(Box)`
    padding: 5rem 0;
    .search-result{
        margin: 2rem 0 4rem 0;
        h2{
            font-size: 2rem;
            color: #0E301D;
            line-height: 150%;
        }
        span{
            font-size: 2rem;
            color : #0E301D;
            font-weight: 400;
            margin-left: .5rem;
        }
    }
    .search-info{
        padding: 2rem;
        background-color: #F6F6F6;
        border-radius: 8px;
        h3{
            color: #00D45E;
            font-size: 1.6rem;
            font-weight: 500;
            margin-bottom: 1rem;
        }
        h4{
            font-size: 1.6rem;
            color: #888888;
            line-height: 150%;
            font-weight: 400;
        }
    }
    .price-box{
        border: 1px solid #D9D9D9;
        background-color: #fff;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 2rem;
        margin: 2rem 0;
        h3{
            font-size: 2rem;
            color: #0E301D;
            font-weight: 500;
        }
        h2{
            font-size: 2.5rem;
            color: #00D45E;
            font-weight: bold;
            span{
                font-size: 1.4rem;
                color: #888888;
                font-weight: 400;
                margin-left: .5rem;
            }
        }
    }
`;

const StyledTextField = styled(TextField)`
    width: 100%;
    .MuiOutlinedInput-root{
        border: 1px solid #D9D9D9;
        font-size: 14px !important;
    }
    input{
        background-color: #fff;
        font-size: 1.6rem;
        outline: none;
        color: #0E301D;
        border-radius: 4px;
    }
    fieldset{
        padding: 1rem 2rem;
        border: none;
    }
    svg{
        width: 2rem;
        height: 2rem;
    }
`;

const ContainerBox2 = styled(Box)`
    width: 78rem;
    margin: 0 auto;
    @media ${() => theme.device.mobile} {
      width: 100%;
      padding: 0 5%;
  }
`;

const ButtonWrap = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 2rem 0 8rem 0;
    button{
        width: 49%;
    }
`;