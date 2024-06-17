"use client";
import styled from "@emotion/styled";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import LocationSearchingIcon from "@mui/icons-material/LocationSearching";
import { Box, IconButton } from "@mui/material";
import * as React from "react";

import theme from "../../style/theme";

import AttestedCopy from "@/app/components/attestedCopy/attestedCopy";
import RoundSBtn from "@/app/components/button/RoundSBtn";
import SearchBar from "@/app/components/search/SearchBar";
import SearchList from "@/app/components/search/SearchList";

export default function Map() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [open2, setOpen2] = React.useState(false);

  const [state, setState] = React.useState(false);
  const handleDetail = () => {
    setOpen2(true);
    setState(!state);
    setState2(false);
    setState3(false);
    setState4(false);
    setState5(false);
    setState6(false);
  };

  const [state2, setState2] = React.useState(false);
  const handleDetail2 = () => {
    setOpen2(true);
    setState2(!state2);
    setState(false);
    setState3(false);
    setState4(false);
    setState5(false);
    setState6(false);
  };

  const [state3, setState3] = React.useState(false);
  const handleDetail3 = () => {
    setOpen2(true);
    setState3(!state3);
    setState(false);
    setState2(false);
    setState4(false);
    setState5(false);
    setState6(false);
  };

  const [state4, setState4] = React.useState(false);
  const handleDetail4 = () => {
    setOpen2(true);
    setState4(!state4);
    setState(false);
    setState2(false);
    setState3(false);
    setState5(false);
    setState6(false);
  };

  const [state5, setState5] = React.useState(false);
  const handleDetail5 = () => {
    setOpen2(true);
    setState5(!state5);
    setState(false);
    setState2(false);
    setState3(false);
    setState4(false);
    setState6(false);
  };

  const [state6, setState6] = React.useState(false);
  const handleDetail6 = () => {
    setOpen2(true);
    setState6(!state6);
    setState(false);
    setState2(false);
    setState3(false);
    setState4(false);
    setState5(false);
  };

  const [up, setUp] = React.useState(false);

  const handleClickUp = () => {
    setUp(!up);
  };

  return (
    <>
      <MapWrap>
        <SearchMapWrap>
          <SearchMap>
            <div className="top-nav">
              <IconButton>
                <ChevronLeftIcon />
              </IconButton>
              <RoundSBtn text={"로그인"} />
            </div>
            <div className="search-box">
              <SearchBar handleClickOpen={handleClickOpen} />
              {open ? (
                <>
                  <SearchListWrap>
                    <SearchList handleClose={handleClose} />
                  </SearchListWrap>
                </>
              ) : (
                <></>
              )}
            </div>
            {open2 ? (
              <ReviewList>
                {!up ? (
                  <>
                    <div className="up-slide-title">
                      <h3>
                        총 <strong>6개</strong>의 후기부등본이 있습니다.
                      </h3>
                      <IconButton onClick={handleClickUp}>
                        <KeyboardArrowUpIcon />
                      </IconButton>
                    </div>
                    <div className="box-shadow-none">
                      <AttestedCopy
                        tag1={true}
                        tag2={true}
                        tag3={true}
                        price={"3,300원"}
                      />
                    </div>
                  </>
                ) : (
                  <></>
                )}
              </ReviewList>
            ) : (
              <></>
            )}
            {up ? (
              <>
                <ReviewListTop>
                  <div className="up-slide-title">
                    <h3>
                      총 <strong>6개</strong>의 후기부등본이 있습니다.
                    </h3>
                    <IconButton onClick={handleClickUp}>
                      <KeyboardArrowDownIcon />
                    </IconButton>
                  </div>
                  <UpList>
                    <div className="box-shadow-none">
                      <AttestedCopy
                        tag1={true}
                        tag2={true}
                        tag3={true}
                        price={"3,300원"}
                      />
                    </div>
                    <div className="box-shadow-none">
                      <AttestedCopy
                        tag1={true}
                        tag2={true}
                        tag3={true}
                        price={"3,300원"}
                      />
                    </div>
                    <div className="box-shadow-none">
                      <AttestedCopy
                        tag1={true}
                        tag2={true}
                        tag3={true}
                        price={"3,300원"}
                      />
                    </div>
                    <div className="box-shadow-none">
                      <AttestedCopy
                        tag1={true}
                        tag2={true}
                        tag3={true}
                        price={"3,300원"}
                      />
                    </div>
                    <div className="box-shadow-none">
                      <AttestedCopy
                        tag1={true}
                        tag2={true}
                        tag3={true}
                        price={"3,300원"}
                      />
                    </div>
                    <div className="box-shadow-none">
                      <AttestedCopy
                        tag1={true}
                        tag2={true}
                        tag3={true}
                        price={"3,300원"}
                      />
                    </div>
                  </UpList>
                </ReviewListTop>
              </>
            ) : (
              <></>
            )}
          </SearchMap>
        </SearchMapWrap>
        <div className="location-btn">
          <IconButton>
            <LocationSearchingIcon />
          </IconButton>
        </div>
        <PinWrap>
          {!state ? (
            <Pin id="pin1" onClick={handleDetail}>
              <h2>13</h2>
            </Pin>
          ) : (
            <Pin id="pin1" className="pin-check" onClick={handleDetail}>
              <h2>13</h2>
            </Pin>
          )}
          {!state2 ? (
            <Pin id="pin2" onClick={handleDetail2}>
              <h2>10</h2>
            </Pin>
          ) : (
            <Pin id="pin2" className="pin-check" onClick={handleDetail2}>
              <h2>10</h2>
            </Pin>
          )}
          {!state3 ? (
            <Pin id="pin3" onClick={handleDetail3}>
              <h2>9</h2>
            </Pin>
          ) : (
            <Pin id="pin3" className="pin-check" onClick={handleDetail3}>
              <h2>9</h2>
            </Pin>
          )}
          {!state4 ? (
            <Pin id="pin4" onClick={handleDetail4}>
              <h2>8</h2>
            </Pin>
          ) : (
            <Pin id="pin4" className="pin-check" onClick={handleDetail4}>
              <h2>8</h2>
            </Pin>
          )}
          {!state5 ? (
            <Pin id="pin5" onClick={handleDetail5}>
              <h2>15</h2>
            </Pin>
          ) : (
            <Pin id="pin5" className="pin-check" onClick={handleDetail5}>
              <h2>15</h2>
            </Pin>
          )}
          {!state6 ? (
            <Pin id="pin6" onClick={handleDetail6}>
              <h2>29</h2>
            </Pin>
          ) : (
            <Pin id="pin6" className="pin-check" onClick={handleDetail6}>
              <h2>29</h2>
            </Pin>
          )}
        </PinWrap>
      </MapWrap>
    </>
  );
}

