"use client";

import styled from "@emotion/styled";
import { Box, Button } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import * as React from "react";

import theme from "../../../app/style/theme";
import Footer from "../../components/footer/Footer";
import Nav from "../../components/nav/Nav";

import AttestedCopy from "@/app/components/attestedCopy/attestedCopy";
import BasicBtn from "@/app/components/button/BasicBtn";
import BasicSBtn from "@/app/components/button/BasicSBtn";
import InputTextEnd from "@/app/components/input/InputTextEnd";
import ContainerBox from "@/app/components/layout/ContainerBox";
import BasicModal from "@/app/components/modal/BasicModal";
import Title from "@/app/components/title/Title";

export default function Payment() {
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

  return (
    <>
      <Nav />
      <ContainerBox>
        <Title text={"결제하기"} />
        <PaymentWrap>
          <ReviewBox>
            <AttestedCopy
              tag1={true}
              tag2={true}
              tag3={true}
              price={"3,300원"}
            />
          </ReviewBox>
          <PaymentBox>
            <ul>
              <li>
                <div className="coupon-list">
                  <div className="text-box">
                    <h3>상품 금액</h3>
                  </div>
                  <div className="text-box">
                    <h4>3,300원</h4>
                  </div>
                </div>
              </li>
              <li>
                <div className="coupon-list">
                  <div className="text-box">
                    <h3>쿠폰</h3>
                  </div>
                  <div className="input-box-wrap">
                    <div className="input-box">
                      <InputTextEnd state={"disabled"} InputAdornment={"원"} />
                      <p>사용가능한 쿠폰 : 3개</p>
                    </div>
                    <BasicBtn text={"선택"} handleClick={handleClickOpen} />
                    <BasicModal
                      handleClose={handleClose}
                      open={open}
                      title={"쿠폰 선택"}
                      content={"쿠폰선택"}
                    />
                  </div>
                </div>
                <div className="coupon-list">
                  <div className="text-box">
                    <h3>보유 포인트</h3>
                  </div>
                  <div className="input-box-wrap">
                    <div className="input-box">
                      <InputTextEnd
                        state={"error"}
                        helperText={"보유포인트를 초과할 수 없습니다."}
                        InputAdornment={"원"}
                      />
                      <div className="btn-wrap">
                        <p>5,500원</p>
                        <Button variant="outlined" onClick={handleClickOpen2}>
                          포인트 충전
                        </Button>
                        <BasicModal
                          handleClose={handleClose2}
                          open={open2}
                          title={"포인트 충전"}
                          content={"포인트충전"}
                        />
                      </div>
                    </div>
                    <BasicBtn text={"사용"} state={"disabled"} />
                  </div>
                </div>
              </li>
              <li>
                <div className="coupon-list">
                  <div className="coupon-list">
                    <div className="text-box">
                      <h3>상품 금액</h3>
                    </div>
                    <div className="text-box">
                      <h2>
                        3,300<span>원</span>
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="coupon-list">
                  <div className="coupon-list">
                    <div className="text-box">
                      <h3>결제 수단</h3>
                    </div>
                    <div className="text-box">
                      <FormControl>
                        <StyledRadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                        >
                          <StyledFormControlLabel
                            value="female"
                            control={<Radio />}
                            label="신용카드 결제"
                          />
                          <StyledFormControlLabel
                            value="male"
                            control={<Radio />}
                            label="간편 결제"
                          />
                        </StyledRadioGroup>
                      </FormControl>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <ButtonWrap>
              <BasicSBtn text={"취소"} />
              <BasicBtn text={"결제"} handleClick={handleClickOpen3} />
              <BasicModal
                handleClose={handleClose3}
                open={open3}
                title={"결제 완료"}
                content={"결제완료"}
              />
            </ButtonWrap>
          </PaymentBox>
        </PaymentWrap>
      </ContainerBox>
      <Footer />
    </>
  );
}

const PaymentWrap = styled(Box)`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  @media ${() => theme.device.mobile} {
    flex-direction: column;
  }
`;

const ReviewBox = styled(Box)`
  width: 49%;
  & > div {
    box-shadow: none !important;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }
  @media ${() => theme.device.mobile} {
    width: 100%;
    margin-bottom: 2rem;
  }
`;

const PaymentBox = styled(Box)`
  width: 49%;
  ul {
    li {
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      /* margin-bottom: 2rem; */
      .coupon-list {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        width: 100%;
      }
      .text-box {
        height: 5.8rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      h3 {
        font-size: 1.6rem;
        color: #0e301d;
        font-weight: 500;
      }
      h4 {
        font-size: 1.8rem;
        color: #0e301d;
        font-weight: bold;
      }
      h2 {
        font-size: 2.5rem;
        color: #00d45e;
        font-weight: bold;
        span {
          color: #888888;
          font-size: 1.6rem;
          font-weight: 300;
          margin-left: 0.5rem;
        }
      }
      .btn-wrap {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        margin-top: 1rem;
        button {
          font-size: 1.4rem;
          box-shadow: none;
          color: #00d45e;
          width: 30% !important;
          padding: 0.3rem 0.5rem !important;
        }
      }
      .input-box-wrap {
        display: flex;
        align-items: flex-start;
        width: 70%;
        button {
          width: 30%;
        }
      }
      .input-box {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        width: 100%;
        margin-right: 1rem;
        p {
          font-size: 1.4rem;
          line-height: 200%;
          color: #888888;
        }
      }
    }
    li:nth-of-type(2) {
      .coupon-list:first-of-type {
        margin-bottom: 2rem;
        padding-top: 2rem;
      }
      .coupon-list:last-of-type {
        padding-bottom: 2rem;
      }
    }
  }
  @media ${() => theme.device.mobile} {
    width: 100%;
    ul {
      li {
        .btn-wrap {
          button {
            width: 50% !important;
          }
        }
      }
    }
  }
`;

const StyledRadioGroup = styled(RadioGroup)`
  label:last-of-type {
    margin: 0;
  }
`;

const StyledFormControlLabel = styled(FormControlLabel)`
  span {
    font-size: 1.6rem;
  }
`;

const ButtonWrap = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2rem 0 8rem 0;
  button {
    width: 49%;
  }
`;
