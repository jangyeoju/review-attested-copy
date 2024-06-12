
import * as React from "react";
import { Box, Button, IconButton } from "@mui/material";
import {createTheme,Divider,Icon,ThemeProvider} from '@mui/material';
import styled from "@emotion/styled";
import theme from "../../../../style/theme";
import BasicBtn from "@/app/components/button/BasicBtn";

export default function Completed2({handleClose}){
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
                <CompletedWrap>
                    <h3>공인중개사 검증단 등록이 완료되었습니다.<br/>
                        <strong>유효기간 : 2025.01.31 까지</strong>
                        </h3>
                </CompletedWrap>
                <ButtonWrap>
                    <BasicBtn text={"확인"} handleClick={handleClose}/>
                </ButtonWrap>
            </ThemeProvider>
        </>
    )
}

const CompletedWrap = styled(Box)`
    padding: 3rem 0 0 0;
    h3{
        font-size: 1.6rem;
        color: #0E301D;
        text-align: center;
        font-weight: 500;
        strong{
            font-weight: bold;
            font-size: 1.6rem;
        }
    }
`;

const ButtonWrap = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 4rem;
    button{
        width: 100%;
    }
`;
