"use client"
import * as React from "react";
import { Box, Button, IconButton } from "@mui/material";
import {createTheme,Divider,Icon,ThemeProvider} from '@mui/material';
import styled from "@emotion/styled";
import theme from "../../../../app/style/theme";
import Nav from "../../../components/nav/Nav";
import WriteTitle from "@/app/components/title/WriteTitle";
import Footer from "../../../components/footer/Footer";
import BasicBtn from "@/app/components/button/BasicBtn";
import CheckWriteBox from "@/app/components/attestedCopy/wrtie/CheckWriteBox";
import GeneralOpinionBox from "@/app/components/attestedCopy/wrtie/GeneralOpinionBox";
import CloseIcon from '@mui/icons-material/Close';
import { FileUploader } from "react-drag-drop-files";
const fileTypes = ["JPG", "PNG", "GIF"];

export default function Step2(){
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
    const [file, setFile] = React.useState(null);
    const handleChange = (file) => {
      setFile(file);
    };
    return(
        <>
            <ThemeProvider theme={theme}>
                <Nav/>
                <SubBanner>
                    <h2>후기부등본을 등록하세요.</h2>
                    <h1>후기부등본 등록</h1>
                </SubBanner>
                <WriteWrap>
                    <ContainerBox3>
                    <WriteBox>
                        <WriteTitle num={"2단계"} text={"실거주 평가항목을 평가해 주세요."}/>
                        <div className="price-box">
                            <h3>후기부등본 판매가</h3>
                            <div>
                                <h2>1,000<span>원</span></h2>
                                <p>(부가세 별도)</p>
                            </div>
                        </div>
                        <h3>
                        평가항목별 <strong>상세설명을 입력하면 판매가가 계속 올라갑니다.</strong><br/>
                        상세설명을 추가하여 판매가를 올려 보세요.
                        </h3>
                        <div className="checkWriteBox-list">
                            <CheckWriteBox num={"1"} categoryName={"층간소음"} qText={"깡통전세, 갱신계약 시 문제, 월세 납부 등에 분쟁요소가 있습니까?"} qtype={"1"}/>
                            <CheckWriteBox num={"2"} categoryName={"난방"} qText={"난방은 잘 되나요?"} qtype={"1"} addBox={"add"}/>
                            <CheckWriteBox num={"3"} categoryName={"주차"} qText={"주차는 잘 되나요?"} qtype={"1"} addBox={"addNone"}/>
                        </div>
                        <div className="opinion-box">
                            <GeneralOpinionBox />
                        </div>
                        <div className="img-upload-box">
                            <h3>사진 (선택)<span>사진은 4장까지 등록할 수 있습니다.</span></h3>
                            <ul className="img-list">
                                <li>
                                <div class="upload-img">
                                    <div className="delete-btn">
                                        <IconButton><CloseIcon/></IconButton>
                                    </div>
                                </div>
                                </li>
                                <li>
                                <div class="upload-img">
                                    <div className="delete-btn">
                                        <IconButton><CloseIcon/></IconButton>
                                    </div>
                                </div>
                                </li>
                                <li>
                                    <StyledFileUploader>
                                        <FileUploader handleChange={handleChange} name="file" types={fileTypes} />
                                    </StyledFileUploader>
                                </li>
                                <li>
                                    <StyledFileUploader>
                                        <FileUploader handleChange={handleChange} name="file" types={fileTypes} />
                                    </StyledFileUploader>
                                </li>
                            </ul>
                        </div>
                    </WriteBox>
                    <EndButton>
                        <BasicBtn text={"이전"} />
                        <BasicBtn text={"다음"} state={"disabled"}/>
                    </EndButton>
                    </ContainerBox3>
                </WriteWrap>
                <Footer />
            </ThemeProvider>
        </>
    )
}


const SubBanner = styled(Box)`
    background-color: #00D45E;
    padding: 16rem 0 8rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1{
        font-size: 3.5rem;
        color: #fff;
        line-height: 150%;
        font-weight: bold;
    }
    h2{
        color: #fff;
        font-size: 1.8rem;
        line-height: 150%;
    }

`;

