
import * as React from "react";
import { Box, Button, IconButton } from "@mui/material";
import {createTheme,Divider,Icon,ThemeProvider} from '@mui/material';
import styled from "@emotion/styled";
import theme from "../../../style/theme";
import BasicBtn from "@/app/components/button/BasicBtn";

export default function AcceptVerification({handleClose}){
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
                <AcceptVerificationWrap>
                    <h3>검증을 수락하셨습니다. <br/>
                    해당 물건에 방문하여 후기부등본을 작성해 주세요. <br/>
                    만료기간까지 후기부등본을 작성하지 않으면 자동으로 종료됩니다.<br/>
                   <strong> 만료기간 : 2024년 00월 00까지</strong>
                   </h3>
                </AcceptVerificationWrap>
                <ButtonWrap>
                    <BasicBtn text={"확인"} handleClick={handleClose}/>
                </ButtonWrap>
            </ThemeProvider>
        </>
    )
}

const AcceptVerificationWrap = styled(Box)`
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
