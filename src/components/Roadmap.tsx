import styled from "styled-components";
import { LooksOne, LooksTwo, Looks3 } from "@material-ui/icons";

import { GridItem, SectionTitle, TextDiv } from "./Section";
import Section from "./Section";

const Wrapper = styled.div`
  display: flex;
  margin: 30px 0;
  align-items: center;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

const Text = styled.div`
  display: flex;
  margin: 10px 0;

  svg {
    color: white;
  }

  p {
    flex-grow: 1;
    margin: 0;
    margin-left: 12px;
    font-size: 1.2rem;
  }
`;

const ImageDescription = styled.h3`
  font-family: 'Press Start 2P';
  font-weight: 900;
  margin-bottom: 24px;
  margin-left: 10px;
  margin-top: 0px;
  line-height: 1.5rem;
`;

const Image = styled.img`
  width: 60vw;
  max-width: 600px;
  margin-left: 30px;
  box-shadow: rgb(11 2 35 / 4%) 0px 2px 2px, rgb(11 2 35 / 16%) 0px 12px 40px;

  @media (max-width: 700px) {
    width: 82vw;
    margin: 20px 0;
  }
`;

const Roadmap = () => (
  <Section title="Roadmap">
    <GridItem item xs={12} sm={12} md={12}>
      <TextDiv>
        <SectionTitle>Roadmap</SectionTitle>
        <Wrapper>
          <Text>
            <LooksOne />
            <p>
              <ImageDescription>NFT Battling</ImageDescription>
              Our initial release will be the V1 game that allows you to battle other trainers and level up your NFTs through 
              mini-games and battles. We will also have a leaderboard for the top performing trainers and Collections.
            </p>
          </Text>
          <Image src="battle_screenshot_big.png" />
        </Wrapper>
        <Wrapper>
          <Text>
            <LooksTwo />
            <p>
            <ImageDescription>NFT Marketplace & Escrow</ImageDescription>
              Our next release will be focused on the marketplace: facilitating connections and providing
              a trusted space for peer-to-peer NFT exchanges by serving as an safe escrow account. We will also continue to add more fun mini-games 
              and ways to train your NFTs. 
            </p>
          </Text>
          <Image src="escrow_image.png" />
        </Wrapper>
        <Wrapper>
          <Text>
            <Looks3 />
            <p>
            <ImageDescription>Game Platform</ImageDescription>
              Finally, we will open up our game platform, allowing developers to build experiences on top
              of it. Imagine creating a Super Smash Bros game where you fight with your NFTs or Mario Kart to race your NFTs, etc.
            </p>
          </Text>
          <Image src="smash_image.png" />
        </Wrapper>
      </TextDiv>
    </GridItem>
  </Section>
);

export default Roadmap;
