
import * as React from "react";
import { Box, Button, IconButton } from "@mui/material";
import {createTheme,Divider,Icon,ThemeProvider} from '@mui/material';
import styled from "@emotion/styled";
import theme from "../../../app/style/theme";
export default function WriteTitle({num, text}){
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
                <WriteTitleWrap>
                    <div className="num-box">
                        {num}
                    </div>
                    <h2>{text}</h2>
                </WriteTitleWrap>
            </ThemeProvider>
        </>
    )
}

const WriteTitleWrap = styled(Box)`
    display: flex;
    align-items: center;
    background-color: #F2FFF8;
    border-top: 2px solid #00D45E;
    padding: 1.4rem 2rem;
    .num-box{
        padding: .5rem 1rem;
        background-color: #00D45E;
        border-radius: 100px;
        color: #fff;
        font-size: 1.6rem;
        margin-right: 1rem;
    }
    h2{
        font-size: 1.6rem;
        color: #0E301D;
        font-weight: 500;

    }
`;