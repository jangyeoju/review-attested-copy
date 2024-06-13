import * as React from "react";
import { Box, Button, IconButton } from "@mui/material";
import { createTheme, Divider, Icon, ThemeProvider } from "@mui/material";
import styled from "@emotion/styled";
import theme from "../../../../../app/style/theme";
import BasicBtn from "@/app/components/button/BasicBtn";

export default function Detail({ title, receipt }) {
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

  return (
    <>
      <ThemeProvider theme={theme}>
        <DetailWrap>
          <div className="point-info">
            <h2>{title}</h2>
            {title == "포인트 인출" || title == "후기 조회비" ? (
              <h3 className="minus">- 1,800원</h3>
            ) : (
              <h3>+ 1,800 원</h3>
            )}
          </div>
          <div className="content">
            <div className="title">
              <h3>내용</h3>
            </div>
            {title == "포인트 충전" && !receipt ? (
              <p>포인트 충전</p>
            ) : title == "포인트 충전" && receipt ? (
              <p>결제수단 국민 신용카드(5150)</p>
            ) : (
              <p>서울시 강남구 논현동 120-210호</p>
            )}
          </div>
          <ul className="content-detail">
            {title == "포인트 충전" && !receipt ? (
              <>
                <li>
                  <h4>결제수단</h4>
                  <h4>국민 신용카드(5150)</h4>
                </li>
                <li>
                  <h4>일시</h4>
                  <h4>2023-07-31 10:45</h4>
                </li>
              </>
            ) : title == "포인트 충전" && receipt ? (
              <>
                <li>
                  <h4>일시</h4>
                  <h4>2023-07-31 10:45</h4>
                </li>
              </>
            ) : title == "포인트 인출" ? (
              <>
                <li>
                  <h4>입금처</h4>
                  <h4>홍길동</h4>
                </li>
                <li>
                  <h4>계좌</h4>
                  <h4>국민은행(000—1—1--)</h4>
                </li>
                <li>
                  <h4>일시</h4>
                  <h4>2023-07-31 10:45</h4>
                </li>
              </>
            ) : (
              <>
                <li>
                  <h4>판매가</h4>
                  <h4>
                    3,300 <span>원</span>
                  </h4>
                </li>
                <li>
                  <h4>판매자</h4>
                  <h4>심사임당</h4>
                </li>
                <li>
                  <h4>일시</h4>
                  <h4>2023-07-31 10:45</h4>
                </li>
              </>
            )}
          </ul>
          {title == "포인트 충전" && receipt ? (
            <div className="btn-wrap">
              <BasicBtn text={"온라인 영수증"} href={"/mypage/receipt"} />
            </div>
          ) : (
            <></>
          )}
        </DetailWrap>
      </ThemeProvider>
    </>
  );
}

const DetailWrap = styled(Box)`
  .point-info {
    padding: 0 2rem 2rem 2rem;
    border-bottom: 1px solid #d9d9d9;
    width: 100%;
    .minus {
      color: #0e301d;
    }
    h2 {
      font-size: 1.6rem;
      color: #0e301d;
      font-weight: 500;
      line-height: 150%;
    }
    h3 {
      font-size: 1.8rem;
      color: #003bd4;
      font-weight: bold;
      line-height: 150%;
    }
  }
  .content {
    .title {
      background-color: #f6f6f6;
      padding: 1rem 2rem;
      margin-bottom: 1rem;
      h3 {
        font-size: 1.6rem;
        color: #0e301d;
        font-weight: 500;
      }
    }
    p {
      font-size: 1.6rem;
      color: #0e301d;
      line-height: 150%;
      width: 100%;
      padding: 0 2rem 1rem 2rem;
      border-bottom: 1px solid #d9d9d9;
    }
  }
  .content-detail {
    margin-top: 2rem;
    padding: 0 2rem;
    li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 1rem;
      h4 {
        font-size: 1.6rem;
        color: #0e301d;
        font-weight: 500;
      }
      span {
        font-size: 1.4rem;
        color: #888888;
        font-weight: 400;
      }
    }
  }
  .btn-wrap {
    margin-top: 2rem;
    button {
      padding: 1rem 2rem;
      width: 100%;
    }
  }
`;
