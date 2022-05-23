import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

import DownGroud from "./assets/downloadBackgroud.svg";
import DownPhone from "./assets/downMobileBack.svg";
import DownTitleIcon from "./assets/downTitleIcon.svg";

import DownAnd from "./assets/downAnd.svg";
import DownIos from "./assets/downIos.svg";

const Download: React.FC = () => {
  return (
    <>
      <DownloadBlock>
        <DownText>
        <DownTextPram>Punch</DownTextPram>, a Web3 PVP gaming platform where players can compete in
          tournaments and socialize with friends.
        </DownText>
        <DownLeft>
          <DownLeftImg src={DownPhone} />
        </DownLeft>
      </DownloadBlock>
    </>
  );
};

export default Download;

const DownloadBlock = styled.div`
  width: 100%;
  height: 9.9rem;
  background-image: url(${DownGroud});
  background-repeat: no-repeat;
  background-position: 50% 0;
  background-size: 14.4rem 8.51rem;
  position: relative;
  background-color: #f3fbfe;
`;

const animate = `
0% {
  margin-top: 0px;
}
100% {
  margin-top: 20px;
}
`;

const keyframe = keyframes`${animate}`;

const DownLeftImg = styled.img`
  width: 6.59rem;
  height: 5.86rem;
  margin-left: 0.82rem;

  animation-name: ${keyframe};
  animation-duration: 1.2s;
  animation-timing-function: linear;
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-fill-mode: forwards;
  animation-direction: alternate;
`;

const DownLeft = styled.div`
  width: 7.4rem;
`;

const DownRight = styled.div`
  width: 7.4rem;
`;

const DownRightTitle = styled.div`
  font-style: normal;
  font-weight: 900;
  font-size: 0.48rem;
  line-height: 0.7rem;
  color: #5687fc;
  margin-top: 1.25rem;
`;

const DownText = styled.div`
  width: 6.41rem;
  display: block;
  margin: 0 auto;
  padding-top: 0.65rem;
  line-height: 0.81rem;
  font-style: normal;
  font-weight: 500;
  font-size: 0.4rem;
  letter-spacing: 0.001rem;
  color: #69748c;
  text-align: center;
`;

const DownAppButtonBlock = styled.div`
  margin-top: 0.3rem;
  display: flex;
`;

const DownAppButton = styled.img`
  width: 2.54rem;
  height: 1rem;
  cursor: pointer;
  position: relative;
  text-align: center;
  margin: 0 auto;
  display: block;
`;

const DownQRBlock = styled.div``;

const ShowQR = styled.div`
  width: 1.58rem;
  height: 1.58rem;
  margin: 0 auto;
  box-shadow: 0px 0px 21px 1px #d9f2fc;
  position: relative;
  top: -0.1rem;
  background-color: #ffffff;
  border-radius: 0.08rem;
  line-height: 1.58rem;
  text-align: center;
`;
const DownShow = styled.div`
  position: relative;
  :hover {
    .show {
      display: block;
    }
  }
`;

const ShowSoon = styled.div`
  position: absolute;
  width: 1.22rem;
  height: 0.22rem;
  left: 1.1rem;
  top: 0.1rem;
  background: #ffffff;
  box-shadow: 0 0 0.02rem #4885f2;
  border-radius: 0.07rem;
  font-weight: 500;
  font-size: 0.12rem;
  line-height: 0.22rem;
  -webkit-letter-spacing: 0.005em;
  -moz-letter-spacing: 0.005em;
  -ms-letter-spacing: 0.005em;
  letter-spacing: 0.005em;
  color: #69748c;
  text-align: center;
  display: none;
`;

const DownTextPram = styled.div`
  font-size: 0.4rem;
  font-weight: 700;
  display: inline-block;
`;

