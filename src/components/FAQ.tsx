import styled from "styled-components";
import { Accordion, AccordionDetails, AccordionSummary } from '@material-ui/core';
import { ExpandMore as ExpandMoreIcon } from '@material-ui/icons';

import Section from "./Section";
import { GridItem, SectionTitle, TextDiv } from "./Section";

const StyledTextDiv = styled(TextDiv)`
  width: calc(100vw - 60px);
  max-width: 1020px;
`;

const AccordionWrapper = styled.div`
  margin: 30px 0 10px;
`;

const StyledAccordion = styled(Accordion)`
  max-width: 1200px;
  width: 100%;

  && {
    background-color: white;
  }
`;

const StyledAccordionSummary = styled(AccordionSummary)`
  font-weight: 600;
`;

const FAQ = () => (
  <Section title="FAQ">
    <GridItem item>
      <StyledTextDiv>
        <SectionTitle>FAQ</SectionTitle>
        <AccordionWrapper>
          <StyledAccordion>
            <StyledAccordionSummary expandIcon={<ExpandMoreIcon />}>
              How many trainers were minted?
            </StyledAccordionSummary>
            <AccordionDetails>
              Only 1010 trainers were available in our initial release!
            </AccordionDetails>
          </StyledAccordion>
          <StyledAccordion>
            <StyledAccordionSummary expandIcon={<ExpandMoreIcon />}>
              What was the mint cost?
            </StyledAccordionSummary>
            <AccordionDetails>
              1 SOL.
            </AccordionDetails>
          </StyledAccordion>
          <StyledAccordion>
            <StyledAccordionSummary expandIcon={<ExpandMoreIcon />}>
              When was the mint?
            </StyledAccordionSummary>
            <AccordionDetails>
              Monday, April 18th, 2022.
            </AccordionDetails>
          </StyledAccordion>
        </AccordionWrapper>
      </StyledTextDiv>
    </GridItem>
  </Section>
);

export default FAQ;
