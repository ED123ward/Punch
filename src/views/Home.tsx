import React, { FC } from "react";
import { Button } from "antd";
import Head from "./components/Head";
import Download from "./components/DownloadNew";
import Nft from "./components/Nft";
import Game from "./components/Game";
import Join from "./components/Join";
import Footer from "./components/Footer";

import HomeMobile from "./HomeMobile";

const Home: FC = () => {
  const ua = navigator.userAgent;

  const ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
  const isIphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/);
  const isAndroid = ua.match(/(Android)\s+([\d.]+)/);
  const isMobile = isIphone || isAndroid;

  if (isMobile) {
    return <HomeMobile />;
  }

  return (
    <>
      <Head></Head>
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
