import React, { FC } from "react";
import styled from "styled-components";
import Logo from "./assets/logo.svg";
import ElementIcon from "./assets/elementIcon.svg";
import TwitterIcon from "./assets/twitterIcon.svg";
import DiscordIcon from "./assets/discordIcon.svg"
import NavIconLine from "./assets/navIconLine.svg";


const Nav: React.FC = () => {
  const toLocationGame = () => {
    const dom = document.getElementById("Game");
    if (dom) {
      dom.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  const toLocationNFTs = () => {
    const dom = document.getElementById("NFTs");
    if (dom) {
      dom.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  const goPage = (e:any) => {
    window.open(e.target.getAttribute('value'))
}
  return (
    <NavBlock>
      <LogoBlock>
        <LogoBlockImg src={Logo} />
        <LogoText>PUNCH</LogoText>
        <NavText>About</NavText>
        <NavText onClick={toLocationGame}>Game</NavText>
        {/* <NavText onClick={toLocationNFTs}>NFTs</NavText> */}
        <NavText >
          Staking
          <ShowSoon className ="show" >Coming Soon</ShowSoon>
        </NavText>
        <NavText onClick={goPage} value={'https://linktr.ee/punch2022'}>
          FAQ
          {/* <ShowSoon className ="show" >Coming Soon</ShowSoon> */}
        </NavText>
        <NavButton>
          <NavButtonIcon onClick={goPage} value={'https://t.co/sNr3UGVcpi'} src={ElementIcon} />
          <NavButtonLine src={NavIconLine} />
          <NavButtonIcon onClick={goPage} value={'https://twitter.com/Punch__Games'} src={TwitterIcon} />
          <NavButtonLine src={NavIconLine} />
          <NavButtonIcon onClick={goPage} value={'https://t.co/jXQ5tJC75s'} src={DiscordIcon} />
        </NavButton>
      </LogoBlock>
    </NavBlock>
  );
};

export default Nav;

const NavBlock = styled.div`
  width: 10.32rem;
  margin: 0 auto;
  display: flex;
  height: 0.45rem;
  align-items: center;
`;
const LogoBlock = styled.div`
  display: flex;
  align-items: center;
`;
const LogoBlockImg = styled.img`
  width: 0.33rem;
  height: 0.37rem;
  margin-right: 0.1rem;
`;
const LogoText = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 0.24rem;
  color: #ffffff;
`;

const NavText = styled.div`
  position: relative;
  margin-left: 0.36rem;
  font-style: normal;
  font-weight: 700;
  font-size: 0.2rem;
  line-height: 0.32rem;
  color: #ffffff;
  cursor: pointer;
  width: 0.99rem;
  height: 0.32rem;
  text-align: center;

  border-radius: 0.08rem;
  :hover {
    background-color: #ffffff;
    color: #3d89ee;
    .show{
      display: block;
    }
  }
`;

const NavButton = styled.div`
  width: 1.88rem;
  height: 0.45rem;
  background: #ffffff;
  border: 0.02rem solid #ffffff;
  border-radius: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-left: 0.8rem;
`;

const NavButtonIcon = styled.img`
  margin: 0 0.2rem;
  width: 0.23rem;
  height: 0.2rem;
  cursor: pointer;
`;

const NavButtonLine = styled.img`
  width: 0.02rem;
  height: 0.14rem;
`;

const ShowSoon = styled.div`
  position: absolute;
  width: 1.12rem;
  height: 0.22rem;
  left: 0.6rem;
  top: -0.15rem;

  background: #ffffff;
  box-shadow: 0 0 0.02rem #4885f2;
  border-radius: 0.07rem;

  font-weight: 500;
  font-size: 0.12rem;
  line-height: 0.22rem;
  letter-spacing: 0.005em;
  color: #6C6C6C;
  text-align: center;
  display: none;
`;
