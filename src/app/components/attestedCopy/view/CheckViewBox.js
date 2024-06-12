import * as React from "react";
import { Box, Button, IconButton } from "@mui/material";
import {createTheme,Divider,Icon,ThemeProvider} from '@mui/material';
import styled from "@emotion/styled";
import theme from "../../../style/theme";

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import EditIcon from '@mui/icons-material/Edit';

export default function CheckViewBox({num,categoryName,qText,comment,value,qtype}){
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
                <CheckWriteBoxWrap>
                    <div className="catagory-title">
                        <div className="num-box">
                            <h5>{num}</h5>
                        </div>
                        <h4>{categoryName}</h4>
                    </div>
                    <div className="q-text">
                        <h3><span>Q.</span>{qText}</h3>
                    </div>
                    <FormControl>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                            defaultValue={value}
                            >
                                {
                                    qtype == "1" ?
                                    <>
                                        <StyledFormControlLabel value="0"  disabled={value == "0" ? false : true} control={<Radio />} label="매우 많다(0)" />
                                        <StyledFormControlLabel value="1"  disabled={value == "1" ? false : true} control={<Radio />} label="있는 편이다(1)" />
                                        <StyledFormControlLabel value="3"  disabled={value == "3" ? false : true} control={<Radio />} label="없는 편이다(3)" />
                                        <StyledFormControlLabel value="5"  disabled={value == "5" ? false : true} control={<Radio />} label="전혀 없다(5)" />
                                    </> : <></>
                                }
                                {
                                    qtype == "2" ?
                                    <>
                                        <StyledFormControlLabel value="0"  disabled={value == "0" ? false : true} control={<Radio />} label="매우 안된다(0)" />
                                        <StyledFormControlLabel value="1"  disabled={value == "1" ? false : true} control={<Radio />} label="안되는 편이다(1)" />
                                        <StyledFormControlLabel value="3"  disabled={value == "3" ? false : true} control={<Radio />} label="잘되는 편이다(3)" />
                                        <StyledFormControlLabel value="5"  disabled={value == "5" ? false : true} control={<Radio />} label="매우 잘된다(5)" />
                                    </> : <></>
                                }
                                {
                                    qtype == "3" ?
                                    <>
                                        <StyledFormControlLabel value="0"  disabled={value == "0" ? false : true} control={<Radio />} label="매우 난다(0)" />
                                        <StyledFormControlLabel value="1"  disabled={value == "1" ? false : true} control={<Radio />} label="나는 편이다(1)" />
                                        <StyledFormControlLabel value="3"  disabled={value == "3" ? false : true} control={<Radio />} label="안나는 편이다(3)" />
                                        <StyledFormControlLabel value="5"  disabled={value == "5" ? false : true} control={<Radio />} label="전혀 안난다(5)" />
                                    </> : <></>
                                }
                                {
                                    qtype == "4" ?
                                    <>
                                        <StyledFormControlLabel value="0"  disabled={value == "0" ? false : true} control={<Radio />} label="매우 나쁘다(0)" />
                                        <StyledFormControlLabel value="1"  disabled={value == "1" ? false : true} control={<Radio />} label="나쁜 편이다(1)" />
                                        <StyledFormControlLabel value="3"  disabled={value == "3" ? false : true} control={<Radio />} label="좋은 편이다(3)" />
                                        <StyledFormControlLabel value="5"  disabled={value == "5" ? false : true} control={<Radio />} label="매우 좋다(5)" />
                                    </> : <></>
                                }
                                {
                                    qtype == "5" ?
                                    <>
                                        <StyledFormControlLabel value="0"  disabled={value == "0" ? false : true} control={<Radio />} label="매우 불편하다(0)" />
                                        <StyledFormControlLabel value="1"  disabled={value == "1" ? false : true} control={<Radio />} label="불편한 편이다(1)" />
                                        <StyledFormControlLabel value="3"  disabled={value == "3" ? false : true} control={<Radio />} label="편리한 편이다(3)" />
                                        <StyledFormControlLabel value="5"  disabled={value == "5" ? false : true} control={<Radio />} label="매우 편리하다(5)" />
                                    </> : <></>
                                }
                                {
                                    qtype == "6" ?
                                    <>
                                        <StyledFormControlLabel value="0"  disabled={value == "0" ? false : true} control={<Radio />} label="절대 아니다(0)" />
                                        <StyledFormControlLabel value="1"  disabled={value == "1" ? false : true} control={<Radio />} label="아니다(1)" />
                                        <StyledFormControlLabel value="3"  disabled={value == "3" ? false : true} control={<Radio />} label="그렇다(3)" />
                                        <StyledFormControlLabel value="5"  disabled={value == "5" ? false : true} control={<Radio />} label="매우 그렇다(5)" />
                                    </> : <></>
                                }
                        </RadioGroup>
                    </FormControl>
                    <CommentBox>
                        <div className="comment-title">
                            <EditIcon/>
                            <h2>추가 코맨트</h2>
                        </div>
                        <h3>{comment}</h3>
                    </CommentBox>
                </CheckWriteBoxWrap>
            </ThemeProvider>
        </>
    )
}

const CheckWriteBoxWrap = styled(Box)`
    padding: 2rem;
    border: 1px solid #D9D9D9;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    .catagory-title{
        display: flex;
        align-items: center;
        margin-bottom: 1.5rem;
        .num-box{
            background-color: #00D45E;
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 3rem;
            height: 3rem;
            margin-right: 1rem;
        }
        h5{
            color: #fff;
            font-size: 1.6rem;
        }
        h4{
            font-size: 1.8rem;
            color: #0E301D;
        }
    }
    .q-text{
        padding: 1.5rem 2rem;
        border: 1px solid #D9D9D9;
        border-radius: 8px;
        width: 100%;
        margin-bottom: 1.5rem;
        h3{
            font-size: 1.6rem;
            font-weight: 400;
            span{
                font-size: 1.8rem;
                color: #00D45E;
                margin-right: .5rem;
                display: inline-block;
            }
        }
    }
    .text-num{
        display: flex;
        align-items: center;
        justify-content: flex-end;
        width: 100%;
        .num{
            margin-left: .5rem;
        }
        span{
            font-size: 1.4rem;
            color: #888888;
            line-height: 200%;
        }
        .error{
            font-size: 1.4rem;
            line-height: 200%;
            color: #FF8484;
            font-weight: 500;
        }
        .good{
            font-size: 1.4rem;
            line-height: 200%;
            color: #00D45E;
            font-weight: 500;
        }
    }
    .none-box{
        background-color: #F6F6F6 !important;
    }
`;

const StyledFormControlLabel = styled(FormControlLabel)`
    margin-right: 4rem;
    span{
        font-size: 1.6rem;
    }
`;


const CommentBox = styled(Box)`
    background-color: #FFFCF2;
    padding: 2rem;
    border-radius: 8px;
    width: 100%;
    margin-top: 2rem;
    .comment-title{
        display: flex;
        align-items: center;
        h2{
            font-size: 1.6rem;
            margin-left: .5rem;
            font-weight: 500;
        }
        svg{
            color: #F6C413;
        }
    }
    h3{
        font-size: 1.4rem;
        color: #0E301D;
        font-weight: 400;
        line-height: 150%;
        margin-top: 1rem;
    }
`;