"use client";

import styled from "@emotion/styled";
import { FormControl, MenuItem, Select } from "@mui/material";
import { useState } from "react";

export default function SearchFilter() {
  const [select, setSelect] = useState(10);

  const handleChange = (event) => {
    setSelect(event.target.value);
  };

  return (
    <FormControl sx={{ minWidth: 100 }} size="small">
      <StyledSelect
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={select}
        onChange={handleChange}
      >
        <StyledMenuItem value={10}>최신순</StyledMenuItem>
        <StyledMenuItem value={20}>등록순</StyledMenuItem>
        <StyledMenuItem value={30}>등록순</StyledMenuItem>
      </StyledSelect>
    </FormControl>
  );
}

export const StyledSelect = styled(Select)`
  font-size: 1.4rem;
`;

export const StyledMenuItem = styled(MenuItem)`
  font-size: 1.4rem;
`;
