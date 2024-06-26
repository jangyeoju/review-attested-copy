"use client";

import styled from "@emotion/styled";
import { Box } from "@mui/material";
import Switch from "@mui/material/Switch";
import "../../../style/global.css";

import MobileBox from "@/app/components/layout/MobileBox";
import MobileContainerBox from "@/app/components/layout/MobileContainerBox";
import MobileNav from "@/app/components/nav/MobileNav";

const label = { inputProps: { "aria-label": "Switch demo" } };

export default function NotificationSettings() {
  return (
    <MobileBox>
      <MobileNav text={"알림설정"} />
      <MobileContainerBox>
        <SettingWrap>
          <ul>
            <li>
              <h2>후기부등본 등록/반려</h2>
              <div className="setting-box">
                <h3>실거주 후기부등본 등록</h3>
                <Switch {...label} />
              </div>
              <div className="setting-box">
                <h3>실거주 후기부등본 반려</h3>
                <Switch {...label} />
              </div>
            </li>
            <li>
              <h2>후기부등본 조회</h2>
              <div className="setting-box">
                <h3>내 유료 후기부등본 조회</h3>
                <Switch {...label} />
              </div>
            </li>
            <li>
              <h2>후기부등본 검증</h2>
              <div className="setting-box">
                <h3>검증진행 (진행, 거절, 완료)</h3>
                <Switch {...label} />
              </div>
              <div className="setting-box">
                <h3>검증접수(공인중개사)</h3>
                <Switch {...label} defaultChecked />
              </div>
            </li>
            <li>
              <div className="setting-box">
                <h2>이벤트 / 광고</h2>
                <Switch {...label} />
              </div>
            </li>
          </ul>
        </SettingWrap>
      </MobileContainerBox>
    </MobileBox>
  );
}

const SettingWrap = styled(Box)`
  padding-top: 6.5rem;
  ul {
    li {
      margin-bottom: 2rem;
      padding-bottom: 2rem;
      border-bottom: 1px solid #d9d9d9;
      .setting-box {
        display: flex;
        align-items: center;
        justify-content: space-between;
        h3 {
          font-size: 1.6rem;
          color: #0e301d;
          font-weight: 400;
        }
      }
      h2 {
        font-size: 1.8rem;
        color: #0e301d;
        font-weight: 500;
        line-height: 150%;
        margin-bottom: 1rem;
      }
    }
    li:last-of-type {
      border-bottom: none;
      h2 {
        margin: 0;
      }
    }
  }
`;
