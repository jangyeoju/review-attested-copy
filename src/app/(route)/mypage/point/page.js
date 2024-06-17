"use client";

import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { useState } from "react";
import "../../../style/global.css";

import BasicBtn from "@/app/components/button/BasicBtn";
import MobileBox from "@/app/components/layout/MobileBox";
import BasicModal from "@/app/components/modal/BasicModal";
import MobileNav from "@/app/components/nav/MobileNav";

export default function Point() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [open2, setOpen2] = useState(false);

  const handleClickOpen2 = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  const [open3, setOpen3] = useState(false);

  const handleClickOpen3 = () => {
    setOpen3(true);
  };

  const handleClose3 = () => {
    setOpen3(false);
  };

  const [open4, setOpen4] = useState(false);

  const handleClickOpen4 = () => {
    setOpen4(true);
  };

  const handleClose4 = () => {
    setOpen4(false);
  };

  const [open5, setOpen5] = useState(false);

  const handleClickOpen5 = () => {
    setOpen5(true);
  };

  const handleClose5 = () => {
    setOpen5(false);
  };

  const [open6, setOpen6] = useState(false);

  const handleClickOpen6 = () => {
    setOpen6(true);
  };

  const handleClose6 = () => {
    setOpen6(false);
  };

  const [openModal, setOpenModal] = useState(false);

  const handleClickModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const [openModal2, setOpenModal2] = useState(false);

  const handleClickModal2 = () => {
    setOpenModal2(true);
  };

  const handleCloseModal2 = () => {
    setOpenModal2(false);
  };

  return (
    <MobileBox>
      <MobileNav text={"포인트"} />
      <PointWrap>
        <div className="point-box">
          <h5>사용가능 포인트</h5>
          <h2>
            10,000,000 <span>원</span>
          </h2>
          <div className="button-wrap">
            <BasicBtn
              text={"인출"}
              color={"error"}
              handleClick={handleClickModal}
            />
            {/* 
                                    본인인증 모달
                                    <BasicModal handleClose={handleCloseModal} open={openModal} title={"본인인증"} content={"본인인증"} /> 
                                */}
            <BasicModal
              handleClose={handleCloseModal}
              open={openModal}
              title={"인출"}
              content={"인출"}
            />

            <BasicBtn text={"충전"} handleClick={handleClickModal2} />
            <BasicModal
              handleClose={handleCloseModal2}
              open={openModal2}
              title={"포인트 충전"}
              content={"포인트충전"}
            />
          </div>
        </div>
      </PointWrap>
      <PointList>
        <div className="point-list">
          <div className="day">
            <Date>
              <h5>2024-01-05</h5>
            </Date>
            <DetailPoint onClick={handleClickOpen}>
              <div className="point-name">
                <h3>후기 판매 수익</h3>
                <p>10:45</p>
              </div>
              <h3 className="plus">+ 1,800 원</h3>
            </DetailPoint>
            <BasicModal
              handleClose={handleClose}
              open={open}
              title={"상세내역"}
              content={"상세내역"}
              subTitle={"후기 판매 수익"}
            />

            <DetailPoint onClick={handleClickOpen2}>
              <div className="point-name">
                <h3>포인트 인출</h3>
                <p>10:45</p>
              </div>
              <h3 className="minus">- 1,800 원</h3>
            </DetailPoint>
            <BasicModal
              handleClose={handleClose2}
              open={open2}
              title={"상세내역"}
              content={"상세내역"}
              subTitle={"포인트 인출"}
            />

            <DetailPoint onClick={handleClickOpen3}>
              <div className="point-name">
                <h3>팔로워 수익</h3>
                <p>10:45</p>
              </div>
              <h3 className="plus">+ 1,800 원</h3>
            </DetailPoint>
            <BasicModal
              handleClose={handleClose3}
              open={open3}
              title={"상세내역"}
              content={"상세내역"}
              subTitle={"팔로워 수익"}
            />
          </div>
          <div className="day">
            <Date>
              <h5>2024-01-05</h5>
            </Date>
            <DetailPoint onClick={handleClickOpen4}>
              <div className="point-name">
                <h3>포인트 충전</h3>
                <p>10:45</p>
              </div>
              <h3 className="plus">+ 1,800 원</h3>
            </DetailPoint>
            <BasicModal
              handleClose={handleClose4}
              open={open4}
              title={"상세내역"}
              content={"상세내역"}
              subTitle={"포인트 충전"}
            />

            <DetailPoint onClick={handleClickOpen5}>
              <div className="point-name">
                <h3>포인트 충전</h3>
                <p>10:45</p>
              </div>
              <h3 className="plus">+ 1,800 원</h3>
            </DetailPoint>
            <BasicModal
              handleClose={handleClose5}
              open={open5}
              title={"상세내역"}
              content={"상세내역"}
              subTitle={"포인트 충전"}
              receipt={true}
            />

            <DetailPoint onClick={handleClickOpen6}>
              <div className="point-name">
                <h3>후기조회비</h3>
                <p>10:45</p>
              </div>
              <h3 className="minus">- 1,800 원</h3>
            </DetailPoint>
            <BasicModal
              handleClose={handleClose6}
              open={open6}
              title={"상세내역"}
              content={"상세내역"}
              subTitle={"후기 조회비"}
            />
          </div>
        </div>
      </PointList>
    </MobileBox>
  );
}

const PointWrap = styled(Box)`
  padding: 9rem 2rem 2rem 2rem;
  position: sticky;
  top: 0;
  background-color: #fff;
  .point-box {
    padding: 3rem;
    border: 1px solid #d9d9d9;
    border-radius: 8px;
    h5 {
      font-size: 1.4rem;
      color: #888888;
      line-height: 150%;
      font-weight: 400;
    }
    h2 {
      font-size: 2.5rem;
      color: #0e301d;
      font-weight: 600;
      span {
        font-size: 2rem;
        font-weight: 400;
      }
    }
    .button-wrap {
      margin-top: 2rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      button {
        padding: 1rem 2rem;
        width: 49%;
      }
      button:first-of-type {
        background-color: #ff8484;
      }
    }
  }
`;

const PointList = styled(Box)`
  overflow-y: scroll;
  .point-list {
    .day {
      & > div:last-of-type {
        border-bottom: none;
      }
    }
  }
`;

const Date = styled(Box)`
  width: 100%;
  background-color: #f6f6f6;
  padding: 1.5rem 2rem;
  h5 {
    font-size: 1.6rem;
    color: #888888;
    font-weight: 400;
  }
`;

const DetailPoint = styled(Box)`
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #d9d9d9;
  cursor: pointer;

  h3 {
    font-size: 1.8rem;
    font-weight: 500;
    line-height: 150%;
  }
  .plus {
    color: #003bd4;
  }
  .minus {
    color: #0e301d;
  }
  .point-name {
    h3 {
      font-size: 1.8rem;
      color: #0e301d;
      font-weight: 500;
      line-height: 150%;
    }
    p {
      font-size: 1.4rem;
      color: #888888;
      line-height: 150%;
      font-weight: 400;
    }
  }
`;
