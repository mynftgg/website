import { useSelector } from "react-redux";
import styled from "styled-components";
import { Grid } from "@material-ui/core"

import { InViewTracker } from "./Common";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 60px 0;
  position: relative;

  p {
   font-size: 1.2rem; 
  }
`;

const PositioningDiv = styled.div<{ headerHeight: number }>`
  position: absolute;
  top: -${props => props.headerHeight + 24}px;
`;

const StyledGrid = styled(Grid)`
  max-width: 1080px;
`;

export const GridItem = styled(Grid)`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`;

export const SectionTitle = styled.h2`
  font-family: 'Press Start 2P';
  font-weight: 900;
  margin-bottom: 24px;
`;

export const TextDiv = styled.div`
  width: 100%;
  font-family: 'Inconsolata';
  font-size: 1em;
  box-sizing: border-box;
`;

export const ImageDiv = styled.div`
  width: 100%;
  font-family: 'Inconsolata';
  font-size: 1em;
  box-sizing: border-box;
  text-align: center;
  align-items: center;
`;

export const ImgDiv = styled.div`
  width: 100%;
  height: 100%;
  min-height: 400px;
  background-image: url('https://rpgjs.dev/images/tiled.png');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 600px) {
    min-height: 300px;
  }
`;

const Section = (props: { title: string, children: any }) => {
  const headerHeight = useSelector((state: any) => state.scrollPosition.headerHeight);

  return (
    <Wrapper>
      <PositioningDiv id={props.title.toLowerCase()} headerHeight={headerHeight} />
      <InViewTracker sectionName={props.title}>
        <StyledGrid container>
          {props.children}
        </StyledGrid>
      </InViewTracker>
    </Wrapper>
  );
};

export default Section;
