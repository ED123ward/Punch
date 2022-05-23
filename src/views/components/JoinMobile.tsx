import React from "react";
import styled from "styled-components";

import Icon1 from "../components/assets/joinIcon1.svg";
import Icon2 from "../components/assets/joinIcon2.svg";
import Input from "../components/assets/input.svg";
import JoinButton1 from "../components/assets/joinButton1.svg"

const Join: React.FC = () => {
  const goPage = (e: any) => {
    window.open(e.target.getAttribute("value"));
  };
  return (
    <>
      <JoinBlock>
        <JoinTitle>Partners</JoinTitle>
        <JoinText>
        Get to know our partners
        </JoinText>
        <JoinIconBlock>
          <JoinIcon1 src={Icon1} />
          <JoinIcon1 src={Icon2} />
        </JoinIconBlock>
        {/* <JoinButtonIcon src={JoinButton1} /> */}
        <JoinButton onClick={goPage} value={'https://xp7p8i7wuyi.typeform.com/to/XN2soJBm'} >SIGN  UP</JoinButton>
      </JoinBlock>
    </>
  );
};

export default Join;

const JoinBlock = styled.div`
  width: 7.5rem;
  height: 5.77rem;
  background-color: #f3fbfe;
`;

const JoinTitle = styled.div`
  font-style: normal;
  font-weight: 900;
  font-size: 0.36rem;
  line-height: 0.52rem;
  color: #5687fc;
  text-align: center;
  padding-top: 0.81rem;
`;

const JoinText = styled.div`
  width: 6rem;
  margin: 0.27rem auto 0 auto;
  text-align: centerx;
  font-style: normal;
  font-weight: 500;
  font-size: 0.18rem;
  line-height: 0.3rem;
  text-align: center;
  letter-spacing: 0.005em;
  color: rgba(105, 116, 140, 0.56);
`;

const JoinIconBlock = styled.div`
  width: 6rem;
  display: flex;
  justify-content: space-around;
  margin: 0.8rem auto 0.85rem auto;
`;

const JoinIcon1 = styled.img`
  /* width: 1.5rem; */
  height: 0.67rem;
`;

const JoinIcon2 = styled.img`
  /* width: 1.79rem; */
  height: 0.67rem;
`;

const JoinInput = styled.img`
  width: 7.2rem;
  height: 0.8rem;
  margin: 0 auto;
  display: block;
`;

const JoinButton = styled.div`
  width: 2.47rem;
  height: 0.63rem;
  background: #5687fc;
  border: 0.02rem solid #ffffff;
  border-radius: 0.12rem;
  text-align: center;
  line-height: 0.63rem;
  font-weight: 800;
  font-size: 0.2rem;
  color: #ffffff;
  display: block;
  margin: 0 auto;
  cursor: pointer;
`;

const JoinButtonIcon = styled.img`
  width: 2.47rem;
  height: 0.63rem;
  display: block;
  margin: 0 auto;
`

