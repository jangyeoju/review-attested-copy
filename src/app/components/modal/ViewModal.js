
import * as React from "react";
import { Box, Button, IconButton } from "@mui/material";
import {createTheme,Divider,Icon,ThemeProvider} from '@mui/material';
import styled from "@emotion/styled";
import theme from "../../../app/style/theme";

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import Rating from '@mui/material/Rating';
import CheckViewBox from "../attestedCopy/view/CheckViewBox";
import RoundCBtn from "../button/RoundCBtn";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ViewImgModal from "./VeiwImgModal";

export default function ViewModal({handleClose , open}){

    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    

    const theme2 = createTheme({
        typography:{
            fontFamily : "Pretendard"
        },
        palette: {
            primary: {
              main: "#28E67C",
            },
        },
    })

    const [alignment, setAlignment] = React.useState('실거주자');

    const handleChange = (event, newAlignment) => {
      setAlignment(newAlignment);
    };

    let [inputCount, setInputCount] =  React.useState(0);

    const onInputHandler = (e) => {
        setInputCount(e.target.value.length);
      };

      const [add, setAdd] = React.useState(false);

      const handleClickAdd = () => {
        setAdd(!add);
      };
    

    const [openModal, setOpen] = React.useState(false);
    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClickClose = () => {
      setOpen(false);
    };
  

  



    return(
        <>
        <React.Fragment>
            <ThemeProvider theme={theme2}>
            <StyledDialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitleWrap>
                    <IconButton></IconButton>
                    <DialogTitle id="responsive-dialog-title">
                        <h2>후기부등본 </h2>
                    </DialogTitle>
                    <IconButton onClick={handleClose} autoFocus><CloseIcon/></IconButton>
                </DialogTitleWrap>
                <StyledDialogContent>
                    <div className="logo-title">
                        <img src="/img/logo2.svg"/>
                    </div>
                    <AttestedCopyBox>
                        <div>
                            <ul className="tag-list">
                                <li id="tag1"><TagBox>2023</TagBox></li>
                                <li id="tag2"><TagBox>실거주</TagBox></li>
                                <li id="tag3"><TagBox>공인</TagBox></li>
                            </ul>
                            <h2>
                                경기도 고양시 덕양구 세솔로 25<br/>
                                2210동 1701호
                            </h2>
                            <p>등록일 : 2024-04-24</p>
                        </div>
                        <div>
                            <h1>3,300원</h1>
                            <p>상세설명 20건</p>
                        </div>
                    </AttestedCopyBox>
                    <div className="button-wrap">
                        <StyledToggleButtonGroup
                        color="primary"
                        value={alignment}
                        exclusive
                        onChange={handleChange}
                        aria-label="Platform"
                        >
                            <StyledToggleButton value="실거주자">실거주자</StyledToggleButton>
                            <StyledToggleButton value="공인중개사">공인중개사</StyledToggleButton>
                        </StyledToggleButtonGroup>
                        <Button variant="outlined" className="download-btn">
                            다운로드
                            <SaveAltIcon/>
                        </Button>
                    </div>
                    <OpinionBox>
                        <div className="title">
                            <h2>1. 종합의견</h2>
                            <div className="rating-box">
                                <Rating name="half-rating" defaultValue={2.5} precision={0.5} readOnly/>
                                <h3>3.5점</h3>
                            </div>
                        </div>
                        <div className="content">
                            <h3>종합의견 블라블라...</h3>
                        </div>
                    </OpinionBox>
                    <h2>2. 항목별 평가 내용</h2>
                    <div className="check-view-box-list">
                        <CheckViewBox num={"1"} categoryName={"임대분쟁"} qText={"깡통전세, 갱신계약 시 문제, 월세 납부 등에 분쟁요소가 있습니까?"} qtype={"1"} comment={"보증금 및 임대료가 다른 아파트보다 훨씬 낮은 편이예요"} value={"5"}/>
                        <CheckViewBox num={"2"} categoryName={"층간소음"} qText={"층간소음, 벽간소음이 있습니까?"} qtype={"1"} comment={"1년에 한두 번 정도 아랫집에서 연락이 오는데, 큰 문제는 없어요"} value={"3"}/>
                        <CheckViewBox num={"3"} categoryName={"고장시설"} qText={"집안 시설에 겉으로 보이지 않게 고장난 것이 많습니까?"} qtype={"1"} comment={"집 안에 시설은 LED 등 하나 빼고는 전혀 문제없어요."} value={"5"}/>
                        <CheckViewBox num={"4"} categoryName={"난방"} qText={"집안 구석구석 난방은 잘 됩니까?"} qtype={"1"} comment={"중간 호수라서 난방이 매우 잘 되요. 난방비도 많이 안나와요"} value={"5"}/>
                        <CheckViewBox num={"5"} categoryName={"곰팡이, 결로"} qText={"방, 붙박이장, 화장실, 세탁실 등에 곰팡이나 결로가 가 있습니까?"} qtype={"1"} comment={"베란다 문을 한 달 정도 닫아 놓으면 겨울에 결로가 생기는데 이 정도는 괜찮아요."} value={"1"}/>
                        <CheckViewBox num={"6"} categoryName={"누수, 침수"} qText={"천장이나 벽에 누수나 침수 문제는 없습니까?"} qtype={"1"} comment={"누수나 침수는 없었어요. 아래집이나 윗집에서도 연락 온 것도 없어요."} value={"5"}/>
                        <CheckViewBox num={"7"} categoryName={"수압, 배수"} qText={"주방, 세면기, 샤워기 등 수압은 쎈 편이며 배수는 잘 됩니까?"} qtype={"2"} comment={"현관 밖에 수도 계량기 쪽에 수도 밸부 열면 매우 쎄게 나와요."} value={"5"}/>
                        <CheckViewBox num={"8"} categoryName={"냄새"} qText={"화장실, 주방, 세탁실 등에 안 좋은 냄새가 납니까?"} qtype={"3"} comment={"화장실 매우 깨끗해요. 하수구 냄새 전혀 없어요."} value={"5"}/>
                        <CheckViewBox num={"9"} categoryName={"벌레"} qText={"파리, 모기, 바퀴벌레, 개미, 거미 등 벌레가 많습니까?"} qtype={"1"} comment={"여름에 모기가 가끔씩 나타나요. 모기향이 필요해요."} value={"5"}/>
                        <CheckViewBox num={"10"} categoryName={"채광"} qText={"햇볕이 잘 들어오고 환기, 통풍이 잘 됩니까?"} qtype={"2"} comment={"A형 맞통품 구조고 남동향이라서 햇볕이 잘 들어와요."} value={"5"}/>
                        <CheckViewBox num={"11"} categoryName={"전기, 누전"} qText={"콘센트는 적당이 있고 누전은 없고, 전기공급은 원할합니까?"} qtype={"4"} comment={"콘센트 많고, 누전 발생한 적 없어요."} value={"5"}/>
                        <CheckViewBox num={"12"} categoryName={"기타소음"} qText={"벌레, 동물, 도로, 공사 소음 등은 없습니까?"} qtype={"1"} comment={" 앞에 대로가 있어서 자동차 소리가 나기도 하지만 낮에는 못느껴요."} value={"5"}/>
                        <CheckViewBox num={"13"} categoryName={"인테리어"} qText={"붙박이 가구, 문, 샤시 등 내부 시설 품질이 양호합니까?"} qtype={"4"} comment={"인테리어가 깔끔해요. 나쁘지 않아요. 꾸며도 되고요."} value={"5"}/>
                        <CheckViewBox num={"14"} categoryName={"사생활침해"} qText={"옆집, 앞집 간 프라이버시, 사생활 침해요소가 있습니까?"} qtype={"1"} comment={"옆집이 아니라 앞집이예요. 현관문을 마주보고 있어서 약간 불편해요."} value={"1"}/>
                        <CheckViewBox num={"15"} categoryName={"주차"} qText={"주차장은 넓고 주차가 편리한가요?"} qtype={"5"} comment={"주차장은 세대당 1.5대라서 큰 불편함이 없어요. 다만 간격이 약간 좁아요. "} value={"3"}/>
                        <CheckViewBox num={"16"} categoryName={"쓰레기배출"} qText={"분리수거, 음식물, 쓰레기 등을 버리는 것이 편리합니까?"} qtype={"5"} comment={"매주 1회만 분리수거 해요. 불편해요. 음식물 쓰레기도 봉투에 넣어서 버려요. 짜증나요"} value={"3"}/>
                        <CheckViewBox num={"17"} categoryName={"보안"} qText={"좀도둑, 잡상인이 없고 CCTV가 많고 경비가 잘됩니까?"} qtype={"2"} comment={"매주 1회만 분리수거 해요. 불편해요. 음식물 쓰레기도 봉투에 넣어서 버려요. 짜증나요"} value={"3"}/>
                        <CheckViewBox num={"18"} categoryName={"혐오시설"} qText={"근처에 쓰레기집하장, 하수처리장, 사육장, 고물상 등 혐오실설이 있습니까?"} qtype={"1"} comment={"지역난방공사가 근처에 있어요."} value={"1"}/>
                        <CheckViewBox num={"19"} categoryName={"상대평가"} qText={"집합건물 내 다른 가구, 근처 가구에 비하여 더 좋다고 생각하십니까?"} qtype={"6"} comment={"다른 집보다는 좋은것 같아요. 뷰도 좋고"} value={"1"}/>
                        <CheckViewBox num={"20"} categoryName={"추천여부"} qText={"이 집을 타인에게 추천하고 싶습니까?"} qtype={"6"} comment={"추천하고 싶어요. 너무 괜찮아요."} value={"1"}/>
                    </div>
                    <div className="notice-box">
                        <h2>유의사항</h2>
                        <p>
                        후기부등본의 내용은 실거주자나 공인중개사의 개인적인 의견으로 이용자가 집을 확인할 수 있는 참고 자료일 뿐입니다. 후기부등본 내용에 대한 해석은 이 용자의 판단에 따라 다를 수 있으며 당사는 이용자의 판단에 대한 어떠한 책임 이나 권한도 없습니다.
                        </p>
                    </div>
                    <div className="img-list">
                        <ImgBox onClick={handleClickOpen}/>
                        <ImgBox onClick={handleClickOpen}/>
                        <ImgBox onClick={handleClickOpen}/>
                        <ImgBox onClick={handleClickOpen}/>
                        <ViewImgModal handleClose={handleClickClose} open={openModal} />
                    </div>
                    <div className="sign-box">
                        <img src="/img/logo-sign.svg"/>
                    </div>
                    <div className="verification-box">
                        <div className="title">
                            <h2>공인중개사 검증 신청</h2>
                        </div>
                        <p>
                        이용자가 후기부등본 실거주자의 평가의견과 생각이 다른 경우, 공인중개사의 평 가의견을 요청할 수 있습니다.검증 진행 시 후기부등본에 공인중개사 평가의견 이 함께 기록됩니다. 검증신청 비용은 165,000원이며, 평균 30일 이내 검증이 완료됩니다.
                        </p>
                    </div>
                    <div className="center-btn">
                        <RoundCBtn text={"공인중개사 검증 신청"} />
                    </div>
                    <CommentWrap>
                        <h2>댓글(<span>00</span>)</h2>
                        <CommentinputBox>
                            <div className="profile-wrap">
                                <div className="profile-img"></div>
                                <h3>XTCOT12134</h3>
                            </div>
                            <TextArea
                            id="outlined-multiline-static"
                            multiline
                            rows={5}
                            sx={{ p : 0}}
                            onChange={onInputHandler}
                            placeholder={`상세설명은 정상적인 내용으로 최소 10자 이상 입력해야 합니다.\n서비스와 무관하거나 권리침해, 욕설, 비하, 명예훼손, 혐오, 스팸 등\n불법적인 내용 및 미풍양속에 어긋나는 내용을 게시하면 운영정책 및 관련 법률에 의해 제재될 수 있습니다.`}
                            />
                        </CommentinputBox>
                        <ul className="send-wrap">
                            <li>
                                <span className="num">({inputCount}/<span>300</span>)</span>
                                <p>※ 본인이 쓴 내용에 대한 법적 책임은 본인에게 있습니다.</p>
                            </li>
                            <li>
                                <Button variant="contained">등록</Button>
                            </li>
                        </ul>
                        <CommentBox>
                            <div>
                                <h3>abc******</h3>
                                <p>어떤것은 고쳤습니다.</p>
                                <h5>2023-12-21</h5>
                            </div>
                        </CommentBox>
                        <CommentBox>
                            <div>
                                <h3>Bde******</h3>
                                <p>어떤것은 고쳤습니다.</p>
                                <h5>2023-12-21</h5>
                            </div>
                        </CommentBox>
                        <CommentBox>
                            <div>
                                <h3 className="id">XTCOT12134 <span>NEW</span></h3>
                                <p>어떤것은 고쳤습니다.</p>
                                <h5>2023-12-21</h5>
                            </div>
                            <Button variant="outlined" color="error">삭제</Button>
                        </CommentBox>
                        {
                            add ?
                            <>
                                <CommentBox>
                                    <div>
                                        <h3>abc******</h3>
                                        <p>어떤것은 고쳤습니다.</p>
                                        <h5>2023-12-21</h5>
                                    </div>
                                </CommentBox>
                                <CommentBox>
                                    <div>
                                        <h3>Bde******</h3>
                                        <p>어떤것은 고쳤습니다.</p>
                                        <h5>2023-12-21</h5>
                                    </div>
                                </CommentBox>
                                <CommentBox>
                                    <div>
                                        <h3>Bde******</h3>
                                        <p>어떤것은 고쳤습니다.</p>
                                        <h5>2023-12-21</h5>
                                    </div>
                                </CommentBox>
                            </> : <></>
                        }
                        {
                        !add ?
                        <div className="add-btn">
                            <Button variant="contained" onClick={handleClickAdd}>
                                더보기
                                <AddCircleOutlineIcon />
                            </Button>
                        </div> : <></>
                        }
                    </CommentWrap>
                </StyledDialogContent>
            </StyledDialog>
            </ThemeProvider>
        </React.Fragment>
        </>
    )
}

