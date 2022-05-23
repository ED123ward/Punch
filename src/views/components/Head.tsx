import React from "react";
import styled from "styled-components";
import { Row, Col } from "antd";
import HeadBackground from "./assets/headBackgroud.png";
import Nav from "./Nav";
import Title from "./assets/title.svg";

const Head: React.FC = () => {
  const goPage = (e:any) => {
    window.open(e.target.getAttribute('value'))
}
  return (
    <>
      <HeadImg>
        <Nav></Nav>
       <TitleBlock>PUNCH GAMES</TitleBlock>
        <HeadButton onClick={goPage} value={'https://xp7p8i7wuyi.typeform.com/to/XN2soJBm'} >SIGN  UP</HeadButton>
      </HeadImg>
    </>
  );
};

export default Head;

const HeadImg = styled.div`
  width: 14.4rem;
  height: 8.4rem;
  background-image: url(${HeadBackground});
  background-position: 50% 0%;
  background-repeat: no-repeat;
  background-size: 14.4rem 8.4rem;
  padding: 0.3rem 0;
  background-color: #f3fbfe;
`;

const TitleBlock = styled.div`
  font-style: normal;
  font-weight: 900;
  font-size: 1.1rem;
  line-height: 1.59rem;
  letter-spacing: 0.185rem;
  color: #ffffff;
  display: block;
  margin: 2.21rem auto 0 auto;
  text-align: center;
`;

const HeadButton = styled.div`
  width: 1.9rem;
  height: 0.63rem;
  background: #ffffff;
  border: 0.02rem solid #ffffff;
  border-radius: 0.12rem;
  margin: 1.9rem auto 0 auto;
  line-height: 0.63rem;

  font-style: normal;
  font-weight: 800;
  font-size: 0.2rem;
  color: #6079fe;
  text-align: center;
  cursor: pointer;
`;
