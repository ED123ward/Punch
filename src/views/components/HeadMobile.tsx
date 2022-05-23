import React from "react";
import styled from "styled-components";
import { Row, Col } from "antd";
import HeadBackground from "./assets/headBackgroud.png";
import Nav from "./NavMobile";
import Title from "./assets/title.svg";
import JoinButton2 from "../components/assets/joinButton2.svg"

const Head: React.FC = () => {
  const goPage = (e: any) => {
    window.open(e.target.getAttribute("value"));
  };
  return (
    <>
      <HeadImg>
        <Nav></Nav>
       <TitleBlock>PUNCH GAMES</TitleBlock>
        {/* <HeadButtonIcon src={JoinButton2} /> */}
        <HeadButton onClick={goPage} value={'https://xp7p8i7wuyi.typeform.com/to/XN2soJBm'} >SIGN  UP</HeadButton>
      </HeadImg>
    </>
  );
};

export default Head;

const HeadImg = styled.div`
  width: 7.5rem;
  height: 4.36rem;
  background-image: url(${HeadBackground});
  background-position: 50% 0%;
  background-repeat: no-repeat;
  background-size: 7.5rem 4.36rem;
  padding:  0;
  background-color: #f3fbfe;
`;

const TitleBlock = styled.div`
  font-style: normal;
  font-weight: 900;
  font-size: 0.64rem;
  letter-spacing: 0.1rem;
  color: #ffffff;
  display: block;
  margin: 0.71rem auto 0 auto;
  text-align: center;
`;

const HeadButton = styled.div`
  width: 2rem;
  height: 0.4rem;
  background: #ffffff;
  border: 0.02rem solid #ffffff;
  border-radius: 0.12rem;
  margin: 0.78rem auto 0 auto;
  line-height: 0.4rem;

  font-style: normal;
  font-weight: 800;
  font-size: 0.18rem;
  color: #6079fe;
  text-align: center;
  cursor: pointer;
`;

const HeadButtonIcon = styled.img`
  width: 2.47rem;
  height: 0.63rem;
  display: block;
  margin: 0.78rem auto 0 auto;
`

