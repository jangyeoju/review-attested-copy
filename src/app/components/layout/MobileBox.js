
import * as React from "react";
import { Box, Button, IconButton } from "@mui/material";
import {createTheme,Divider,Icon,ThemeProvider} from '@mui/material';
import styled from "@emotion/styled";

import theme from "../../style/theme";

export default function MobileBox({children}){

    return(
        <>
            <MobileBoxWrap>
                    {children}
            </MobileBoxWrap>
        </>
    )
}

const MobileBoxWrap = styled(Box)`
    background-color: #fff;
    width: 64rem;
    height: 100vh;
    margin : 0 auto;
    box-sizing: 0 0 20px rgba(0,0,0,.1);
    @media ${() => theme.device.mobile} {
        width: 100%;
    }
`;
