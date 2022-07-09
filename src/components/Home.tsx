import styled from "styled-components";
import { InViewTracker } from "./Common";

import Game from "./Game";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 80px 0 120px;
  padding: 0 20px;

  h1 {
    font-family: 'Press Start 2P';
    font-size: 2.75em;
    text-align: center;
    margin-top: 0;
    margin-bottom: 32px;
    line-height: 133%;
  }

  p {
    font-family: 'Inconsolata';
    font-size: 1.2em;
    font-weight: 600;
    text-align: center;
    margin: 10px 0;
  }

  @media (max-width: 600px) {
    margin: 60px 0 100px;

    h1 {
      font-size: 1.75em;
    }

    p {
      font-size: 1.2em;
    }
  }
`;

const GameWrapper = styled.div`
  border-radius: 16px;
  overflow: hidden;
  margin-top: 60px;
  width: 90vw;
  height: 60vw;
  max-width: 1000px;
  max-height: 667px;
  box-shadow: rgb(11 2 35 / 4%) 0px 2px 2px, rgb(11 2 35 / 16%) 0px 12px 40px;
`;

const Home = () => (
  <InViewTracker sectionName="Home">
    <Wrapper>
      <h1>Pokemon for your NFTs.</h1>
      <p>Train, battle and trade your Solana NFTs with friends.</p>
      <p> Full demo below: play on your phone or computer!</p>
      <GameWrapper>
        <Game />
      </GameWrapper>
    </Wrapper>
  </InViewTracker>
)

export default Home