
import * as React from "react";
import { useState } from 'react';
import { Box, Button, IconButton } from "@mui/material";
import {createTheme,Divider,Icon,ThemeProvider} from '@mui/material';
import "../../../../style/global.css"
import styled from "@emotion/styled";
import theme from "../../../../../app/style/theme";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import BasicSBtn from "@/app/components/button/BasicSBtn";
import BasicBtn from "@/app/components/button/BasicBtn";
import BasicModal from "../../BasicModal";

export default function Secession({handleClose}){
    const theme = createTheme({
        typography:{
            fontFamily : "Pretendard"
        },
        palette: {
            primary: {
              main: "#28E67C",
            },
        },
    })

    const [open2, setOpen2] = React.useState(false);

    const handleClickOpen2 = () => {
      setOpen2(true);
    };

    return(
        <>
            <ThemeProvider theme={theme}>
                <SecessionWrap>
                    <h3>
                        회원 탈퇴 시 고객님의 후기부등본 등록내역을 제외한 <br/>
                        모든 활동내역이 삭제됩니다. 삭제된 정보는 복구할 수 없습니다. <br/>
                        이후 고객님의 후기부등록 조회를 통한 수익 등 모든 부가수익도 <br/>
                        고객님께 지급되지 않습니다.
                     </h3>
                     <h3>
                     단, 거래 관련 권리의무 관계의 확인 등을 이유로 정보를  <br/>
                    보유할 필요가 있는 경우에는 ‘전자상 거래 등에서의 소비자보호에 <br/>
                    관한 법률‘, ‘통신비 밀보호법‘, ‘개인정보보호법‘ 등 관련 법률에  <br/>
                    근거하여 일정 기간동안 그 정보를 보유합니다.
                     </h3>
                     <div className="check-box">
                        <FormControlLabel control={<Checkbox defaultChecked />} label="예, 확인하였습니다. 동의합니다" />
                     </div>
                     <ButtonWrap>
                        <BasicBtn text={"취소"} handleClick={handleClose}/>
                        <Button variant="contained" color="error" onClick={handleClickOpen2}>회원탈퇴</Button>
                        <BasicModal handleClose={handleClose} open={open2} title={"회원 탈퇴"} content={"회원탈퇴처리"} />
                    </ButtonWrap>
                </SecessionWrap>
            </ThemeProvider>
        </>
    )
}

const SecessionWrap = styled(Box)`
    h3{
        font-size: 1.6rem;
        line-height: 150%;
        text-align: center;
        margin-bottom: 2rem;
        font-weight: 400;
    }
    .check-box{
        width: 100%;
        padding: 2rem 0;
        border-top: 1px solid #d9d9d9;
        display: flex;
        align-items: center;
        justify-content: center;
        span{
            font-size: 1.6rem;
        }
        svg{
            width: 2rem;
            height: 2rem;
        }
    }
`;

const ButtonWrap = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    button{
        width: 49%;
        box-shadow: none;
        font-size: 1.6rem;
        color: #fff;
        border-radius: 4px;
        padding: 1.5rem 2rem;
    }
    button:last-of-type{
        background-color: #FF8484;
        color: #fff;
    }
`;