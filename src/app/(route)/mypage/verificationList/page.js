"use client";

import styled from "@emotion/styled";
import { Box } from "@mui/material";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import "../../../style/global.css";
import PropTypes from "prop-types";
import { useState } from "react";

import AttestedCopyMobile from "@/app/components/attestedCopy/mobileView/page";
import MobileBox from "@/app/components/layout/MobileBox";
import MobileNav from "@/app/components/nav/MobileNav";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function VerificationList() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <MobileBox>
      <MobileNav text={"검증 후기부등본"} />
      <TabListWrap>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <StyledTabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <StyledTab label="접수" {...a11yProps(0)} />
            <StyledTab label="진행" {...a11yProps(1)} />
            <StyledTab label="완료" {...a11yProps(2)} />
            <StyledTab label="거절" {...a11yProps(3)} />
          </StyledTabs>
        </Box>
        <StyledCustomTabPanel value={value} index={0}>
          <h3 className="all-num">총 000건</h3>
          <div className="list">
            <AttestedCopyMobile type={"거절수락"} view={"none"} />
            <AttestedCopyMobile type={"거절수락"} view={"none"} />
            {/* 
                                    등록된 후기부등본 없을때
                                    <h2 className="none">접수 된 후기부등본이 없습니다.</h2>
                                 */}
          </div>
        </StyledCustomTabPanel>
        <StyledCustomTabPanel value={value} index={1}>
          <h3 className="all-num">총 000건</h3>
          <div className="list">
            <AttestedCopyMobile type={"검증진행"} view={"none"} />
            <AttestedCopyMobile type={"검증진행"} view={"none"} />
            {/* 
                                    작성완료 된 후기부등본 없을때
                                    <h2 className="none">진행 된 후기부등본이 없습니다.</h2>
                                 */}
          </div>
        </StyledCustomTabPanel>
        <StyledCustomTabPanel value={value} index={2}>
          <h3 className="all-num">총 000건</h3>
          <div className="list">
            <AttestedCopyMobile type={"검증완료"} view={"none"} />
            <AttestedCopyMobile type={"검증완료"} view={"none"} />
            {/* 
                                    검토중인 후기부등본 없을때
                                    <h2 className="none">검증완료 후기부등본이 없습니다.</h2>
                                 */}
          </div>
        </StyledCustomTabPanel>
        <StyledCustomTabPanel value={value} index={3}>
          <h3 className="all-num">총 000건</h3>
          <div className="list">
            <AttestedCopyMobile type={"작성중"} view={"none"} />
            <AttestedCopyMobile type={"작성중"} view={"none"} />
            {/* 
                                    반려 된 후기부등본 없을때
                                    <h2 className="none">반려 된 후기부등본이 없습니다.</h2>
                                 */}
          </div>
        </StyledCustomTabPanel>
      </TabListWrap>
    </MobileBox>
  );
}

const TabListWrap = styled(Box)`
  padding-top: 6.5rem;
`;

const StyledTabs = styled(Tabs)``;

const StyledTab = styled(Tab)`
  font-size: 1.6rem;
  color: #0e301d;
  font-weight: 400;
  width: 25%;
`;

const StyledCustomTabPanel = styled(CustomTabPanel)`
  .all-num {
    font-size: 1.8rem;
    color: #0e301d;
    font-weight: 600;
    margin-bottom: 2rem;
  }
  .list {
    .none {
      font-size: 1.6rem;
      text-align: center;
      padding: 5rem 0;
      color: #888888;
      font-weight: 500;
    }
    & > div {
      margin-bottom: 2rem;
    }
  }
`;
