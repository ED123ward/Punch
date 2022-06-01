import React, { FC } from "react";
import { Button } from "antd";
import Head from "./components/HeadMobile";
import Download from "./components/DownloadMobile";
import Nft from "./components/NftMobile";
import Game from "./components/GameMobile";
import Join from "./components/JoinMobile";
import Footer from "./components/FooterMobile";


const Home: FC = () => {
  return (
    <>
      <Head></Head>
      <div ></div>
      <Download></Download>
      <div id="NFTs"></div>
      <Nft></Nft>
      <div id={"Game"}></div>
      <Game></Game>
      <Join></Join>
      <Footer></Footer>
    </>
  );
};

export default Home;
