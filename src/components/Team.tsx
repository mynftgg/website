import Section from "./Section";
import { GridItem, SectionTitle, TextDiv } from "./Section";
import styled from "styled-components";

const Pic = styled.div<{ backgroundImage?: string }>`
  min-height: 120px;
  min-width: 120px;
  background-color: #ededed;
  border-radius: 100%;
  margin-right: 16px;
  box-shadow: rgb(11 2 35 / 4%) 0px 2px 2px, rgb(11 2 35 / 16%) 0px 12px 40px;

  ${props => props.backgroundImage && `
    background-image: url('${props.backgroundImage}');
    background-size: cover;
    background-position: center;
  `}

  @media (max-width: 600px) {
    min-height: 80px;
    min-width: 80px;
    border-width: 4px;
  }
`;

const StyledGridItem = styled(GridItem)`
  margin: 16px 0;

  @media (max-width: 600px) {
    margin: 16px 0;
  }

  a {
    color: white;
    text-decoration: none;
  }

  h3 {
    margin-top: 0;
  }

  p {
    margin-bottom: 0;
  }
`;

const StyledSectionTitle = styled(SectionTitle)`
  margin-bottom: 16px;
`;

const StyledText = styled.p`
  margin-bottom: 16px !important;
`;

const About = () => (
  <Section title="Team">
    <StyledGridItem item xs={12}>
      <TextDiv>
        <StyledSectionTitle>Team</StyledSectionTitle>
        <StyledText>We're a <strong>fully doxxed team</strong> of experienced devs who have built products for millions of users at top companies like Microsoft and Nextdoor.</StyledText>
      </TextDiv>
    </StyledGridItem>
    <StyledGridItem xs={12} md={6}>
      <Pic backgroundImage="https://media.howrare.is/images/smb/e4f7d58ae99a8cc7078717b3d3131e5d.png" />
      <TextDiv>
        <h3>@wlrd</h3>
        <p>
          5+ years professional software engineering experience. Formerly @ Microsoft.
          Early Solana MBS supporter.
        </p>
      </TextDiv>
    </StyledGridItem>
    <StyledGridItem xs={12} md={6}>
      <Pic backgroundImage="https://7dmlq4uhdpqlmh2bud47xgysilo3l2pldox7dsqayc4d3urjtkza.arweave.net/-Ni4cocb4LYfQaD5-5sSQt216esbr_HKAMC4PdIpmrI/?ext=jpeg" />
      <TextDiv>
        <h3>@zackk101</h3>
        <p>Marketing, community and game dev guru. Formerly PM @ Nextdoor. Gecko enthusiast.</p>
      </TextDiv>
    </StyledGridItem>
    <StyledGridItem xs={12} md={6}>
      <Pic backgroundImage="https://oc5epdw3tllfkvpt4ubfvvjldxidtvhk22b6rckeqlva2zgclfnq.arweave.net/cLpHjtua1lVV8-UCWtUrHdA51OrWg-iJRILqDWTCWVs" />
      <TextDiv>
        <h3>@tong</h3>
        <p>
          5+ years web dev experience. Formerly software engineering @ Microsoft.
          Proud member of the Thugbirdz flock.
        </p>
      </TextDiv>
    </StyledGridItem>
  </Section>
);

export default About;
