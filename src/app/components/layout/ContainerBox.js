
import * as React from "react";
import { Box, Button, IconButton } from "@mui/material";
import styled from "@emotion/styled";
import theme from "../../style/theme";

export default function ContainerBox({children}){
    return(
        <>
            <ContainerBoxWrap>
                {children}
            </ContainerBoxWrap>
        </>
    )
}

const ContainerBoxWrap = styled(Box)`
    width: 118rem;
    margin: 0 auto;
    @media ${() => theme.device.desktop} {
      width: 100%;
      padding: 0 5%;
  }
`;
