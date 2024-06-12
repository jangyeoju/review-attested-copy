
import * as React from "react";
import { Box, Button, IconButton } from "@mui/material";
import {createTheme,Divider,Icon,ThemeProvider} from '@mui/material';
import styled from "@emotion/styled";

import theme from "../../style/theme";
export default function MobileContainerBox({children}){
    return(
        <>
            <MobileContainer>
                {children}
            </MobileContainer>
        </>
    )
}

const MobileContainer = styled(Box)`
    padding: 2rem 2rem 0 2rem;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    @media ${() => theme.device.mobile} {
        width: 100%;
        /* height: auto; */
    }
`;