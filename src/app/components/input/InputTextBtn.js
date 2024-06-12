
import * as React from "react";
import {createTheme,Divider,Icon,ThemeProvider} from '@mui/material';
import styled from "@emotion/styled";
import theme from "../../style/theme";
import InputText from "./InputText";
import { Box, Button, IconButton } from "@mui/material";

export default function InputTextBtn({text ,placeholder, state, helperText, value, success}){
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
            <InputTextBtnBox>
                <InputTextBtnWrap>
                    <div className="input">
                        <InputText placeholder={placeholder} state={state} helperText={helperText} value={value}/>
                    </div>
                    <div className="button">
                        <Button variant="contained">{text}</Button>
                    </div>
                </InputTextBtnWrap>
                {
                    success ?
                    <span>추천인 ID를 등록했습니다.</span> : <></>
                }
            </InputTextBtnBox>
        </ThemeProvider>
        </>
    )
}

const InputTextBtnBox = styled(Box)`
    span{
        font-size: 1.2rem;
        color: #28E67C;
        line-height: 200%;
    }
`;

const InputTextBtnWrap = styled(Box)`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
    .input{
        width: 73%;
    }
    .button{
        width: 25%;
    }
    button{
        box-shadow: none;
        font-size: 1.6rem;
        color: #fff;
        padding : 1.5rem 2rem;
        width: 100%;
    }
`;