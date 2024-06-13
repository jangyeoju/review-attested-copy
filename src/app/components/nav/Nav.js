import * as React from "react";
import { Box, Button, IconButton } from "@mui/material";
import { createTheme, Divider, Icon, ThemeProvider } from "@mui/material";
import ContainerBox from "../layout/ContainerBox";
import styled from "@emotion/styled";
import theme from "../../style/theme";

import StarsIcon from "@mui/icons-material/Stars";
import MapIcon from "@mui/icons-material/Map";
import EditIcon from "@mui/icons-material/Edit";
import RoundSBtn from "../button/RoundSBtn";

import MenuIcon from "@mui/icons-material/Menu";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import Link from "@mui/material/Link";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export default function Nav() {
  const theme = createTheme({
    typography: {
      fontFamily: "Pretendard",
    },
    palette: {
      primary: {
        main: "#0080F7",
      },
    },
  });

  const [moOpen, setMoOpen] = React.useState(false);

  const handleMoClick = () => {
    setMoOpen(!moOpen);
  };

  const [moOpenMenu1, setMoMenuOpen] = React.useState(false);

  const handleMoMenuClick1 = () => {
    setMoMenuOpen(!moOpenMenu1);
  };

  const [moOpenMenu2, setMoMenuOpen2] = React.useState(false);

  const handleMoMenuClick2 = () => {
    setMoMenuOpen2(!moOpenMenu2);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <NavWrap>
          <ContainerBox>
            <PC>
              <div className="nav-wrap">
                <div className="logo">
                  <img src="/img/logo.svg" />
                </div>
                <ul className="menu-list">
                  <li className="menu">
                    <StarsIcon />
                    <a href="">바로가기 설치</a>
                  </li>
                  <li className="menu">
                    <MapIcon />
                    <a href="">지도로 보기</a>
                  </li>
                  <li className="menu">
                    <EditIcon />
                    <a href="">후기부등본 쓰기</a>
                  </li>
                  <li>
                    <RoundSBtn text={"로그인"} />
                  </li>
                </ul>
              </div>
            </PC>
            <Mobile>
              <div className="nav-wrap">
                <StyledList
                  sx={{ width: "100%", bgcolor: "background.paper" }}
                  component="nav"
                  aria-labelledby="nested-list-subheader"
                >
                  <div className="dp-flex mobileNav">
                    <div className="logo">
                      <a href="/">
                        <img src="/img/logo.svg"></img>
                      </a>
                    </div>
                    <div className="dp-flex">
                      <RoundSBtn text={"로그인"} />
                      <MenuBtn onClick={handleMoClick} sx={{ p: 0 }}>
                        <MenuIcon />
                      </MenuBtn>
                    </div>
                  </div>
                  <StyledCollapse in={moOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding sx={{ mt: 0 }}>
                      <StyledLink href="" underline="none">
                        <ListItemButton>
                          <div className="menu">
                            <StarsIcon />
                            <a href="">바로가기 설치</a>
                          </div>
                        </ListItemButton>
                      </StyledLink>

                      <StyledLink href="" underline="none">
                        <ListItemButton>
                          <div className="menu">
                            <MapIcon />
                            <a href="">지도로 보기</a>
                          </div>
                        </ListItemButton>
                      </StyledLink>

                      <StyledLink href="" underline="none">
                        <ListItemButton>
                          <div className="menu">
                            <EditIcon />
                            <a href="">후기부등본 쓰기</a>
                          </div>
                        </ListItemButton>
                      </StyledLink>
                    </List>
                  </StyledCollapse>
                </StyledList>
              </div>
            </Mobile>
          </ContainerBox>
        </NavWrap>
      </ThemeProvider>
    </>
  );
}

const PC = styled(Box)`
  display: block;
  @media ${() => theme.device.mobile} {
    display: none;
  }
`;

const Mobile = styled(Box)`
  display: none;
  .menu {
    padding: 1rem 0;
  }
  @media ${() => theme.device.mobile} {
    display: block;
  }
`;

const NavWrap = styled(Box)`
  background-color: #fff;
  padding: 2rem 0;
  position: fixed;
  top: 0;
  z-index: 999;
  width: 100%;
  border-bottom: 1px solid #d9d9d9;
  .nav-wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
  .menu-list {
    display: flex;
    align-items: center;
  }
  .menu {
    display: flex;
    align-items: center;
    margin-right: 2rem;
    a {
      text-decoration: none;
      color: #888888;
      font-size: 1.6rem;
      font-weight: 400;
    }
    svg {
      width: 2rem;
      height: 2rem;
      color: #888888;
      margin-right: 1rem;
    }
  }
  .menu:last-of-type {
    margin: 0;
  }
  @media ${() => theme.device.mobile} {
    padding: 1rem 0;
  }
`;

const StyledList = styled(List)`
  position: relative;
  .css-smkl36-MuiCollapse-wrapper {
    padding-bottom: 2rem;
  }
  span {
    font-size: 1.4rem;
    color: #3b3b3b;
  }
  svg {
    color: #3b3b3b;
    width: 2.4rem;
    height: 2.4rem;
    padding: 0 !important;
  }
  .mobileNav {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  @media ${() => theme.device.mobile} {
    .logo {
      img {
        width: 80%;
      }
    }
  }
`;

const MenuBtn = styled(Button)`
  min-width: max-content;
  color: #3b3b3b;
  border-radius: 100px;
  padding: 0;
  margin-left: 1.5rem;
  svg {
    width: 2.5rem;
    height: 2.5rem;
    padding: 0;
  }
  &:hover {
    background-color: #fff;
  }
`;

const StyledLink = styled(Link)`
  width: 100%;
  .login-wrap {
    padding: 0.6rem 0;
    a {
      font-size: 1.4rem;
      color: #3b3b3b;
      font-weight: 700;
    }
    span {
      font-size: 1.4rem;
      color: rgba(0, 0, 0, 0.6);
      margin: 0 1rem;
    }
  }
`;

const StyledCollapse = styled(Collapse)`
  position: fixed;
  top: 7rem;
  left: 0;
  background-color: #fff;
  width: 100%;
`;
