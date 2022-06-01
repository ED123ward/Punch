import React from "react";
import styled from "styled-components";

import FooterImg from "../components/assets/foot.svg";

import DownAnd from "./assets/downAnd.svg";
import DownIos from "./assets/downIos.svg";

import LinkIcon1 from "./assets/linkIcon1.svg";
import LinkIcon2 from "./assets/linkIcon2.svg";
import LinkIcon3 from "./assets/linkIcon3.svg";
import LinkIcon4 from "./assets/linkIcon4.svg"

const Footer: React.FC = () => {
  const goPage = (e:any) => {
    window.open(e.target.getAttribute('value'))
}
  return (
    <>
      <FooterBlock>
        <FooterLine></FooterLine>
        <FooterContent>
          <DownBlock>
            <DownShow>
              <DownAppButton src={DownIos} />
              <ShowSoon className="show">Coming Soon</ShowSoon>
            </DownShow>
            <DownShow>
              <DownAppButton src={DownAnd} />
              <ShowSoon className="show">Coming Soon</ShowSoon>
            </DownShow>
          </DownBlock>
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
        </FooterContent>
      </FooterBlock>
    </>
  );
};

export default Footer;

const FooterBlock = styled.div`
  width: 100%;
  height: 2.29rem;
  background-color: #f3fbfe;
`;

const FooterLine = styled.div`
  width: 10.2rem;
  height: 0px;
  border: 1px solid #5687fc;
  margin: 0 auto;
`;

const FooterContent = styled.div`
  width: 10.2rem;
  margin: 0.66rem auto 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const DownAppButton = styled.img`
  width: 2.54rem;
  height: 1rem;
  cursor: pointer;
  position: relative;
  text-align: center;
  margin: 0 auto;
  display: block;
  position: relative;
  left: -0.5rem;
`;

const DownBlock = styled.div`
  width: 6.35rem;
  display: flex;
  justify-content: space-between;
`;

const LinkBlock = styled.div`
  width: 2.72rem;
`;

const LinkIconBlock = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LinkTextBlock = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.21rem;
`;

const LinkIcon = styled.img`
  width: 0.3rem;
  cursor: pointer;
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
