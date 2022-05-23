import React, { useState } from "react";
import styled from "styled-components";
import Logo from "./assets/logo.svg";
import NavIconLeft from "./assets/navIconLeft.svg";
import NavIconLine from "./assets/navIconLine.svg";
import NavIconRight from "./assets/navIconRight.svg";
import NavMobileIcon from "./assets/navMobile.svg";
import NavMobileIconBlue from "./assets/navMobileBlue.svg";
import NavIcon from "./assets/navIcon.svg";
import TwitterIcon2 from "./assets/twitterIcon2.svg"
import ElementIcon from "./assets/elementIcon.svg";
import TwitterIcon from "./assets/twitterIcon.svg";
import DiscordIcon from "./assets/discordIcon.svg"

const Nav: React.FC = () => {
  const [showNav, isshowNav] = useState(true);
  const toLocationGame = () => {
    const dom = document.getElementById("Game");
    if (dom) {
      isshowNav(!showNav);
      dom.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  const toLocationNFTs = () => {
    const dom = document.getElementById("NFTs");
    if (dom) {
      isshowNav(!showNav);
      dom.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  const goPage = (e:any) => {
    isshowNav(!showNav);
    window.open(e.target.getAttribute('value'))
}
  return (
    <div>
      <NavBlock>
        <LogoBlock>
          <LogoBlockImg src={Logo} />
          <LogoText>PUNCH</LogoText>
        </LogoBlock>
        <NavMobile src={NavMobileIcon} onClick={() => isshowNav(!showNav)} />
      </NavBlock>
      <NavShow hidden={showNav}>
        <NavBlock>
          <LogoBlock>
            <LogoBlockImg src={Logo} />
            <LogoTextShow>PUNCH</LogoTextShow>
          </LogoBlock>
          <NavMobile
            src={NavMobileIconBlue}
            onClick={() => isshowNav(!showNav)}
          />
        </NavBlock>

        <NavList>
          <NavItem>About</NavItem>
          <NavItem onClick={toLocationGame}>Games</NavItem>
          {/* <NavItem onClick={toLocationNFTs}>NFTs</NavItem> */}
          <NavItem>
            Staking
            <ShowSoon>Coming Soon</ShowSoon>
          </NavItem>
          <NavItem  onClick={goPage} value={'https://linktr.ee/punch2022'}>
            FAQ
          </NavItem>

          <NavItem>
            {/* <NavItemIcon src={NavIcon} /> */}
            <NavLinkBlock>
              <NavLinkIcon onClick={goPage} value={'https://t.co/sNr3UGVcpi'}  src={ElementIcon} />
              <NavLinkLine />
              <NavLinkIcon onClick={goPage} value={'https://twitter.com/Punch__Games'}  src={TwitterIcon} />
              <NavLinkLine />
              <NavLinkIcon onClick={goPage} value={'https://t.co/jXQ5tJC75s'}  src={DiscordIcon} />
            </NavLinkBlock>
          </NavItem>
        </NavList>
      </NavShow>
    </div>
  );
};

export default Nav;

const NavBlock = styled.div`
  width: 6.03rem;
  margin: 0 auto;
  display: flex;
  height: 0.47rem;
  align-items: center;
  justify-content: space-between;
  padding-top: 0.3rem;
`;
const LogoBlock = styled.div`
  display: flex;
  align-items: center;
`;
const LogoBlockImg = styled.img`
  width: 0.38rem;
  height: 0.42rem;
  margin-right: 0.1rem;
`;
const LogoText = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 0.24rem;
  color: #ffffff;
`;
const LogoTextShow = styled(LogoText)`
  color: #5687fc;
`;

const NavText = styled.div`
  position: relative;
  margin-left: 0.36rem;
  font-style: normal;
  font-weight: 700;
  font-size: 0.2rem;
  line-height: 0.29rem;
  color: #ffffff;
  cursor: pointer;
  padding: 0.1rem 0.21rem;

  border-radius: 0.08rem;
  :hover {
    background-color: #ffffff;
    color: #3d89ee;
    .show {
      display: block;
    }
  }
`;

const NavButton = styled.div`
  width: 1.35rem;
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
`;

const NavButtonLine = styled.img`
  width: 0.02rem;
  height: 0.14rem;
`;

const ShowSoon = styled.div`
  position: absolute;
  /* width: 1.18rem; */
  /* height: 0.24rem; */
  padding: 0.06rem;
  box-shadow: 0 0 0.07rem rgba(72, 133, 242, 0.18);
  border-radius: 0.06rem;
  left: calc(50vw + 0.3rem);
  top: -0.1rem;

  background: #ffffff;
  box-shadow: 0px 0px 0.07rem rgba(72, 133, 242, 0.18);
  border-radius: 0.06rem;

  font-weight: 500;
  font-size: 0.12rem;
  line-height: 0.22rem;
  letter-spacing: 0.005em;
  color: #3d89ee;
  text-align: center;
`;

const NavMobile = styled.img`
  width: 0.33rem;
`;

const NavShow = styled.div`
  position: absolute;
  width: 7.5rem;
  height: calc(100vh);
  background: rgba(255, 255, 255, 0.95);
  left: 0;
  top: 0;
  z-index: 99;
`;

const NavList = styled.div``;

const NavItem = styled.div`
  width: 7.5rem;
  height: 0.7rem;
  position: relative;

  font-weight: 900;
  font-size: 0.48rem;
  line-height: 0.7rem;
  text-align: center;

  color: #5687fc;
  margin-top: 1.21rem;
`;

const NavItemIcon = styled.img`
  width: 2.49rem;
  height: 0.53rem;
`;

const NavLinkBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 4.4rem;
  margin: 0 auto;
`

const NavLinkIcon = styled.img`
  height: 0.53rem;
`

const NavLinkLine = styled.div`
  width: 2px;
height: 0.31rem;
background: #5687FC;
`
