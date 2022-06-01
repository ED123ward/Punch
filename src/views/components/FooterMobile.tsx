import React from "react";
import styled from "styled-components";

import FooterImg from "../components/assets/foot.svg";

import DownAnd from "./assets/downAnd.svg";
import DownIos from "./assets/downIos.svg";

import LinkIcon1 from "./assets/linkIcon1.svg";
import LinkIcon2 from "./assets/linkIcon2.svg";
import LinkIcon3 from "./assets/linkIcon3.svg";
import LinkIcon4 from "./assets/linkIcon4.svg";

const Footer: React.FC = () => {
 const goPage = (e:any) => {
      window.open(e.target.getAttribute('value'))
  }
  return (
    <>
      <FooterBlock>
        <FooterLine></FooterLine>
        <FooterContent>
          <LinkBlock>
            <LinkIconBlock>
            <LinkIcon onClick={goPage} value={'https://t.co/sNr3UGVcpi '} src={LinkIcon1} />
              <LinkIcon onClick={goPage} value={'https://twitter.com/Punch__Games'} src={LinkIcon2} />
              <LinkIcon onClick={goPage} value={'https://t.co/jXQ5tJC75s'} src={LinkIcon3} />
              <LinkIcon onClick={goPage} value={'https://medium.com/@Punch__Games'} src={LinkIcon4} />
            </LinkIconBlock>
            {/* <LinkTextBlock>
              <LinkText>Privacy Policy</LinkText>
              <LinkText>Privacy Policy</LinkText>
            </LinkTextBlock> */}
          </LinkBlock>

          <DownBlock>
            <DownShow>
              <DownAppButton src={DownIos} />
              {/* <ShowSoon className="show">Coming Soon</ShowSoon> */}
            </DownShow>
            <DownShow>
              <DownAppButton src={DownAnd} />
              {/* <ShowSoon className="show">Coming Soon</ShowSoon> */}
            </DownShow>
          </DownBlock>

          <FooterC>© 2022 Punch Games. All rights reserved.</FooterC>
        </FooterContent>
      </FooterBlock>
    </>
  );
};

export default Footer;

const FooterBlock = styled.div`
  width: 7.5rem;
  height: 3.79rem;
  background-color: #f3fbfe;
`;

const FooterLine = styled.div`
  width: 6.03rem;
  height: 1px;
  background-color: #5687fc;
  margin: 0 auto;
`;

const FooterContent = styled.div`
  width: 6.03rem;
  margin: 0.66rem auto 0 auto;
`;

const DownAppButton = styled.img`
  width: 2.54rem;
  height: 1rem;
  cursor: pointer;
  position: relative;
  text-align: center;
  display: block;
`;

const DownBlock = styled.div`
  width: 6.35rem;
  display: flex;
  justify-content: space-between;
`;

const LinkBlock = styled.div`
  width: 4.72rem;
  margin: 0 auto;
`;

const LinkIconBlock = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LinkTextBlock = styled.div`
width: 4rem;
  display: flex;
  justify-content: space-between;
  margin: 0.31rem auto  0.45rem auto;
`;

const LinkIcon = styled.img`
  width: 0.3rem;
`;

const LinkText = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 0.14rem;
  line-height: 0.2rem;

  color: #a6afbe;
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

const FooterC = styled.div`
    font-style: normal;
font-weight: 500;
font-size: 0.18rem;
line-height: 0.26rem;
color: #A6AFBE;
text-align: center;
margin-top: 0.34rem;
`
