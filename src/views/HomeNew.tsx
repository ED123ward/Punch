import PropTypes from "prop-types";
import React, { Component } from "react";
import styled from "styled-components";

import LogoImg from "./components/assets/homeNew/logoImg.png";
import HeadText from "./components/assets/homeNew/headText.png";
import HeadButton from "./components/assets/homeNew/button.png";
import HeadBackground from "./components/assets/homeNew/headBackground.png";

import HomeMobileNew from "./HomeMobileNew";

export default class HomeNew extends Component {
  state = {};

  goWeb = () => {
    const url = "https://forms.gle/jkNPfDQPxtYqzcFf8";
    window.open(url);
  };

  render() {
    const ua = navigator.userAgent;

    const ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
    const isIphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/);
    const isAndroid = ua.match(/(Android)\s+([\d.]+)/);
    const isMobile = isIphone || isAndroid;

    if (isMobile) {
      return <HomeMobileNew />;
    }
    return (
      <>
        <PageBox>
          <VideoBox autoPlay loop muted src="./box.mp4" />
        </PageBox>
        <HeadBackgroundBlock src={HeadBackground} />
        <HeadBlock>
          <NavBlock>
            <LogoBlock src={LogoImg} />
          </NavBlock>
          <BodyBlock>
            <BodyLeft>
              <LeftText src={HeadText} />
              <LeftBUtton
                onClick={() => {
                  this.goWeb();
                }}
                src={HeadButton}
              />
            </BodyLeft>
            <BodyRight></BodyRight>
          </BodyBlock>
        </HeadBlock>
      </>
    );
  }
}
const PageBox = styled.div`
  width: 100%;
  overflow: hidden;
  height: 8.14rem;
  position: absolute;
  top: 0;
  background: linear-gradient(
    180deg,
    #d2d4f2 0%,
    rgba(210, 212, 242, 0) 60.93%
  );
`;
const VideoBox = styled.video`
  height: 100%;
`;

const HeadBlock = styled.div`
  position: relative;
  width: 100%;
  height: 8.14rem;
  padding: 0.84rem 1.5rem 0 1.5rem;
`;

const NavBlock = styled.div`
  margin-top: 0.29rem;
  margin-left: 0.42rem;
`;
const LogoBlock = styled.img`
  height: 0.57rem;
`;

const BodyBlock = styled.div`
  display: flex;
  justify-content: center;
`;
const BodyLeft = styled.div`
  width: 50%;
`;

const BodyRight = styled.div`
  width: 50%;
`;

const LeftText = styled.img`
  width: 5.6rem;
  position: relative;
  left: 0.42rem;
  margin-top: 0.84rem;
`;
const LeftBUtton = styled.img`
  width: 2.34rem;
  position: relative;
  left: 0.22rem;
  margin-top: 1.1rem;
  cursor: pointer;
`;

const VideoBlock = styled.video`
  height: 6.24rem;
`;

const HeadBackgroundBlock = styled.img`
  position: absolute;
  width: 6.24rem;
  top: 0.55rem;
  left: 0.45rem;
`;