const WriteWrap = styled(Box)`
    padding: 5rem 0;
    h3{
        font-size: 1.8rem;
        color: #0E301D;
        font-weight: 500;
        line-height: 150%;
        strong{
            font-size: 1.8rem;
            font-weight: bold;
            color: #00D45E;
        }
    }
`;


const ContainerBox3 = styled(Box)`
    width: 98rem;
    margin: 0 auto;
    @media ${() => theme.device.tablet} {
      width: 100%;
      padding: 0 5%;
  }
`;


const WriteBox = styled(Box)`
  .price-box{
        border: 1px solid #D9D9D9;
        background-color: #fff;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 2rem;
        margin: 2rem 0;
        width: 100%;
        h3{
            font-size: 2rem;
            color: #0E301D;
            font-weight: 500;
        }
        h2{
            font-size: 2.5rem;
            color: #00D45E;
            font-weight: bold;
            span{
                font-size: 1.4rem;
                color: #888888;
                font-weight: 400;
                margin-left: .5rem;
            }
        }
        &>div{
            display: flex;
            align-items: center;
            p{
                font-size: 1.2rem;
                color: #888888;
                font-weight: 400;
                margin-left: 1rem;
            }
        }
    }
    .checkWriteBox-list{
        margin: 1.5rem 0 2.5rem 0;
        padding-bottom: 1rem;
        border-bottom: 2px solid #00D45E;
        
        &>div{
            margin-bottom: 2rem;
        }
    }
    .opinion-box{
        padding-bottom: 2.5rem;
        border-bottom: 2px solid #00D45E;
    }
    .img-upload-box{
        padding: 2.5rem 0;
        h3{
            font-size: 2rem;
            color: #0E301D;
            font-weight: bold;
            span{
                font-size: 1.6rem;
                color: #888888;
                font-weight: 400;
                margin-left: .5rem;
            }
        }
        .img-list{
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
            margin-top: 2rem;
            padding-bottom: 4rem;
            .upload-img{
                border-radius: 8px;
                height: -webkit-fill-available;
                background-image: url(../img/sample.png);
                background-position: center;
                background-repeat: no-repeat;
                background-size: cover;
                .delete-btn{
                    width: 100%;
                    display: flex;
                    align-items: flex-end;
                    justify-content: flex-end;
                    button{
                        background-color: #F6F6F6;
                        border-radius : 0;
                        border-top-right-radius: 8px;
                    }
                    svg{
                        width: 2.5rem;
                        height: 2.5rem;
                    }
                }
            }
            li{
                width: 24%;
                height: 23rem;

            }
            li:last-of-type{
                margin: 0;
            }
        }
    }
    @media ${() => theme.device.tablet} {
        .img-list{
            li{
                height: 15rem !important;
            }
            .upload-img{
                .delete-btn{
                    svg{
                        width: 1.5rem !important;
                        height: 1.5rem !important;
                    }
                }
            }
        }
    }
    @media ${() => theme.device.mobile3} {
        .price-box{
            flex-direction: column;
            align-items: flex-start;
        }
        .img-list{
            li{
                height: 8rem !important;
            }
        }
    }
`;

const EndButton = styled(Box)`
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    button{
        padding-left: 5rem;
        padding-right: 5rem;
    }
    button:first-of-type{
        margin-right: 1rem;
    }
    button:last-of-type{
        margin: 0 !important;
    }
`;


const StyledFileUploader = styled(Box)`
    border-radius: 8px;
    height: -webkit-fill-available;
    label{
        width: 100%;
        min-width: 100% !important;
        max-width: 100%!important;
        border: 2px dashed #D9D9D9;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        input{
            width: 100%;
        }
        &>div{
            flex-direction: column;
            flex: inherit;
            align-items: center;
            display: none;
            span{
            }
        }
        svg{
            filter: brightness(0);
            opacity: .2;
            width: 5rem;
            height: 5rem;
        }
    }
    @media ${() => theme.device.mobile} {
        label{
            svg{
            width: 3rem;
            height: 3rem;
        }
        }
    }
`;