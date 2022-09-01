import React, { useState } from "react";
import styled from "styled-components";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper/core";
import "swiper/css";

import NftBackground from "../components/assets/nftsBackground.svg";
import NftCard1 from "../components/assets/nftCard1.svg";
import NftCard2 from "../components/assets/112.png";

import NftCard3 from "../components/assets/113.png";
import NftCard4 from "../components/assets/114.png";
import NftCard5 from "../components/assets/111.png";

import Prev from "../components/assets/prev.svg";
import Next from "../components/assets/next.svg";

const Nft: React.FC = () => {
  SwiperCore.use([Autoplay, Pagination, Navigation]);
  const goPage = (e: any) => {
    window.open(e.target.getAttribute("value"));
  };
  return (
    <>
      <NftVideo autoPlay loop muted src="./Punchnft.mp4" />
      <NftBlock>
        <NftTitle>PUNCH NFTs</NftTitle>
        <NftBody>
          <NftLeft>
            <NftVideoBlock>
            <NftVideo autoPlay loop muted src="./asd.mp4?t=1" />
            </NftVideoBlock>
          </NftLeft>
          <NftRight>
            <NftTextBlock>
              <NftText>
                <p>
                  Punch NFTs are an essential part of the platform’s tokenomics.
                  Players can use the NFTs to{" "}
                </p>
                <p>• Mint new NFTs</p>
                <p>• Level up in the game </p>
                <p>• Earn money by renting them out or trading</p>
              </NftText>
              <NftButton
                onClick={goPage}
                value={"https://xp7p8i7wuyi.typeform.com/to/XN2soJBm"}
              >
                SIGN UP
              </NftButton>
            </NftTextBlock>
          </NftRight>
        </NftBody>
      </NftBlock>
      <NftSwiper>
        <SwiperBlock>
          <Swiper
            slidesPerView={4}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{ prevEl: `.prev`, nextEl: `.next` }}
            loop
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <SwiperCard>
                <SwiperImg src={NftCard2} />
              </SwiperCard>
            </SwiperSlide>
            <SwiperSlide>
              <SwiperCard>
                <SwiperImg src={NftCard3} />
              </SwiperCard>
            </SwiperSlide>
            <SwiperSlide>
              <SwiperCard>
                <SwiperImg src={NftCard4} />
              </SwiperCard>
            </SwiperSlide>
            <SwiperSlide>
              <SwiperCard>
                <SwiperImg src={NftCard5} />
              </SwiperCard>
            </SwiperSlide>
          </Swiper>
        </SwiperBlock>
        <SwiperButtonBlock>
          <SwiperButton className="prev" src={Prev} />
          <SwiperButton className="next" src={Next} />
        </SwiperButtonBlock>
      </NftSwiper>
    </>
  );
};

export default Nft;

const NftBlock = styled.div`
  width: 100%;
  height: 9.3rem;
  background: url(${NftBackground});
  background-repeat: no-repeat;
  background-size: 14.4rem 9.3rem;
  background-position: 50% 50%;
  background: linear-gradient(180deg, #25d1f4 0%, #50fbfe 100%);
`;

const NftTitle = styled.div`
  font-style: normal;
  font-weight: 900;
  font-size: 0.48rem;
  line-height: 0.7rem;
  color: #ffffff;
  text-align: center;
  padding-top: 0.93rem;
`;

const NftBody = styled.div`
  display: flex;
  position: relative;
`;

const NftLeft = styled.div`
  width: 50%;
  height: 7.42rem;
  position: relative;
`;

const NftRight = styled.div`
  width: 50%;
  height: 7.42rem;
  position: relative;
  display: flex;
  align-items: center;
`;

const NftImg = styled.img`
  width: 4.2rem;
  height: 5.44rem;
  margin-top: 0.99rem;
  position: absolute;
  right: 0.83rem;
`;
const NftVideoBlock = styled.div`
  overflow: hidden;
  margin-top: 0.99rem;
  width: 4.2rem;
  height: 5.44rem;
  position: absolute;
  right: 0.83rem;
  border-radius: 0.4rem;
`;

const NftVideo = styled.video`
  /* width: 4.2rem; */
  height: 5.44rem;
  position: relative;
  left: -0.55rem;

`;

const NftTextBlock = styled.div`
  position: absolute;
  left: 0.83rem;
`;

const NftText = styled.div`
  width: 4.3rem;
  font-style: normal;
  font-weight: 500;
  font-size: 0.2rem;
  line-height: 0.51rem;
  letter-spacing: 0.03em;
  color: #ffffff;
`;

const NftButton = styled.div`
  width: 1.9rem;
  height: 0.63rem;
  background: #ffffff;
  border: 0.02rem solid #ffffff;
  border-radius: 0.12rem;
  margin-top: 0.41rem;
  line-height: 0.63rem;

  font-style: normal;
  font-weight: 800;
  font-size: 0.2rem;
  color: #29d4f5;
  text-align: center;
  cursor: pointer;
`;

const NftSwiper = styled.div`
  width: 14.4rem;
  height: 7.09rem;
  background-color: #f3fbfe;
`;

const SwiperBlock = styled.div`
  width: 14.2rem;
  height: 4.38rem;
  position: relative;
  display: flex;
  align-items: center;
  padding-top: 0.83rem;
`;

const SwiperItem = styled(SwiperSlide)`
  position: relative;
  height: 4.38rem;
  overflow: hidden;
`;

const SwiperCard = styled.div`
  width: 3.25rem;
  height: 4.38rem;
  border-radius: 0.4rem;
  text-align: center;
  display: flex;
  align-items: center;
  position: relative;
  margin: 0.5rem 0.2rem 0.5rem 0.2rem;
  transition: all 0.3s linear;
  border: 0px solid #25d1f4;
  :hover {
    border: 8px solid #25d1f4;
    transition: all 0.3s ease;
  }
`;

const SwiperImg = styled.img`
  width: 3rem;
  height: 3.88rem;
  margin: 0 auto;
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  transition-duration: 0.5s;
  transition-property: transform;
  :hover,
  :focus,
  :active {
    transform: scale(1.5);
  }
`;

const SwiperButtonBlock = styled.div`
  width: 14.4rem;
  text-align: center;
  margin-top: 1rem;
`;

const SwiperButton = styled.img`
  cursor: pointer;
  display: inline-block;
  width: 0.68rem;
  height: 0.68rem;
  margin: 0 0.3rem;
`;
