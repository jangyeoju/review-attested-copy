import { Banner, ResultList, SearchResult } from "./page.style";
import Footer from "../../components/footer/Footer";
import Nav from "../../components/nav/Nav";

import AttestedCopy from "@/app/components/attestedCopy/attestedCopy";
import ReviewBoxList from "@/app/components/common/ReviewBoxList";
import ContainerBox from "@/app/components/layout/ContainerBox";
import SearchBar from "@/app/components/search/SearchBar";
import SearchFilter from "@/app/components/search/SearchFilter";

export default function AdrSearch() {
  return (
    <>
      <Nav />
      <Banner>
        <ContainerBox>
          <h3>실거주자의 진짜후기</h3>
          <h1>
            주소로 실거주 후기를
            <br />
            확인하세요
          </h1>
        </ContainerBox>
        <div className="center-wrap">
          <SearchBar showSearchHistory />
        </div>
      </Banner>
      <ContainerBox>
        <ReviewBoxList />
      </ContainerBox>
      <SearchResult>
        <ContainerBox>
          <div className="title">
            <h3>
              검색결과 <strong>3</strong>건
            </h3>
            <div className="search-wrap">
              <SearchFilter />
            </div>
          </div>
        </ContainerBox>

        {/*검색결과 없을 때 */}
        {/* <ResultNone>
                    <p>검색 결과가 없습니다.</p>
                </ResultNone> */}

        <ContainerBox>
          <ResultList>
            <AttestedCopy
              tag1={true}
              tag2={true}
              tag3={true}
              price={"3,300원"}
            />
            <AttestedCopy tag1={true} tag2={true} tag3={false} price={"무료"} />
            <AttestedCopy
              tag1={true}
              tag2={true}
              tag3={false}
              price={"3,300원"}
            />
          </ResultList>
        </ContainerBox>
      </SearchResult>
      <Footer />
    </>
  );
}
