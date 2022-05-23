import React from "react";
import styled, { keyframes } from "styled-components";

import Game1 from "../components/assets/game1.svg";
import Game1Shadow from "../components/assets/game1shadow.svg";

import Game2 from "../components/assets/game2.svg";
import Game2Shadow from "../components/assets/game2shadow.svg";

import Game3 from "../components/assets/game3.svg";
import Game3Shadow from "../components/assets/game3shadow.svg";

import Game4 from "../components/assets/game4.svg";
import Game4Shadow from "../components/assets/game4shadow.svg";

import Game5 from "../components/assets/game5.svg";

const Game: React.FC = () => {
  return (
    <>
      <GameBlock>
        <GameTitle>Our Games</GameTitle>
        <GameShow>
          <Game1Block src={Game1} />

          <Game2Block src={Game2} />

          <Game3Block src={Game3} />

          <Game4Block src={Game4} />

          <Game5Block src={Game5} />
        </GameShow>
      </GameBlock>
    </>
  );
};

export default Game;

const animate = `
0% {
  transform: scale(1);
}
100% {
  transform: scale(1.05);
}
`;

const keyframe = keyframes`${animate}`;

const GameBlock = styled.div`
  width: 100%;
  height: 6.11rem;
  background-color: #ffffff;
  position: relative;
`;

const GameTitle = styled.div`
  font-style: normal;
  font-weight: 900;
  font-size: 0.36rem;
  line-height: 0.52rem;
  color: #5687fc;
  text-align: center;
  padding-top: 0.79rem;
`;

const GameShow = styled.div`
 
`;

const Game1Block = styled.img`
  width: 1.6936rem;
  height: 1.3862rem;
  position: absolute;
  left: 1.5rem;
  top: 2.2621rem;

  animation-name: ${keyframe};
  animation-duration: 1.2s;
  animation-timing-function: linear;
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-fill-mode: forwards;
  animation-direction: alternate;
`;
const Game1BlockShadow = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  position: absolute;
  left: 4.63rem;
  top: 2.2631rem;
`;

const Game2Block = styled.img`
  width: 2.2616rem;
  height: 1.5894rem;
  position: absolute;
  left: 4.023rem;
  top: 2.21rem;

  animation-name: ${keyframe};
  animation-duration: 1.2s;
  animation-timing-function: linear;
  animation-delay: 0.2s;
  animation-iteration-count: infinite;
  animation-fill-mode: forwards;
  animation-direction: alternate;
`;
const Game2BlockShadow = styled.img`
  width: 2.22rem;
  height: 2.22rem;
  position: absolute;
  left: 9.84rem;
  top: 1.8rem;
`;

const Game3Block = styled.img`
  width: 1.1464rem;
  height: 1.1464rem;
  position: absolute;
  left: 0.6279rem;
  top: 3.7994rem;

  animation-name: ${keyframe};
  animation-duration: 1.2s;
  animation-timing-function: linear;
  animation-delay: 0.4s;
  animation-iteration-count: infinite;
  animation-fill-mode: forwards;
  animation-direction: alternate;
`;

const Game4Block = styled.img`
  width: 1.9047rem;
  height: 1.3288rem;
  position: absolute;
  left: 3.0563rem;
  top: 3.9766rem;

  animation-name: ${keyframe};
  animation-duration: 1.2s;
  animation-timing-function: linear;
  animation-delay: 0.6s;
  animation-iteration-count: infinite;
  animation-fill-mode: forwards;
  animation-direction: alternate;
`;
const Game4BlockShadow = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  position: absolute;
  left: 8.02rem;
  top: 5.34rem;
`;

const Game5Block = styled.img`
   width: 1.1464rem;
  height: 1.1464rem;
  position: absolute;
  left: 5.6124rem;
  top: 3.6483rem;

  animation-name: ${keyframe};
  animation-duration: 1.2s;
  animation-timing-function: linear;
  animation-delay: 0.8s;
  animation-iteration-count: infinite;
  animation-fill-mode: forwards;
  animation-direction: alternate;
`;