const MapWrap = styled(Box)`
  width: 100%;
  height: 100vh;
  background-image: url(../img/map.png);
  background-position: center;
  background-size: cover;
  .location-btn {
    position: absolute;
    bottom: 4rem;
    right: 4rem;
    button {
      background-color: #fff;
      width: 6rem;
      height: 6rem;
      svg {
        width: 3rem;
        height: 3rem;
      }
    }
  }
`;

const SearchMapWrap = styled(Box)`
  position: relative;
  height: 100%;
`;

const SearchListWrap = styled(Box)`
  position: absolute;
  top: 12em;
  left: 0;
  width: 100%;
  z-index: 99;
  @media ${() => theme.device.mobile} {
    top: 9.5rem;
  }
`;

const SearchMap = styled(Box)`
  position: absolute;
  top: 0;
  left: 0;
  height: 18vh;
  width: 64rem;
  background-color: #fff;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  .top-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem 2rem;
    background-color: #fff;
    button {
      padding: 0;
      svg {
        width: 3rem;
        height: 3rem;
      }
    }
  }
  .search-box {
    background-color: #28e67c;
    padding: 2rem;
    position: relative;
  }
  .box-shadow-none > div {
    box-shadow: none;
    border-radius: 0 !important;
  }
  .up-slide-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 2rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    background-color: #fff;
    svg {
      width: 2.5rem;
      height: 2.5rem;
    }
    h3 {
      font-size: 1.6rem;
      color: #0e301d;
      strong {
        font-size: 1.6rem;
        color: #00d45e;
        font-weight: bold;
      }
    }
  }
  @media ${() => theme.device.mobile} {
    height: 16vh;
    width: 100%;
  }
`;

const PinWrap = styled(Box)`
  .pin-check {
    background-image: url(../img/pin2.svg);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  #pin1 {
    top: 20rem;
    right: 10rem;
  }
  #pin2 {
    top: 34rem;
    right: 15rem;
  }
  #pin3 {
    top: 50rem;
    right: 20rem;
  }
  #pin4 {
    bottom: 30rem;
    left: 20rem;
  }
  #pin5 {
    bottom: 18rem;
    left: 25rem;
  }
  #pin6 {
    bottom: 42rem;
    left: 52rem;
  }
`;

const Pin = styled.button`
  background-image: url(../img/pin.svg);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 3.5rem;
  height: 5.3rem;
  border: none;
  background-color: transparent;
  box-shadow: none;
  position: absolute;
  outline: none;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  transition: all 0.3s ease;
  h2 {
    font-size: 1.5rem;
    color: #fff;
    margin-top: 0.5em;
  }
`;

const ReviewList = styled(Box)`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 64rem;
  background-color: #fff;
  z-index: 97;
  @media ${() => theme.device.mobile} {
    width: 100%;
  }
`;

const ReviewListTop = styled(Box)`
  height: 80.8vh;
  background-color: #fff;
  position: sticky;
  top: 0;
  z-index: 98;
  @media ${() => theme.device.mobile} {
    height: 83.3vh;
  }
`;

const UpList = styled(Box)`
  height: 73vh;
  overflow-y: scroll;
`;
