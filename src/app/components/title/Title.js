
import * as React from "react";
import { Box, Button, IconButton } from "@mui/material";
import {createTheme,Divider,Icon,ThemeProvider} from '@mui/material';
import styled from "@emotion/styled";
import theme from "../../../app/style/theme";

export default function Title({text}){
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
                <TitleWrap>
                    <h2>{text}</h2>
                </TitleWrap>
            </ThemeProvider>
        </>
    )
}

const TitleWrap = styled(Box)`
    padding-bottom: 2rem;
    width: 100%;
    border-bottom: 2px solid #00D45E;
    margin: 14rem 0 3rem;
    h2{
        font-size: 2rem;
        color : #0E301D;
        font-weight: bold;
    }
    @media ${() => theme.device.mobile} {
        margin-top: 10rem;
    }
`;