import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import {
  ContainerBox3,
  EndButton,
  SubBanner,
  WriteBox,
  WriteWrap,
} from "./page.style";
import Footer from "../../components/footer/Footer";
import Nav from "../../components/nav/Nav";

import BasicBtn from "@/app/components/button/BasicBtn";
import InputText from "@/app/components/input/InputText";
import SelectBasic from "@/app/components/input/SelectBasic";
import WriteTitle from "@/app/components/title/WriteTitle";

export default function Write() {
  return (
    <>
      <Nav />
      <SubBanner>
        <h2>후기부등본을 등록하세요.</h2>
        <h1>후기부등본 등록</h1>
      </SubBanner>
      <WriteWrap>
        <ContainerBox3>
          <h3>다음 세입자를 위해 실거주 후기를 등록하고 돈도 벌어 보세요.</h3>
          <h3>
            실거주 후기부등본은 <strong>유료로 판매</strong>됩니다.
            <br />
            후기등록자에게 <strong>판매수익의 60%</strong>를 지급해드립니다.
            <br />
            <strong>
              2000년 이후 실거주 했던 여러 주소지에 대해 최대 30건
            </strong>
            까지 등록할 수 있습니다.
          </h3>
          <ul className="process-wrap">
            <li>
              <h4>1단계</h4>
              <h2>주소</h2>
            </li>
            <div className="icon-box">
              <KeyboardArrowRightIcon />
            </div>
            <li>
              <h4>2단계</h4>
              <h2>평가(20)</h2>
            </li>
            <div className="icon-box">
              <KeyboardArrowRightIcon />
            </div>
            <li>
              <h4>3단계</h4>
              <h2>완료</h2>
            </li>
          </ul>
          <WriteBox>
            <WriteTitle
              num={"1단계"}
              text={"실거주 했던 주소를 입력해 주세요."}
            />
            <ul>
              <li>
                <h4>도로명 주소</h4>
                <InputText placeholder={"도로명 주소를 입력하세요."} />
              </li>
              <li>
                <h4>상세주소</h4>
                <InputText placeholder={"상세주소를 입력하세요."} />
              </li>
              <li>
                <div className="text-box">
                  <h4>거주년도</h4>
                </div>
                <div className="select-wrap">
                  <SelectBasic type={"year"} placeholder={"거주년도"} />
                  <p>※ 2000년 이후 실거주자만 등록가능</p>
                </div>
              </li>
            </ul>
          </WriteBox>
          <EndButton>
            <BasicBtn text={"다음"} />
          </EndButton>
        </ContainerBox3>
      </WriteWrap>
      <Footer />
    </>
  );
}