const StyledDialog = styled(Dialog)`
    .MuiPaper-root{
        min-width: 78rem;
        border-radius: 18px;
    }
    @media ${() => theme.device.mobile} {
        .MuiPaper-root{
            width: 100%;
            min-width: 100% !important;
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
    height: 70rem;
    /* max-height: 70rem; */
    overflow-y: scroll;
    padding: 2rem;
    h2{
        font-size: 1.8rem;
        color: #0E301D;
        font-weight: bold;
        line-height: 150%;
    }
    .logo-title{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        border-bottom: 2px solid #00D45E;
        padding: 2rem 0 3rem 0;
    }
    .button-wrap{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 2rem;
        button{
            font-size: 1.6rem;
            border-radius: 100px;
            padding: .5rem 3rem;
        }
    }
    .check-view-box-list{
        margin-top: 2rem;
        border-bottom: 1px solid #d9d9d9;
        &>div{
            margin-bottom: 2rem;
        }
    }
    .notice-box{
        padding: 2rem 0;
        p{
            font-size: 1.6rem;
            color: #888888;
            line-height: 150%;
            margin-top: 1rem;
        }
    }
    .img-list{
        display: flex;
        align-items: center;
        &>div:last-of-type{
            margin: 0;
        }
    }
    .sign-box{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .center-btn{
        display: flex;
        align-items: center;
        justify-content: center;
        padding-bottom: 3rem;
        border-bottom: 2px solid #00D45E;
    }
    .verification-box{
        border-radius: 8px;
        border: 1px solid #d9d9d9;
        margin-bottom: 3rem;
        .title{
            padding: 1.5rem 2rem;
            border-bottom: 1px solid #d9d9d9;
            h2{
                font-size: 1.8rem;
                color: #0E301D;
                font-weight: 500;
            }
        }
        p{
            font-size: 1.6rem;
            line-height: 150%;
            color: #0E301D;
            font-weight: 400;
            padding: 1.5rem 2rem;
        }
    }
    @media ${() => theme.device.mobile} {
        height: auto;
        max-height: auto !important;
        .button-wrap{
            button{
                font-size: 1.4rem;
                padding: .5rem 1.5rem;
            }
        }
        .img-list{
            flex-wrap: wrap;
            &>div:last-of-type{
            margin: 0 0 1rem 0;
            }
        }
    }
`;

