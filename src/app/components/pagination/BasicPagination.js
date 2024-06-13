import * as React from "react";
import { Box, Button, IconButton } from "@mui/material";
import { createTheme, Divider, Icon, ThemeProvider } from "@mui/material";
import styled from "@emotion/styled";
import theme from "../../style/theme";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function BasicPagination() {
  return (
    <>
      <PaginationBox count={5} color="primary" />
    </>
  );
}

const PaginationBox = styled(Pagination)`
  button {
    font-size: 1.6rem;
  }
  .Mui-selected {
    color: #fff !important;
  }
  @media ${() => theme.device.mobile} {
    button {
      font-size: 1.4rem;
    }
  }
`;
