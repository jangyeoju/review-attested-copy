"use client";

import styled from "@emotion/styled";
import { Box, Button } from "@mui/material";
import * as React from "react";
import "../../../style/global.css";

import theme from "../../../../app/style/theme";
import BasicModal from "../../modal/BasicModal";
import AttestedCopy from "../attestedCopy";

export default function AttestedCopyMobile({ type, view }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [open2, setOpen2] = React.useState(false);

  const handleClickOpen2 = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  const [open3, setOpen3] = React.useState(false);

  const handleClickOpen3 = () => {
    setOpen3(true);
  };

  const handleClose3 = () => {
    setOpen3(false);
  };

  const [open4, setOpen4] = React.useState(false);

  const handleClickOpen4 = () => {
    setOpen4(true);
  };

  const handleClose4 = () => {
    setOpen4(false);
  };

  const [open5, setOpen5] = React.useState(false);

  const handleClickOpen5 = () => {
    setOpen5(true);
  };

  const handleClose5 = () => {
    setOpen5(false);
  };

  return (
    <AttestedCopyMobileWrap>
      <AttestedCopyMobileBox className={type == "완료" ? "complete" : ""}>
        {type == "작성중" ? (
          <AttestedCopy
            tag1={true}
            tag2={false}
            tag3={false}
            price={"3,300원"}
            view={view}
            type={type}
          />
        ) : (
          <AttestedCopy
            tag1={true}
            tag2={true}
            tag3={true}
            price={"3,300원"}
            view={view}
          />
        )}
        {type == "작성중" ? (
          <div className="delete-wrap">
            <DeleteBtn
              variant="outlined"
              color="error"
              onClick={handleClickOpen}
            >
              삭제
            </DeleteBtn>
            <BasicModal
              handleClose={handleClose}
              open={open}
              title={"삭제"}
              content={"삭제"}
            />
          </div>
        ) : (
          <div className="info-wrap">
            {type == "등록" ? (
              <h3>
                현재까지 수익 : <span>-</span> 원
              </h3>
            ) : type == "검토중" ? (
              <h3>완료예정일 : 2024-12-31</h3>
            ) : type == "검증완료" ? (
              <h3>검증일 : 2024-12-31</h3>
            ) : type == "반려" ? (
              <>
                <h5></h5>
              </>
            ) : type == "검증진행" || type == "검증포기" ? (
              <>
                <h3>완료일 : 2024-12-31</h3>
              </>
            ) : (
              <h4>2023-04-17 11:23, 포인트, 쿠폰 3,300원</h4>
            )}
            <div className="button-wrap">
              {type == "기간" ? <Btn variant="contained">7일 남음</Btn> : <></>}
              {type == "접수" ? (
                <OutlinedBtn variant="outlined">검증 접수</OutlinedBtn>
              ) : (
                <></>
              )}
              {type == "진행" ? (
                <IngBtn variant="outlined">검증 진행</IngBtn>
              ) : (
                <></>
              )}
              {type == "완료" ? (
                <Btn variant="contained">검증 완료</Btn>
              ) : (
                <></>
              )}
              {type == "거절" ? (
                <RefuseBtn variant="contained">검증 거절</RefuseBtn>
              ) : (
                <></>
              )}
              {type == "검토중" ? (
                <IngBtn variant="outlined">검토중</IngBtn>
              ) : (
                <></>
              )}
              {type == "반려" ? (
                <>
                  <div className="btn-list">
                    <RefuseBtn
                      variant="contained"
                      color="secondary"
                      onClick={handleClickOpen2}
                    >
                      반려사유
                    </RefuseBtn>
                    <OutlinedBtn variant="outlined">수정</OutlinedBtn>
                    <DeleteBtn
                      variant="outlined"
                      color="error"
                      onClick={handleClickOpen}
                    >
                      삭제
                    </DeleteBtn>
                    <BasicModal
                      handleClose={handleClose}
                      open={open}
                      title={"삭제"}
                      content={"삭제"}
                    />
                    <BasicModal
                      handleClose={handleClose2}
                      open={open2}
                      title={"반려사유"}
                      content={"반려"}
                    />
                  </div>
                </>
              ) : (
                <></>
              )}
              {type == "거절수락" ? (
                <>
                  <div className="btn-list">
                    <RefuseBtn
                      variant="contained"
                      color="secondary"
                      onClick={handleClickOpen3}
                    >
                      거절
                    </RefuseBtn>
                    <BasicModal
                      handleClose={handleClose3}
                      open={open3}
                      title={"검증 거절"}
                      content={"검증거절"}
                    />
                    <Btn variant="contained" onClick={handleClickOpen4}>
                      수락
                    </Btn>
                    <BasicModal
                      handleClose={handleClose4}
                      open={open4}
                      title={"검증 수락"}
                      content={"검증수락"}
                    />
                  </div>
                </>
              ) : (
                <></>
              )}
              {type == "검증진행" ? (
                <IngBtn variant="outlined" href="/mypage/verificationProgress">
                  검증 진행
                </IngBtn>
              ) : (
                <></>
              )}
              {type == "검증포기" ? (
                <div className="red-btn">
                  <Btn
                    variant="contained"
                    color="error"
                    onClick={handleClickOpen5}
                  >
                    검증 포기
                  </Btn>
                  <BasicModal
                    handleClose={handleClose5}
                    open={open5}
                    title={"검증 포기"}
                    content={"검증포기"}
                  />
                </div>
              ) : (
                <></>
              )}
              {type == "검증완료" ? (
                <Btn variant="contained">검증완료</Btn>
              ) : (
                <></>
              )}
            </div>
          </div>
        )}
      </AttestedCopyMobileBox>
    </AttestedCopyMobileWrap>
  );
}

