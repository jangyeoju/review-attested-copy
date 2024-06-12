

import * as React from "react";
import { Box, Button, IconButton } from "@mui/material";
import {createTheme,Divider,Icon,ThemeProvider} from '@mui/material';
import styled from "@emotion/styled";
import theme from "../../../app/style/theme";
import SearchIcon from '@mui/icons-material/Search';
import RedSBtn from "@/app/components/button/RedSBtn";
export default function SearchList({handleClose}){
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

    const [close, setClose] = React.useState(false);

    const handleClickClose = () => {
        setClose(true);
    };

    const [close2, setClose2] = React.useState(false);

    const handleClickClose2 = () => {
        setClose2(true);
    };

    const [close3, setClose3] = React.useState(false);

    const handleClickClose3 = () => {
        setClose3(true);
    };

    const [close4, setClose4] = React.useState(false);

    const handleClickClose4 = () => {
        setClose4(true);
    };

    const [close5, setClose5] = React.useState(false);

    const handleClickClose5 = () => {
        setClose5(true);
    };

    const handleClickAll = () =>{
        setClose(true);
        setClose2(true);
        setClose3(true);
        setClose4(true);
        setClose5(true);
    }

    return(
        <>
            <ThemeProvider theme={theme}>
                <SearchListWrap>
                    {
                        !close ?
                        <SearchResultBox>
                            <div className="result-name">
                                <SearchIcon/>
                                <h2>강남대로</h2>
                            </div>
                            <RedSBtn text={"삭제"}  handleClick={handleClickClose} />
                        </SearchResultBox> : <></>
                    }
                    {
                        !close2 ?
                        <SearchResultBox>
                            <div className="result-name">
                                <SearchIcon/>
                                <h2>한강아파트</h2>
                            </div>
                            <RedSBtn text={"삭제"}  handleClick={handleClickClose2} />
                        </SearchResultBox> : <></>
                    }
                    {
                        !close3 ?
                        <SearchResultBox>
                            <div className="result-name">
                                <SearchIcon/>
                                <h2>부산시</h2>
                            </div>
                            <RedSBtn text={"삭제"}  handleClick={handleClickClose3} />
                        </SearchResultBox> : <></>
                    }
                    {
                        !close4 ?
                        <SearchResultBox>
                            <div className="result-name">
                                <SearchIcon/>
                                <h2>분당구</h2>
                            </div>
                            <RedSBtn text={"삭제"}  handleClick={handleClickClose4} />
                        </SearchResultBox> : <></>
                    }
                    {
                        !close5 ?
                        <SearchResultBox>
                            <div className="result-name">
                                <SearchIcon/>
                                <h2>논현동</h2>
                            </div>
                            <RedSBtn text={"삭제"}  handleClick={handleClickClose5} />
                        </SearchResultBox> : <></>
                    }
                    <div className="action-wrap">
                        <button onClick={handleClickAll}>전체 삭제</button>
                        <button onClick={handleClose}>닫기</button>
                    </div>
                </SearchListWrap>
            </ThemeProvider>
        </>
    )
}

const SearchListWrap = styled(Box)`
    max-height: 40rem;
    /* min-height: 10rem; */
    width: 100%;

    background-color: #fff;
  
    &>div:nth-of-type(5){
        border-bottom: none;
    }
    .action-wrap{
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding: 1.5rem 3rem;
        border-top: 1px solid rgba(0,0,0,.1);
        button{
            font-size: 1.6rem;
            background-color: transparent;
            border: none;
            font-weight: 400;
        }
        button:first-of-type{
            font-weight: 600;
            color: #FF8484;
            margin-right: 1rem;
        }
    }
    @media ${() => theme.device.tablet} {
        width: 100%;
    }
    @media ${() => theme.device.mobile} {
        .action-wrap{
            button{
                font-size: 1.4rem;
            }
        }
    }
`;



const SearchResultBox = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 1.5rem 3rem;
    border-bottom: 1px solid rgba(0,0,0,.1);
    .result-name{
        display: flex;
        align-items: center;
        svg{
            width: 2rem;
            height: 2rem;
            margin-right: 1rem;
        }
        h2{
            font-size: 1.8rem;
            font-weight: 500;
        }
    }
    @media ${() => theme.device.mobile} {
        .result-name{
            h2{
                font-size: 1.6rem;
            }
        }
    }
`;