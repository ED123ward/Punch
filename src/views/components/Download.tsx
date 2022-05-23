import React,{useState} from "react";
import styled, { keyframes } from "styled-components";

import DownGroud from "./assets/downloadBackgroud.svg";
import DownPhone from "./assets/downPhone.svg";
import DownTitleIcon from "./assets/downTitleIcon.svg";

import DownAnd from "./assets/downAnd.svg";
import DownIos from "./assets/downIos.svg";

const Download: React.FC = () => {

  const [showAnd, isshowAnd] = useState(true);
  const [showIos, isshowIos] = useState(true);
  return (
    <>
      <DownloadBlock>
        <DownLeft>
          <DownLeftImg src={DownPhone} />
        </DownLeft>
        <DownRight>
          <DownRightTitle>
            DOWNLOAD NOW <DownRightTitleIcon src={DownTitleIcon} />
          </DownRightTitle>
          <DownText>
            Punch Games is the world leading eSports platform for mobile games.
            We organizes head to head matches, tournament and live events inside
            mobile games. Our platform helps mobile game developers turn their
            casual esports games into a competitive mobile arena with our
            platform.
          </DownText>
          <DownText>
            Punch Games is the world leading eSports platform for mobile games.
            We organizes head to head matches, tournament and live events inside
            mobile games. Our platform helps mobile game developers turn their
            casual esports games into a competitive mobile arena with our
            platform.
          </DownText>
          <DownAppButtonBlock>
            <DownQRBlock>
            <DownShow>
            <DownAppButton src={DownIos} onClick={() => isshowIos(!showIos)} />
         
            <ShowSoon className="show">Coming Soon</ShowSoon>
            </DownShow>
            <ShowQR hidden={showIos} >Not yet open...</ShowQR>
            </DownQRBlock>

            <DownQRBlock>
            <DownShow>
            <DownAppButton src={DownAnd} onClick={() => isshowAnd(!showAnd)} />
            <ShowSoon className="show">Coming Soon</ShowSoon>
            </DownShow>

            <ShowQR hidden={showAnd} >Not yet open...</ShowQR>
            </DownQRBlock>
          
        
          </DownAppButtonBlock>
        </DownRight>
      </DownloadBlock>
    </>
  );
};

export default Download;



const DownloadBlock = styled.div`
  width: 100%;
  height: 9.3rem;
  background-image: url(${DownGroud});
  background-repeat: no-repeat;
  background-position: 50% 0;
  background-size: 14.4rem 8.51rem;
  position: relative;
  display: flex;
  justify-content: space-between;
  
  
`;



const animate = `
0% {
  margin-top: 0px;
}
100% {
  margin-top: 20px;
}
`

const keyframe = keyframes`${animate}`

const DownLeftImg = styled.img`
  width: 5.39rem;
  height: 6.49rem;
  margin-left: 2.08rem;

  
  animation-name:${keyframe};
    animation-duration:1.2s;
    animation-timing-function:linear;
    animation-delay:0s;
    animation-iteration-count:infinite;
    animation-fill-mode:forwards;
    animation-direction:alternate;
`;

const DownLeft = styled.div`
  width: 7.4rem;
  margin-top:1.55rem;
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

const DownRightTitleIcon = styled.img`
  width: 0.56rem;
  height: 0.56rem;
  position: relative;
  bottom: 0.04rem;
  margin-left: 0.34rem;
`;

const DownText = styled.div`
  width: 3.88rem;
  margin-top: 0.65rem;
  margin-left: 1.41rem;
  font-style: normal;
  font-weight: 500;
  font-size: 0.18rem;
  letter-spacing: 0.005rem;
  color: #69748c;
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

const DownQRBlock = styled.div`
  
`

const ShowQR = styled.div`
  width: 1.58rem;
  height: 1.58rem;
  margin: 0 auto;
  box-shadow: 0px 0px 21px 1px #D9F2FC;
  position: relative;
  top: -0.1rem;
  background-color: #ffffff;
  border-radius: 0.08rem;
  line-height: 1.58rem;
  text-align: center;
`
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
