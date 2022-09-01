import React from "react";
import styled from "styled-components";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper/core";
import "swiper/css";

import NftBackground from "../components/assets/nftsBackground.svg";
import NftCard1 from "../components/assets/nftCard1.svg";
import NftCard2 from "../components/assets/112.png";

import NftCard3 from "../components/assets/113.png";
import NftCard4 from "../components/assets/114.png";
import NftCard5 from "../components/assets/111.png";

const Nft: React.FC = () => {
  SwiperCore.use([Autoplay, Pagination, Navigation]);
  const goPage = (e: any) => {
    window.open(e.target.getAttribute("value"));
  };
  return (
    <>
      <NftBlock>
        <NftTitle>PUNCH NFTs</NftTitle>
        <NftVideo autoPlay loop muted src="./1234.mp4?t=1" />
        {/* <NftImg src={NftCard1} /> */}
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
      </NftBlock>
      <NftSwiper>
        <SwiperBlock>
          <Swiper
            slidesPerView={2}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
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
      </NftSwiper>
    </>
  );
};

export default Nft;

const NftBlock = styled.div`
  width: 7.5rem;
  height: 12.44rem;
  background: linear-gradient(180deg, #25d1f4 0%, #50fbfe 100%);
`;

const NftTitle = styled.div`
  font-style: normal;
  font-weight: 900;
  font-size: 0.36rem;

  color: #ffffff;
  text-align: center;
  padding-top: 0.75rem;
`;

const NftText = styled.div`
  width: 5.4rem;
  margin: 0.43rem auto 0 auto;
  font-family: "M PLUS 2";
  text-align: centerx;
  font-style: normal;
  font-weight: 500;
  font-size: 0.2rem;
  line-height: 0.47rem;
  text-align: center;
  color: #ffffff;
`;

const NftImg = styled.img`
  width: 5.08rem;
  height: 5.45rem;
  display: block;
  margin: 0.83rem auto 0 auto;
`;
const NftVideo = styled.video`
  width: 5.08rem;
  height: 5.45rem;
  display: block;
  margin: 0.83rem auto 0 auto;
`

const NftButton = styled.div`
  width: 1.9rem;
  height: 0.63rem;
  margin: 0.3rem auto 0 auto;
  background: #ffffff;
  border: 1px solid #ffffff;
  border-radius: 0.12rem;

  font-size: 0.2rem;
  line-height: 0.61rem;
  color: #29d4f5;
  text-align: center;
  font-weight: 800;
`;

const NftSwiper = styled.div`
  width: 100%;
  height: 6.6rem;
  background-color: #f1faff;
  display: flex;
  align-items: center;
  margin: 0 auto;
  text-align: center;
  overflow: hidden;
`;
const SwiperBlock = styled.div`
  width: 7.2rem;
  height: 6.6rem;
  background-color: #f1faff;
  display: flex;
  align-items: center;
  margin: 0 0 0 0.3rem;
  text-align: center;
`;

const SwiperItem = styled(SwiperSlide)`
  position: relative;
  text-align: center;
`;

const SwiperCard = styled.div`
  width: 3.25rem;
  height: 4.38rem;
  background: #f3fbfe;
  border: 1px solid #dedede;
  border-radius: 0.4rem;
  text-align: center;
  display: flex;
  align-items: center;
  position: relative;
  margin: 4rem 0;
`;

const SwiperImg = styled.img`
  width: 3.01rem;
  height: 3.88rem;
  margin: 0 auto;
`;
