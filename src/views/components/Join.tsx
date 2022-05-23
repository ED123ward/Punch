import React from "react";
import styled from "styled-components";

import Icon1 from "../components/assets/joinIcon1.svg";
import Icon2 from "../components/assets/joinIcon2.svg";
import Input from "../components/assets/input.svg";

const Join: React.FC = () => {
  const goPage = (e:any) => {
    window.open(e.target.getAttribute('value'))
}
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
        <JoinButton onClick={goPage} value={'https://xp7p8i7wuyi.typeform.com/to/XN2soJBm'}>SIGN  UP</JoinButton>
      </JoinBlock>
    </>
  );
};

export default Join;

const JoinBlock = styled.div`
  width: 100%;
  height: 6.5rem;
  background-color: #f3fbfe;
`;

const JoinTitle = styled.div`
  font-style: normal;
  font-weight: 900;
  font-size: 0.48rem;
  line-height: 0.7rem;
  color: #5687fc;
  text-align: center;
  padding-top: 0.73rem;
`;

const JoinText = styled.div`
  width: 10.2rem;
  margin: 0.27rem auto 0 auto;
  font-family: "M PLUS 2";
  text-align: centerx;
  font-style: normal;
  font-weight: 500;
  font-size: 0.18rem;
  line-height: 0.44rem;
  text-align: center;
  letter-spacing: 0.005em;
  color: rgba(105, 116, 140, 0.56);
`;

const JoinIconBlock = styled.div`
  width: 8.57rem;
  display: flex;
  justify-content: space-around;
  margin: 0.8rem auto 1.09rem auto;
`;

const JoinIcon1 = styled.img`
  width: 2.3rem;
  height: 1.02rem;
`;

const JoinIcon2 = styled.img`
  width: 2.74rem;
  height: 1.02rem;
`;

const JoinInput = styled.img`
  width: 7.2rem;
  height: 0.8rem;
  margin: 0 auto;
  display: block;
`;

const JoinButton = styled.div`
  width: 1.9rem;
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
