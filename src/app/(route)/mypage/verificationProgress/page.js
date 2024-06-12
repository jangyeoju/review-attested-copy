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
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import RoundCBtn from "@/app/components/button/RoundCBtn";
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';

const labels = {
    0.5: '0.5점',
    1: '1점',
    1.5: '1.5점',
    2: '2점',
    2.5: '2.5점',
    3: '3점',
    3.5: '3.5점',
    4: '4점',
    4.5: '4.5점',
    5: '5점',
  };

  function getLabelText(value) {
    return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
  }
  


export default function VerificationProgress(){
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

    const [alignment, setAlignment] = React.useState('실거주자');

    const handleChange = (event, newAlignment) => {
      setAlignment(newAlignment);
    };

    const [value, setValue] = React.useState(2);
    const [hover, setHover] = React.useState(-1);

    return(
        <>
            <ThemeProvider theme={theme}>
                <MobileBox>
                    <MobileNav text={"검증 진행"}/>
                    <MobileContainerBox>
                        <VerificationProgressWrap>
                            <AttestedCopyMobile type={"검증포기"} view={"none"}/>
                            <Divider sx={{mt : 3, mb: 3}}/>
                            <div className="button-wrap">
                                <StyledToggleButtonGroup
                                color="primary"
                                value={alignment}
                                exclusive
                                onChange={handleChange}
                                aria-label="Platform"
                                >
                                    <StyledToggleButton value="실거주자">실거주자</StyledToggleButton>
                                    <StyledToggleButton value="공인중개사">공인중개사</StyledToggleButton>
                                </StyledToggleButtonGroup>
                                <Button variant="outlined" className="download-btn">
                                    다운로드
                                    <SaveAltIcon/>
                                </Button>
                            </div>
                            <OpinionBox>
                                <div className="title">
                                    <h2>1. 종합의견</h2>
                                    <div className="rating-box">
                                        {/* <Rating name="half-rating" defaultValue={2.5} precision={0.5}/> */}
                                        <Rating
                                            name="hover-feedback"
                                            value={value}
                                            precision={0.5}
                                            getLabelText={getLabelText}
                                            onChange={(event, newValue) => {
                                            setValue(newValue);
                                            }}
                                            onChangeActive={(event, newHover) => {
                                            setHover(newHover);
                                            }}
                                            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                                        />
                                        {value !== null && (
                                            <h3>{labels[hover !== -1 ? hover : value]}</h3>
                                        )}
                                   
                                    </div>
                                </div>
                                <div className="content">
                                    <h3>종합의견 블라블라...</h3>
                                </div>
                            </OpinionBox>
                                </VerificationProgressWrap>
                    </MobileContainerBox>
                </MobileBox>
            </ThemeProvider>
        </>
    )
}

const VerificationProgressWrap = styled(Box)`
    padding-top: 6.5rem;
    .button-wrap{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 2rem;
        button{
            font-size: 1.6rem;
            border-radius: 100px;
            padding: .5rem 3rem;
        }
    }
`;

const StyledToggleButtonGroup = styled(ToggleButtonGroup)`
    .Mui-selected{
        background-color: #00D45E !important;
        color: #fff !important;
        border-color: #00D45E;
    }
    button:first-of-type{
        margin-right: 1rem;
    }
`;

const StyledToggleButton = styled(ToggleButton)`
    font-size: 1.6rem;
    border-radius: 100px !important;
    padding: .5rem 3rem;
    border-left: 1px solid #d9d9d9 !important;
`; 


const OpinionBox = styled(Box)`
    border: 1px solid #D9D9D9;
    border-radius: 8px;
    margin-bottom: 2rem;
    .title{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 2rem;
        border-bottom: 1px solid #D9D9D9;
        h2{
            font-size: 1.8rem;
            font-weight: bold;
            color: #0E301D;
        }
        .rating-box{
            display: flex;
            align-items: center;
            svg{
                width: 2.5rem;
                height: 2.5rem;
            }
        }
        h3{
            font-size: 1.4rem;
            color: #fff;
            background-color: #F6C413;
            border-radius: 100px;
            padding: .3rem .8rem;
            margin-left: 1rem;
            width: 5rem;
            text-align: center;
        }
    }
    .content{
        padding: 2rem;
        height: 20rem;
        overflow-y: scroll;
        h3{
            font-size: 1.6rem;
            line-height: 150%;
            font-weight: 400;
        }
    }
`;
