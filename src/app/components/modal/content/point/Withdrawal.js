"use client";

import styled from "@emotion/styled";
import { Box, Button } from "@mui/material";
import { useState } from "react";

import BasicModal from "../../BasicModal";

import BasicBtn from "@/app/components/button/BasicBtn";
import InputText from "@/app/components/input/InputText";
import InputTextEnd from "@/app/components/input/InputTextEnd";

export default function Withdrawal({ handleClose }) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <WithdrawalWrap>
      <div className="point-box">
        <div className="point">
          <h3>인출 가능 포인트</h3>
          <h4>수익기준 (충전금액 제외)</h4>
        </div>
        <h2>50,000 원</h2>
      </div>
      <ul className="input-list">
        <li>
          <h3>예금주</h3>
          <InputText value={"홍길동"} />
        </li>
        <li>
          <h3>은행</h3>
          <InputText />
        </li>
        <li>
          <h3>계좌번호</h3>
          <InputText />
        </li>
        <li>
          <div className="text-box">
            <h3>인출금액</h3>
          </div>
          <div className="input-btn">
            <InputTextEnd
              state={"error"}
              placeholder={"최소 50,000원"}
              InputAdornment={"원"}
              helperText={"50,000원 이상 입력해야 됩니다."}
            />
            <Button variant="contained">전액</Button>
          </div>
        </li>
      </ul>
      <div className="btn-wrap">
        <BasicBtn text={"인출신청"} handleClick={handleClickOpen} />
        <BasicModal
          handleClose={handleClose}
          open={open}
          title={"인출신청"}
          content={"인출신청"}
        />
      </div>
      <div className="text-info">
        <p>
          1. 인출 가능한 포인트 잔액이 50,000원 이상인 경우 인출 할 수 있습니다.
          <br />
          2. 인출 시 계좌는 본인 계좌만 가능합니다.
          <br />
          3. 인출 신청은 월에 1회만 가능합니다.
          <br />
          4. 인출신청후 인출완료까지는 영업일 기준 5일 소요됩니다.
          <br />
          5. 계좌정보 오류로 인한 인출에 대해서는 당사가 책임지지 않습니다.
        </p>
      </div>
    </WithdrawalWrap>
  );
}

const WithdrawalWrap = styled(Box)`
  .point-box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #d9d9d9;
    width: 100%;
    .point {
      padding-bottom: 2rem;
      h3 {
        font-size: 1.6rem;
        color: #0e301d;
        font-weight: 500;
        line-height: 150%;
      }
      h4 {
        font-size: 1.4rem;
        color: #ff8484;
        line-height: 150%;
        font-weight: 400;
      }
    }
    h2 {
      font-size: 1.8rem;
      color: #003bd4;
      font-weight: 600;
    }
  }
  .input-list {
    padding: 2rem 0;
    li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 1rem;
      width: 100%;
      .text-box {
        height: 56px;
      }
      & > div {
        /* width: 100%; */
      }
      .input-btn {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        width: 100%;
        button {
          margin-left: 1rem;
          box-shadow: none;
          font-size: 1.6rem;
          color: #fff;
          padding: 1.5rem 2rem;
          width: 25%;
        }
      }
      h3 {
        min-width: 13rem;
        max-width: 13rem;
        font-size: 1.6rem;
        color: #0e301d;
        font-weight: 500;
      }
    }
  }
  .text-info {
    padding: 2rem 0;
    p {
      font-size: 1.4rem;
      color: #888888;
      line-height: 150%;
      font-weight: 400;
    }
  }
  .btn-wrap {
    width: 100%;
    button {
      width: 100%;
      padding: 1rem 2rem;
    }
  }
`;
