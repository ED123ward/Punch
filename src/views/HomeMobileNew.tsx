import PropTypes from "prop-types";
import React, { Component } from "react";
import styled from "styled-components";

import LogoImg from "./components/assets/homeNew/logoImg.png";
import HeadText from "./components/assets/homeNew/headText.png";
import HeadButton from "./components/assets/homeNew/button.png";
import Cloud1 from "./components/assets/homeNew/cloud1.png";
import Cloud2 from "./components/assets/homeNew/cloud2.png";
import BuildingBlocks from "./components/assets/homeNew/buildingBlocks.png";
import HeadBackground from "./components/assets/homeNew/headBackground.png";

export default class HomeMobileNew extends Component {
  state = {};

  goWeb = () => {
    const url = "https://forms.gle/jkNPfDQPxtYqzcFf8";
    window.open(url);
  };
  goPDF = () =>{
    const url = "./Punch Games TOS.pdf"
    window.open(url);
  }

  render() {
    return (
      <>
       
        <VideoBlock autoPlay loop muted src="./box_mobile.mp4" />
        <HeadBackgroundBlock src={HeadBackground} />
        <PageBlock>
          <LogoBlock src={LogoImg} />
          <TextBlock src={HeadText} />
        
          {/* <BuildBlock src={BuildingBlocks} /> */}
          <ButtonBlock
            onClick={() => {
              this.goWeb();
            }}
            src={HeadButton}
          />
           <TermsBlock
            onClick={() => {
              this.goPDF();
            }}
          >
            Terms & Conditions of Service
          </TermsBlock>
        </PageBlock>
      </>
    );
  }
}

const PageBlock = styled.div`
  position: relative;
`;
const LogoBlock = styled.img`
  position: relative;
  height: 0.6rem;
  margin: 1.85rem 0.35rem 0 0.98rem;
  z-index: 9;
`;

const TextBlock = styled.img`
  height: 1.4rem;
  display: block;
  margin: 0.19rem auto 0 auto;
  z-index: 99;

`;

const VideoBlock = styled.video`
display: block;
  margin: 0rem auto 0 auto;
  width: 100%;
  position: absolute;
  top: 2.5rem;
`;

const ButtonBlock = styled.img`
  width: 4.8rem;
  display: block;

  margin: 7.6rem auto 0 auto;
`;

const Cloud1Block = styled.img`
  width: 2rem;
  position: absolute;
  top: 0rem;
  right: 0rem;
`;

const Cloud2Block = styled.img`
  width: 3.2rem;
  position: absolute;
  top: 8.6rem;
  left: 0rem;
`;

const BuildBlock = styled.img`
  display: block;
  margin: 0 auto;
`;

const HeadBackgroundBlock = styled.img`
  position: absolute;
  width: 4.9rem;
  top: 0.55rem;
  left: 0.42rem;
`;

const TermsBlock = styled.div`
  width: calc(7.5rem);
  text-align: center;
  cursor: pointer;
  font-size: 0.12rem;
  padding-bottom: 0.3rem;
`;
