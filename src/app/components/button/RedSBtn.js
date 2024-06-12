import * as React from "react";
import {createTheme,Divider,Icon,ThemeProvider} from '@mui/material';
import { Box, Button, IconButton } from "@mui/material";
import styled from "@emotion/styled";
import theme from "../../style/theme";

export default function RedSBtn({text,handleClick}){
    const theme = createTheme({
        typography:{
            fontFamily : "Pretendard"
        },
        palette: {
            primary: {
              main: "#FF8484",
            },
         },
    })

    return(
        <>
            <ThemeProvider theme={theme}>
                <RedSButton variant="outlined" onClick={handleClick}>{text}</RedSButton>
            </ThemeProvider>
        </>
    )
}

const RedSButton = styled(Button)`
    font-size: 1.4rem;
    border-radius: 100px;
    padding: .5rem 1.5rem;
    box-shadow: none;
    @media ${() => theme.device.mobile} {
        font-size: 1.2rem;
        padding: .3rem 1.5rem;
        min-width: auto !important;
    }
`;