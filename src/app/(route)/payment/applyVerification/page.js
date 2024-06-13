"use client";
import styled from "@emotion/styled";
import { Box, Button, IconButton } from "@mui/material";
import { createTheme, Divider, Icon, ThemeProvider } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import * as React from "react";

import theme from "../../../../app/style/theme";
import Footer from "../../../components/footer/Footer";
import Nav from "../../../components/nav/Nav";

import AttestedCopy from "@/app/components/attestedCopy/attestedCopy";
import BasicBtn from "@/app/components/button/BasicBtn";
import BasicSBtn from "@/app/components/button/BasicSBtn";
import InputText from "@/app/components/input/InputText";
import InputTextEnd from "@/app/components/input/InputTextEnd";
import ContainerBox from "@/app/components/layout/ContainerBox";
import BasicModal from "@/app/components/modal/BasicModal";
import Title from "@/app/components/title/Title";



export default function ApplyVerificationPayment() {
  const theme = createTheme({
    typography: {
      fontFamily: "Pretendard",
    },
    palette: {
      primary: {
        main: "#28E67C",
      },
    },
  });

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Nav />
        <ContainerBox>
          <Title text={"결제하기"} />
          <PaymentWrap>
            <LeftBox>
              <ReviewBox>
                <AttestedCopy
                  tag1={true}
                  tag2={true}
                  tag3={true}
                  price={"3,300원"}
                />
              </ReviewBox>
              <div className="search-result">
                <h2>
                  사무소 : <span>홍길동 사무소 (02-333-4444)</span>
                </h2>
                <h2>
                  공인중개사 : <span>홍길동 </span>{" "}
                </h2>
                <h2>
                  주소 : <span>서울시 강남구 논현동222</span>
                </h2>
              </div>
              <div className="price-box">
                <h3>결제금액</h3>
                <h2>
                  165,000<span>원</span>
                </h2>
              </div>
            </LeftBox>
            <PaymentBox>
              <ul>
                <li>
                  <div className="coupon-list">
                    <div className="coupon-list">
                      <div className="text-box">
                        <h3>결제할 금액</h3>
                      </div>
                      <div className="text-box">
                        <h2>
                          165,500<span>원</span>
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
                <BasicBtn text={"결제"} handleClick={handleClickOpen} />
                <BasicModal
                  handleClose={handleClose}
                  open={open}
                  title={"검증신청 완료"}
                  content={"검증신청완료"}
                />
              </ButtonWrap>
            </PaymentBox>
          </PaymentWrap>
        </ContainerBox>
        <Footer />
      </ThemeProvider>
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
  padding-bottom: 2rem;
  border-bottom: 1px solid #d9d9d9;
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

const LeftBox = styled(Box)`
  width: 49%;
  margin-bottom: 5rem;
  .price-box {
    border: 1px solid #d9d9d9;
    background-color: #fff;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem;
    margin: 2rem 0;
    width: 100%;
    h3 {
      font-size: 2rem;
      color: #0e301d;
      font-weight: 500;
    }
    h2 {
      font-size: 2.5rem;
      color: #00d45e;
      font-weight: bold;
      span {
        font-size: 1.4rem;
        color: #888888;
        font-weight: 400;
        margin-left: 0.5rem;
      }
    }
  }
  .search-result {
    margin: 2rem 0;
    h2 {
      font-size: 2rem;
      color: #0e301d;
      line-height: 150%;
    }
    span {
      font-size: 2rem;
      color: #0e301d;
      font-weight: 400;
      margin-left: 0.5rem;
    }
  }
  @media ${() => theme.device.mobile} {
    width: 100%;
    .search-result {
      h2,
      span {
        font-size: 1.8rem;
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