const AttestedCopyMobileWrap = styled(Box)`
  .complete {
    background-color: #eef8f6;
    border-radius: 16px;
    & > div {
      background-color: #eef8f6;
    }
  }
`;

const AttestedCopyMobileBox = styled(Box)`
  border-radius: 16px;
  border: 1px solid #d9d9d9;
  background-color: #fff;
  transition: all ease 0.3s;
  &:hover {
    box-shadow: 4px 12px 20px rgba(0, 0, 0, 0.08);
    /* border-color: transparent; */
  }
  & > div {
    box-shadow: none;
    padding: 2rem;
  }
  .delete-wrap {
    padding: 0 2rem 2rem 2rem;
  }

  .info-wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem 2rem;
    border-top: 1px solid #d9d9d9;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    h3 {
      font-size: 1.6rem;
      color: #0e301d;
      font-weight: 500;
      span {
        font-size: 1.6rem;
        font-weight: bold;
        color: #00d45e;
      }
    }
    h4 {
      font-size: 1.6rem;
      color: #888888;
      font-weight: 400;
    }
    .btn-list {
      display: flex;
      align-items: flex-end;
      justify-content: flex-end;
      width: 100%;
      button {
        margin-right: 1rem;
      }
      button:last-of-type {
        margin: 0;
      }
    }
    .red-btn {
      button {
        background-color: #ff8484;
      }
    }
  }
  @media ${() => theme.device.mobile4} {
    .info-wrap {
      flex-direction: column;
      align-items: flex-start;
      h3 {
        margin-bottom: 1rem;
      }
      h4 {
        margin-bottom: 1rem;
      }
    }
  }
`;

const Btn = styled(Button)`
  box-shadow: none;
  font-size: 1.4rem;
  color: #fff;
  font-weight: 600;
  border-radius: 8px;
`;

const OutlinedBtn = styled(Button)`
  box-shadow: none;
  font-size: 1.4rem;
  color: #fff;
  font-weight: 600;
  border-radius: 8px;
  color: #00d45e;
`;

const IngBtn = styled(Button)`
  box-shadow: none;
  font-size: 1.4rem;
  color: #fff;
  font-weight: 600;
  border-radius: 8px;
  color: #00d45e;
  background-color: #f2fff8;
`;

const RefuseBtn = styled(Button)`
  box-shadow: none;
  font-size: 1.4rem;
  color: #0e301d;
  font-weight: 600;
  border-radius: 8px;
  background-color: #f6f6f6;
`;

const DeleteBtn = styled(Button)`
  box-shadow: none;
  font-size: 1.4rem;
  color: #ff8484;
  font-weight: 600;
  border-radius: 8px;
`;
