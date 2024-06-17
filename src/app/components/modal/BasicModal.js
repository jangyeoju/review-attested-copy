import styled from "@emotion/styled";
import CloseIcon from "@mui/icons-material/Close";
import { Box, Button, IconButton } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import * as React from "react";

import ApplicationRegistration from "./content/ApplicationRegistration";
import ApplySuccess from "./content/ApplySuccess";
import CouponSelect from "./content/CouponSelect";
import Delete from "./content/Delete";
import JoinCoupon from "./content/JoinCoupon";
import Notice from "./content/Notice";
import PaymentSuccess from "./content/PaymentSuccess";
import Certification from "./content/point/Certification";
import Completed2 from "./content/point/Completed2";
import Detail from "./content/point/Detail";
import Secession from "./content/point/Secession";
import Withdrawal from "./content/point/Withdrawal";
import WithdrawalApplication from "./content/point/WithdrawalApplication";
import PointCharge from "./content/PointCharge";
import Privacy from "./content/Privacy";
import Reason from "./content/Reason";
import ReviewCoupon from "./content/ReviewCoupon";
import SearchAgentList from "./content/SearchAgentList";
import Service from "./content/Service";
import TermsOfUse from "./content/TermsOfUse";
import VerificationRejected from "./content/VerificationRejected";
import VerificationWaiver from "./content/VerificationWaiver";
import WithdrawalCompleted from "./content/WithdrawalCompleted";
import theme from "../../../app/style/theme";

export default function BasicModal({
  handleClose,
  open,
  title,
  content,
  subTitle,
  receipt,
  text,
}) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <React.Fragment>
      <StyledDialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitleWrap>
          <IconButton></IconButton>
          <DialogTitle id="responsive-dialog-title">{title}</DialogTitle>
          <IconButton onClick={handleClose} autoFocus>
            <CloseIcon />
          </IconButton>
        </DialogTitleWrap>
        <StyledDialogContent>
          {content == "이용약관" ? <TermsOfUse /> : <></>}
          {content == "개인정보처리방침" ? <Privacy /> : <></>}
          {content == "서비스" ? <Service /> : <></>}
          {content == "회원가입쿠폰" ? <JoinCoupon /> : <></>}
          {content == "첫후기등록쿠폰" ? <ReviewCoupon /> : <></>}
          {content == "쿠폰선택" ? (
            <CouponSelect handleClose={handleClose} />
          ) : (
            <></>
          )}
          {content == "포인트충전" ? (
            <PointCharge handleClose={handleClose} />
          ) : (
            <></>
          )}
          {content == "결제완료" ? (
            <PaymentSuccess handleClose={handleClose} />
          ) : (
            <></>
          )}
          {content == "공인중개사" ? (
            <SearchAgentList handleClose={handleClose} />
          ) : (
            <></>
          )}
          {content == "검증신청완료" ? (
            <ApplySuccess handleClose={handleClose} />
          ) : (
            <></>
          )}
          {content == "실거주미인증" ? (
            <ApplicationRegistration
              handleClose={handleClose}
              type={"미인증"}
            />
          ) : (
            <></>
          )}
          {content == "실거주인증" ? (
            <ApplicationRegistration handleClose={handleClose} />
          ) : (
            <></>
          )}
          {content == "삭제" ? <Delete handleClose={handleClose} /> : <></>}
          {content == "반려" ? <Reason handleClose={handleClose} /> : <></>}
          {content == "상세내역" ? (
            <Detail
              handleClose={handleClose}
              title={subTitle}
              receipt={receipt}
            />
          ) : (
            <></>
          )}
          {content == "본인인증" ? (
            <Certification handleClose={handleClose} />
          ) : (
            <></>
          )}
          {content == "인출" ? <Withdrawal handleClose={handleClose} /> : <></>}
          {content == "인출신청" ? (
            <WithdrawalApplication handleClose={handleClose} />
          ) : (
            <></>
          )}
          {content == "회원탈퇴처리" ? (
            <WithdrawalCompleted handleClose={handleClose} />
          ) : (
            <></>
          )}
          {content == "회원탈퇴" ? (
            <Secession handleClose={handleClose} />
          ) : (
            <></>
          )}
          {content == "검증단등록완료" ? (
            <Completed2 handleClose={handleClose} />
          ) : (
            <></>
          )}
          {content == "검증거절" ? (
            <VerificationRejected handleClose={handleClose} />
          ) : (
            <></>
          )}
          {content == "알림" ? (
            <Notice handleClose={handleClose} text={text} />
          ) : (
            <></>
          )}
          {content == "검증포기" ? (
            <VerificationWaiver handleClose={handleClose} />
          ) : (
            <></>
          )}
        </StyledDialogContent>
      </StyledDialog>
    </React.Fragment>
  );
}

const StyledDialog = styled(Dialog)`
  .MuiPaper-root {
    width: 58rem;
    border-radius: 18px;
  }
  @media ${() => theme.device.mobile} {
    .MuiPaper-root {
      width: 100%;
      border-radius: 0;
    }
  }
`;

const DialogTitleWrap = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  h2 {
    padding: 0;
    font-size: 1.8rem;
  }
  button {
    width: 3rem;
    height: 3rem;
    svg {
      width: 2rem;
      height: 2rem;
    }
  }
`;

const StyledDialogContent = styled(DialogContent)`
  height: 43rem;
  max-height: 70rem;
  height: auto;
  overflow-y: scroll;
  padding: 2rem;
  font-size: 1.6rem;
  color: #888888;
  line-height: 150%;
`;
