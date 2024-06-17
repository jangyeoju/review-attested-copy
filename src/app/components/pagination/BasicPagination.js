import styled from "@emotion/styled";
import Pagination from "@mui/material/Pagination";
import * as React from "react";

import theme from "../../style/theme";

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
