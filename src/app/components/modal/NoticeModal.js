
import * as React from "react";
import { Box, Button, IconButton } from "@mui/material";
import {createTheme,Divider,Icon,ThemeProvider} from '@mui/material';
import styled from "@emotion/styled";
import theme from "../../../app/style/theme";

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';

export default function NoticeModal({handleClose , open, content ,title ,date}) {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    
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
            <DialogTitle id="responsive-dialog-title">
                공지사항
            </DialogTitle>
            <IconButton onClick={handleClose} autoFocus><CloseIcon/></IconButton>
        </DialogTitleWrap>
        <StyledDialogContent>
            <div className="notice-title">
                <h3>{title}</h3>
                <h5>{date}</h5>
            </div>
            <p>{content}</p>
            <div className="dialog-action">
                <Button onClick={handleClose} className="small-btn" variant="outlined">이전</Button>
                <Button onClick={handleClose} className="small-btn" variant="contained">확인</Button>
            </div>
        </StyledDialogContent>
      </StyledDialog>
    </React.Fragment>
  );
}

const StyledDialog = styled(Dialog)`
    .MuiPaper-root{
        width: 58rem;
        border-radius: 18px;
    }
    @media ${() => theme.device.mobile} {
        .MuiPaper-root{
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
    border-bottom: 1px solid rgba(0,0,0,.1);
    h2{
        padding: 0;
        font-size: 1.8rem;
    }
    button{
        width: 3rem;
        height: 3rem;
        svg{
            width: 2rem;
            height: 2rem;
        }
    }
`;

const StyledDialogContent = styled(DialogContent)`
    height: 40rem;
    overflow-y: scroll;
    padding: 2rem;
    font-size: 1.6rem;
    line-height: 150%;
    .notice-title{
        border-bottom: 1px solid rgba(0,0,0,.1);
        padding-bottom: 1rem;
        width: 100%;
        margin-bottom: 1rem;
        h3{
            font-size: 1.8rem;
            font-weight: bold;
            line-height: 150%;
        }
        h5{
            font-size: 1.4rem;
            color: #888888;
            font-weight: 400;
        }
    }
    p{
        font-size: 1.6rem;
        line-height: 150%;
        color: #888888;
        height: 23rem;
        border-bottom: 1px solid rgba(0,0,0,.1);
        margin-bottom: 2rem;
        padding-bottom: 2rem;
        overflow-y: scroll;
    }
    .dialog-action{
        display: flex;
        align-items: center;
        justify-content: flex-end;
        button{
            box-shadow: none;
            font-size: 1.4rem;
            border-radius: 100px;
        }
        button:first-of-type{
            margin-right: 1rem;
        }
        button:last-of-type{
            color: #fff;
        }
    }
`;