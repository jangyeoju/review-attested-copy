"use client";

import styled from "@emotion/styled";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CloseIcon from "@mui/icons-material/Close";
import { Box, IconButton } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import * as React from "react";
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import theme from "../../../app/style/theme";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
SwiperCore.use([Pagination, Navigation, Autoplay]);

export default function ViewImgModal({ handleClose, open }) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [swiper, setSwiper] = React.useState();

  return (
    <>
      <React.Fragment>
        <StyledDialog
          fullScreen={fullScreen}
          open={open}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitleWrap>
            <IconButton onClick={handleClose} autoFocus>
              <CloseIcon />
            </IconButton>
          </DialogTitleWrap>
          <StyledDialogContent>
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              loop={true}
              onSwiper={setSwiper}
              navigation={{
                prevEl: ".prev",
                nextEl: ".next",
              }}
              pagination={{ clickable: true }}
            >
              <div
                className="prev"
                onClick={() => {
                  swiper.slidePrev();
                }}
              >
                <IconButton>
                  <ChevronLeftIcon />
                </IconButton>
              </div>
              <StyledSwiperSlide>
                <div className="img-slide">
                  <img src="/img/sample.png" />
                </div>
              </StyledSwiperSlide>
              <StyledSwiperSlide>
                <div className="img-slide">
                  <img src="/img/sample.png" />
                </div>
              </StyledSwiperSlide>
              <StyledSwiperSlide>
                <div className="img-slide">
                  <img src="/img/sample.png" />
                </div>
              </StyledSwiperSlide>
              <StyledSwiperSlide>
                <div className="img-slide">
                  <img src="/img/sample.png" />
                </div>
              </StyledSwiperSlide>

              <div
                className="next"
                onClick={() => {
                  swiper.slideNext();
                }}
              >
                <IconButton>
                  <ChevronRightIcon />
                </IconButton>
              </div>
            </Swiper>
          </StyledDialogContent>
        </StyledDialog>
      </React.Fragment>
    </>
  );
}

const StyledDialog = styled(Dialog)`
  .MuiPaper-root {
    width: 58rem;
    border-radius: 18px;
    background-color: transparent;
    box-shadow: none;
  }
  @media ${() => theme.device.mobile} {
    .MuiPaper-root {
      width: 100%;
      border-radius: 0;
    }
  }
`;

const DialogTitleWrap = styled(Box)`
  button {
    width: 3rem;
    height: 3rem;
    svg {
      width: 3rem;
      height: 3rem;
      color: #fff;
    }
  }
`;

const StyledDialogContent = styled(DialogContent)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  button {
    background-color: #fff;
    svg {
      width: 2rem;
      height: 2rem;
    }
  }
  .next {
    position: absolute;
    top: 50%;
    right: 5%;
    transform: translate(50%, -50%);
    z-index: 99;
  }
  .prev {
    position: absolute;
    top: 50%;
    left: 5%;
    transform: translate(-50%, -50%);
    z-index: 99;
  }
  @media ${() => theme.device.mobile} {
    .next {
      right: 8%;
    }
    .prev {
      left: 8%;
    }
  }
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  .img-slide {
    img {
      width: 100%;
    }
  }
`;
