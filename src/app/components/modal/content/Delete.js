import styled from "@emotion/styled";
import { Box, Button } from "@mui/material";
import * as React from "react";

import BasicModal from "../BasicModal";

import BasicSBtn from "@/app/components/button/BasicSBtn";

export default function Delete({ handleClose }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <DeleteWrap>
        <h3>
          삭제 후 복원되지 않습니다.
          <br />
          삭제하시겠습니까?
        </h3>
        <ButtonWrap>
          <BasicSBtn text={"취소"} handleClick={handleClose} />
          <Button color="error" variant="contained" onClick={handleClickOpen}>
            삭제
          </Button>
          <BasicModal
            handleClose={handleClose}
            open={open}
            title={"삭제"}
            content={"알림"}
            text={"삭제되었습니다."}
          />
        </ButtonWrap>
      </DeleteWrap>
    </>
  );
}

const DeleteWrap = styled(Box)`
  padding: 5rem 0 0 0;
  h3 {
    font-size: 1.6rem;
    line-height: 150%;
    text-align: center;
    color: #0e301d;
    font-weight: 400;
  }
`;

const ButtonWrap = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 5rem;
  button {
    width: 49%;
    box-shadow: none;
    font-size: 1.6rem;
    border-radius: 4px;
    padding: 1.5rem 2rem;
  }
  button:last-of-type {
    background-color: #ff8484;
  }
`;