const AttestedCopyBox = styled(Box)`
    background-color: #fff;
    padding: 3rem;
    border-bottom: 1px solid #d9d9d9;
    margin-bottom: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    .tag-list{
        display: flex;
        align-items: center;
        li{
            margin-right: 1rem;
        }
        li:last-of-type{
            margin: 0;
        }
        #tag1{
            background-color: #F6F6F6;
            color: #000;
            border-radius: 100px;
        }
        #tag2{
            background-color: #00D45E;
            color: #fff;
            border-radius: 100px;
        }
        #tag3{
            background-color: #003BD4;
            color: #fff;
            border-radius: 100px;
        }
    }
    h1{
        font-size: 2.4rem;
        font-weight: bold;
        line-height: 150%;
        color: #0E301D;
        text-align: right;
    }
    h2{
        font-size: 2rem;
        font-weight: bold;
        line-height: 150%;
        margin-top: 1rem;
        color: #0E301D;
    }
    p{
        font-size: 1.4rem;
        color: #888888;
        line-height: 150%;
        margin-top: 1rem;
    }
    &>div:last-of-type p{
        text-align: right;
    }
    @media ${() => theme.device.mobile} {
        padding: 2rem 0;
        &>div:first-of-type{
            width: 50%;
        }
        h1{
            font-size: 2rem;
        }
        h2{
            font-size: 1.8rem;
        }
        h2 br{
            display: none;
        }
    }
`;


