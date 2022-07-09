import styled from "styled-components";
import Section from "./Section";
import { GridItem, SectionTitle, TextDiv, } from "./Section";
import { Grid } from "@material-ui/core";

const StyledGridItem = styled(GridItem)`
  padding: 0;
`;

export const ImageDescription = styled.h3`
  font-family: 'Press Start 2P';
  line-height: 150%;
`;

const ImgDiv : any = styled.div`
  width: 82vw;
  height: 82vw;
  max-width: 500px;
  max-height: 500px;
  background-image: url('awesome_map.png');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: rgb(11 2 35 / 4%) 0px 2px 2px, rgb(11 2 35 / 16%) 0px 12px 40px;
  margin: 20px 0 10px;
`;

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;

  @media (max-width: 400px) {
    flex-direction: column;
  }
`;

const BigImage = styled.img`
  width: 82vw;
  max-width: 600px;
  box-shadow: rgb(11 2 35 / 4%) 0px 2px 2px, rgb(11 2 35 / 16%) 0px 12px 40px;
`;

const ImageWithHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 30vw;
  max-width: 300px;
  align-items: center;
  justify-content: center;
  margin: 0 20px 20px;

  @media (max-width: 400px) {
    flex-direction: column;
    width: 80vw;
  }
`;

const SmallImage = styled.img`
  width: 100%;
  box-shadow: rgb(11 2 35 / 4%) 0px 2px 2px, rgb(11 2 35 / 16%) 0px 12px 40px;
`;

const ImageWithHeader = (props: any) => (
  <ImageWithHeaderWrapper>
    <ImageDescription>{props.header}</ImageDescription>
    <SmallImage src={props.src}/>
  </ImageWithHeaderWrapper>
);

const About = () => (
  <Section title="About">
    <GridItem item xs={12}>
      <TextDiv>
        <SectionTitle>About</SectionTitle>
        <p>
          MyNFT.gg is a social game where you can <strong>battle your Solana NFTs</strong> and train them in fun minigames. 
        </p>
        <ImageWrapper>
          <BigImage src="battle_screenshot_big.png"/>
        </ImageWrapper>
        <p>
          By minting, you get a unique trainer PFP image and matching in-game avatar. With a trainer NFT, you can begin
          battling other trainers using the NFTs in your wallet. Battling increases your rank, and <strong>the top ranked trainers win a % of profits from the project!</strong> (if you don't hold the NFT, you can only use the demo wallet & can't level up your NFTs). 
        </p>
        <ImageWrapper>
          <ImageWithHeader header="Trainer PFP" src="trainer.jpeg"/>
          <ImageWithHeader header="In-game Avatar" src="avatar_trainer_vertical.png"/>
        </ImageWrapper>
        <p>
        You can also <strong>train your NFTs in mini games</strong> (like Flappy NFT & NFT Jump) as well as through battling others. </p>
        <ImageWrapper>
          <ImageWithHeader header="Flappy NFT" src="flappy_game.png"/>
          <ImageWithHeader header="NFT Jump" src="jump_game.png"/>
        </ImageWrapper>
        <p>
          Each trainer is unique, with varying attributes that affect battles (such as a boost for Fire type NFTs). We assign initial stats to your NFTs (like Fire or Water type as well as custom moves) based on the attributes on-chain. Certain partner collections will have special moves (ex: Monkes will have a Banana Throw move)
        </p>
        <p>
          Each trainer also comes with a gallery to showcase your NFTs (example below). You can share this gallery with friends via your <strong>own custom link</strong> (ex: mynft.gg/zack)
        </p>
        <StyledGridItem item xs={12}>
          <ImgDiv/>
        </StyledGridItem>   
      </TextDiv>
    </GridItem>
  </Section>
);

export default About;
