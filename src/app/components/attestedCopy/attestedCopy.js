import styled from "@emotion/styled";
import { Box, Button, IconButton } from "@mui/material";
import { createTheme, Divider, Icon, ThemeProvider } from "@mui/material";
import * as React from "react";

import theme from "../../../app/style/theme";
import ViewModal from "../modal/ViewModal";

export default function AttestedCopy({ tag1, tag2, tag3, price, view, type }) {
  const theme = createTheme({
    typography: {
      fontFamily: "Pretendard",
    },
    palette: {
      primary: {
        main: "#00D45E",
      },
    },
  });

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    if (view) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <AttestedCopyBox onClick={handleClickOpen}>
          <div>
            <ul className="tag-list">
              {tag1 ? (
                <li id="tag1">
                  <TagBox>2023</TagBox>
                </li>
              ) : (
                <></>
              )}
              {tag2 ? (
                <li id="tag2">
                  <TagBox>실거주</TagBox>
                </li>
              ) : (
                <></>
              )}
              {tag3 ? (
                <li id="tag3">
                  <TagBox>공인</TagBox>
                </li>
              ) : (
                <></>
              )}
            </ul>
            <h2>
              경기도 고양시 덕양구 세솔로 25
              <br />
              2210동 1701호
            </h2>
            <p>등록일 : 2024-04-24</p>
          </div>
          <div>
            <h1>{price}</h1>
            {type == "작성중" ? <></> : <p>상세설명 20건</p>}
          </div>
        </AttestedCopyBox>
        <ViewModal handleClose={handleClose} open={open} />
      </ThemeProvider>
    </>
  );
}

const AttestedCopyBox = styled(Box)`
  background-color: #fff;
  padding: 3rem;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.08);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  .tag-list {
    display: flex;
    align-items: center;
    li {
      margin-right: 1rem;
    }
    li:last-of-type {
      margin: 0;
    }
    #tag1 {
      background-color: #f6f6f6;
      color: #000;
      border-radius: 100px;
    }
    #tag2 {
      background-color: #00d45e;
      color: #fff;
      border-radius: 100px;
    }
    #tag3 {
      background-color: #003bd4;
      color: #fff;
      border-radius: 100px;
    }
  }
  h1 {
    font-size: 2.4rem;
    font-weight: bold;
    line-height: 150%;
    color: #0e301d;
    text-align: right;
  }
  h2 {
    font-size: 2rem;
    font-weight: bold;
    line-height: 150%;
    margin-top: 1rem;
    color: #0e301d;
  }
  p {
    font-size: 1.4rem;
    color: #888888;
    line-height: 150%;
    margin-top: 1rem;
  }
  & > div:last-of-type p {
    text-align: right;
  }
  @media ${() => theme.device.mobile} {
    & > div:first-of-type {
      width: 50%;
    }
    h1 {
      font-size: 2rem;
    }
    h2 {
      font-size: 1.8rem;
    }
    h2 br {
      display: none;
    }
  }
`;

const TagBox = styled(Box)`
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
`;