const OpinionBox = styled(Box)`
    border: 1px solid #D9D9D9;
    border-radius: 8px;
    margin-bottom: 2rem;
    .title{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 2rem;
        border-bottom: 1px solid #D9D9D9;
        h2{
            font-size: 1.8rem;
            font-weight: bold;
            color: #0E301D;
        }
        .rating-box{
            display: flex;
            align-items: center;
            svg{
                width: 2.5rem;
                height: 2.5rem;
            }
        }
        h3{
            font-size: 1.4rem;
            color: #fff;
            background-color: #F6C413;
            border-radius: 100px;
            padding: .3rem .8rem;
            margin-left: 1rem;
        }
    }
    .content{
        padding: 2rem;
        height: 20rem;
        overflow-y: scroll;
        h3{
            font-size: 1.6rem;
            line-height: 150%;
            font-weight: 400;
        }
    }
`;


const TagBox = styled(Box)`
    font-size: 1.2rem;
    padding: .5rem 1rem;
`;

const StyledToggleButtonGroup = styled(ToggleButtonGroup)`
    .Mui-selected{
        background-color: #00D45E !important;
        color: #fff !important;
        border-color: #00D45E;
    }
    button:first-of-type{
        margin-right: 1rem;
    }
`;

const StyledToggleButton = styled(ToggleButton)`
    font-size: 1.6rem;
    border-radius: 100px !important;
    padding: .5rem 3rem;
    border-left: 1px solid #d9d9d9 !important;
`; 

