import { Banner } from "./page.style";
import Footer from "../../components/footer/Footer";
import Nav from "../../components/nav/Nav";

import ContainerBox from "@/app/components/layout/ContainerBox";
import { NoticeList } from "@/app/components/pages/notice/NoticeList";

export default function Notice() {
  return (
    <>
      <Nav />
      <Banner>
        <ContainerBox>
          <h1>공지 이벤트</h1>
          <p>공지사항 및 이벤트를 확인하세요.</p>
        </ContainerBox>
      </Banner>
      <NoticeList />
      <Footer />
    </>
  );
}
