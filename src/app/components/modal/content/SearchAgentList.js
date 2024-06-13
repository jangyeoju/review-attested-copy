import styled from "@emotion/styled";
import CloseIcon from "@mui/icons-material/Close";
import { createTheme, Divider, Icon, ThemeProvider } from "@mui/material";
import { Box, Button, IconButton } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import * as React from "react";

import theme from "../../../style/theme";
import BasicPagination from "../../pagination/BasicPagination";

import BasicBtn from "@/app/components/button/BasicBtn";

export default function SearchAgentList({ handleClose }) {
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
        <SearchListWrap>
          <StyledTextField
            id="outlined-basic"
            variant="outlined"
            type="text"
            value="홍길동"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <CloseIcon />
                </InputAdornment>
              ),
            }}
          />
          <div className="table-name">
            <h2>검색결과</h2>
          </div>
          {/* <div className="result-none">
                        <p>검색결과가 없습니다.</p>
                    </div> */}
          <table>
            <tbody>
              <tr>
                <th className="w-10">선택</th>
                <th className="w-30">사무소</th>
                <th className="w-25">공인중개사</th>
                <th className="w-40">주소</th>
              </tr>
              <tr>
                <td className="w-10">
                  <input type="radio" name="coupon"></input>
                </td>
                <td className="w-30">
                  홍길동 공인중개사
                  <br />
                  (02-233-4444)
                </td>
                <td className="w-25">홍길동</td>
                <td className="w-40">서울시 강남구 논현동 222</td>
              </tr>
              <tr>
                <td className="w-10">
                  <input type="radio" name="coupon"></input>
                </td>
                <td className="w-30">
                  홍길동 공인중개사
                  <br />
                  (02-233-4444)
                </td>
                <td className="w-25">홍길동</td>
                <td className="w-40">서울시 강남구 논현동 222</td>
              </tr>
              <tr>
                <td className="w-10">
                  <input type="radio" name="coupon"></input>
                </td>
                <td className="w-30">
                  홍길동 공인중개사
                  <br />
                  (02-233-4444)
                </td>
                <td className="w-25">홍길동</td>
                <td className="w-40">서울시 강남구 논현동 222</td>
              </tr>
              <tr>
                <td className="w-10">
                  <input type="radio" name="coupon"></input>
                </td>
                <td className="w-30">
                  홍길동 공인중개사
                  <br />
                  (02-233-4444)
                </td>
                <td className="w-25">홍길동</td>
                <td className="w-40">서울시 강남구 논현동 222</td>
              </tr>
              <tr>
                <td className="w-10">
                  <input type="radio" name="coupon"></input>
                </td>
                <td className="w-30">
                  홍길동 공인중개사
                  <br />
                  (02-233-4444)
                </td>
                <td className="w-25">홍길동</td>
                <td className="w-40">서울시 강남구 논현동 222</td>
              </tr>
            </tbody>
          </table>
          <div className="dp-cen">
            <BasicPagination />
          </div>
          <ButtonWrap>
            <BasicBtn text={"확인"} handleClick={handleClose} />
          </ButtonWrap>
        </SearchListWrap>
      </ThemeProvider>
    </>
  );
}

const SearchListWrap = styled(Box)`
  .table-name {
    border-bottom: 1.5px solid #00d45e;
    width: 100%;
    margin-top: 2rem;
    h2 {
      font-size: 1.6rem;
      color: #0e301d;
      font-weight: 500;
      padding-bottom: 1rem;
    }
  }
  .result-none {
    p {
      font-size: 1.6rem;
      color: #888888;
      line-height: 150%;
      font-weight: 400;
      text-align: center;
      padding: 2rem 0;
    }
  }
  table {
    width: 100%;
    margin-top: 2rem;
    .w-40 {
      width: 40%;
    }
    .w-30 {
      width: 30%;
    }
    .w-25 {
      width: 25%;
    }
    .w-10 {
      width: 10%;
    }
    th,
    td {
      font-size: 1.6rem;
      color: #0e301d;
      font-weight: 400;
      padding: 1.5rem 0;
      border: 0.5px solid #d9d9d9;
      margin: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 55px;
      text-align: center;
    }
    th {
      background-color: #f2fff8;
    }
    tr {
      display: flex;
      align-items: center;
    }
  }
  .dp-cen {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
  }
`;

const ButtonWrap = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 4rem;
  button {
    width: 100%;
  }
`;

const StyledTextField = styled(TextField)`
  width: 100%;
  .MuiOutlinedInput-root {
    border: 1px solid #d9d9d9;
    font-size: 14px !important;
  }
  input {
    background-color: #fff;
    font-size: 1.6rem;
    outline: none;
    color: #0e301d;
    border-radius: 4px;
  }
  fieldset {
    padding: 1rem 2rem;
    border: none;
  }
  svg {
    width: 2rem;
    height: 2rem;
  }
`;