const ImgBox = styled(Box)`
    width: 24%;
    height: 17rem;
    border-radius: 8px;
    background-image: url(../img/sample.png);
    background-repeat: no-repeat;
    background-size : cover;
    background-position: center;
    margin-right: 1rem;
    @media ${() => theme.device.mobile} {
        width: 45%;
        margin-bottom: 1rem;
        /* margin: 0; */
    }
`;

const CommentWrap = styled(Box)`
    padding: 2rem 0;
    h2{
        font-size: 1.8rem;
        color: #0E301D;
        font-weight: 600;
        line-height: 150%;
        margin-bottom: 2rem;
        span{
            font-size: 1.8rem;
        }
    }
    .send-wrap{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 2rem 0;
        border-bottom: 2px solid #d9d9d9;
        button{
            font-size: 1.6rem;
            color: #0E301D;
            box-shadow: none;
            border-radius: 100px;
            padding: .5rem 3rem;
            background-color: #F6F6F6;
        }
        span{
            font-size: 1.4rem;
            color: #888888;
        }
        p{
            font-size: 1.4rem;
            font-weight: 500;
            color: #888888;
            line-height: 150%;
        }
    }
    .add-btn{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 2rem;
        button{
            background-color: transparent;
            font-size: 1.6rem;
            color: #888888;
            border-radius: 100px;
            box-shadow: none;
            svg{
                margin-left: .5rem;
                width: 2rem;
                height: 2rem;
            }
        }
    }
`;

const CommentinputBox = styled(Box)`
    border: 1px solid #d9d9d9;
    border-radius: 8px;
    .profile-wrap{
        padding: 2rem 2rem 0 2rem;
        display: flex;
        align-items: center;
        .profile-img{
            background-image: url(../img/sample.png);
            background-repeat: no-repeat;
            background-size : cover;
            background-position: center;
            width: 24px;
            height: 24px;
            border-radius: 100px;
            margin-right: 1rem;
        }
        h3{
            font-size: 1.6rem;
            color: #0E301D;
            font-weight: 600;
        }
    }

`;

const TextArea = styled(TextField)`
    width: 100%;
    margin-top: 1.5rem;
    border: none;
    textarea{
        font-size: 1.6rem;
        line-height: 150%;
        white-space: pre-wrap;
        border: none !important; 
    }
    fieldset{
        border: none;
    }
`;

const CommentBox = styled(Box)`
    padding: 2rem 0;
    border-bottom: 1px solid #d9d9d9;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .id{
        color: #00D45E;
        font-weight: bold;
    }
    button{
        font-size: 1.4rem;
        border-color: #FF8484;
        color: #FF8484;
        padding: .3rem 2rem;
        border-radius: 100px;
    }
    h3{
        font-size: 1.4rem;
        font-weight: 600;
        line-height: 150%;
        color: #0E301D;
        span{
            background-color: #F6C413;
            padding: .1rem .8rem;
            color: #fff;
            border-radius: 100px;
            display: inline-block;
            margin-left: .5rem;
            font-size: 1rem;
        }
    }
    p{
        font-size: 1.4rem;
        color: #888888;
        line-height: 150%;
        margin-top: .5rem;
    }
    h5{
        font-size: 1.2rem;
        color : #888888;
        line-height: 150%;
        margin-top: 1rem;
        font-weight: 300;
    }
`;