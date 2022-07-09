import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Toolbar, Button, Menu, MenuItem } from "@material-ui/core"
import { Menu as MenuIcon } from "@material-ui/icons";
import styled from "styled-components";

import { Spacer } from "./Common";
import SocialIcons from "./SocialIcons";

const StyledToolbar = styled(Toolbar)`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 1s ease all;
  background-color: #413e65;

  @media (max-width: 900px) {
    && {
      padding-left: 14px;
    }
  }
`;

export const StyledButton = styled(Button) <{ active?: boolean }>`
  && {
    margin: 0 20px;
    color: white;
    font-weight 600;
    font-family: 'Press Start 2P';

    ${props => props.active && `
      background-color: rgba(0, 0, 0, 0.25);

      &:hover {
        background-color: rgba(0, 0, 0, 0.25);
      }
    `}
  }
`;

const IconButton = styled.button`
  color: white;
  cursor: pointer;
  background: none;
  border: none;
  margin-right: 14px;
  padding: 0;
`;

const StyledMenu = styled(Menu)`
  width: 300px;
`;

const StyledMenuItem = styled(MenuItem)`
  && {
    font-family: 'Inconsolata';
    width: 300px;
  }
`;

const FloatedWrapper = styled.div<{ visible: boolean }>`
  position: absolute;
  display: flex;

  transition: 0.4s ease opacity;
  pointer-events: none;
  opacity: 0;

  ${props => props.visible && `
    pointer-events: auto;
    opacity: 1;
  `};
`;

const TitleWrapper = styled(FloatedWrapper) <{ visible: boolean }>`
  left: 20px;
`;

const TitleLink = styled.a`
  font-family: 'Press Start 2P';
  font-size: 1.2em;
  font-weight: 900;
  color: white;
  text-decoration: none;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 40px;
    height: 100%;
    margin-right: 12px;
  }
`;

const SocialIconsWrapper = styled(FloatedWrapper) <{ visible: boolean }>`
  right: 16px;
`;

const BREAKPOINT = 900;
const SECTIONS = ["Home", "About", "Roadmap", "FAQ", "Team"];

const getActiveSection = (visibleSections: { [key: string]: boolean }): string => {
  for (let i = 0; i < SECTIONS.length; ++i) {
    if (visibleSections[SECTIONS[i]] === true) {
      return SECTIONS[i];
    }
  }

  return SECTIONS[0];
};

const Title = (props: { onClick: (e: any) => void }) => (
  <TitleLink href="#" onClick={props.onClick}>
    <svg width="196" height="138" viewBox="0 0 196 138" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M190.155 0H41.1113C37.8887 0 35.2669 2.33439 35.2669 5.20369V12.3575H26.6356C23.4189 12.3575 20.802 14.6963 20.802 17.5707V24.715H5.96382C2.67547 24.7153 0 27.1016 0 30.0352V132.68C0 135.614 2.67547 138 5.96382 138H161.258C164.546 138 167.222 135.614 167.222 132.68V121.288H175.69C178.906 121.288 181.523 118.949 181.523 116.074V108.93H190.155C193.377 108.93 195.999 106.591 195.999 103.717V5.20369C195.999 2.33439 193.378 0 190.155 0ZM5.96382 29.8391H161.258C161.37 29.8391 161.479 29.9361 161.479 30.0352V77.3975H76.8601C75.4268 65.976 64.5382 57.0661 51.3553 57.0661C38.1667 57.0661 27.2734 65.9763 25.8394 77.3975H5.74217V30.0352C5.74217 29.9361 5.85204 29.8391 5.96382 29.8391ZM71.0762 77.3975H31.6229C33.0202 68.8084 41.3363 62.1898 51.3549 62.1898C61.3681 62.1898 69.6797 68.8084 71.0762 77.3975ZM161.479 132.68C161.479 132.785 161.376 132.876 161.258 132.876H5.96382C5.84591 132.876 5.74217 132.785 5.74217 132.68V123.194H34.0905C35.6761 123.194 36.9616 122.047 36.9616 120.632C36.9616 119.217 35.6761 118.07 34.0905 118.07H5.74217V82.5213H28.5455H74.154H161.48V93.6743H79.5141C75.1386 93.6743 72.4321 95.1414 70.9319 96.3718C68.9386 98.007 67.7959 100.296 67.7959 102.653C67.7959 106.864 71.4892 111.127 78.5487 111.127H82.6398C84.3762 111.127 88.4141 111.418 88.4141 114.111C88.4141 115.771 86.7091 118.07 83.5076 118.07H47.3507C45.7651 118.07 44.4796 119.217 44.4796 120.632C44.4796 122.047 45.7651 123.194 47.3507 123.194H83.5076C90.0851 123.194 94.1563 118.479 94.1563 114.111C94.1563 111.821 93.0695 109.757 91.0965 108.298C89.0369 106.775 86.1915 106.003 82.6398 106.003H78.5487C74.8503 106.003 73.538 104.198 73.538 102.652C73.538 100.734 75.3859 98.7978 79.5141 98.7978H161.479V132.68ZM190.257 103.717C190.257 103.755 190.207 103.806 190.155 103.806H181.524V17.5711C181.524 14.6963 178.907 12.3578 175.69 12.3578H102.411C100.825 12.3578 99.5397 13.5049 99.5397 14.9197C99.5397 16.3346 100.825 17.4816 102.411 17.4816H175.69C175.73 17.4816 175.781 17.524 175.781 17.5711V116.074C175.781 116.122 175.73 116.164 175.69 116.164H167.222V30.0352C167.222 27.1016 164.546 24.7153 161.258 24.7153H26.5441V17.5711C26.5441 17.5236 26.595 17.4816 26.6356 17.4816H89.1613C90.7469 17.4816 92.0324 16.3346 92.0324 14.9197C92.0324 13.5049 90.7469 12.3578 89.1613 12.3578H41.009V5.20369C41.009 5.17227 41.0531 5.12376 41.1113 5.12376H190.155C190.213 5.12376 190.257 5.17227 190.257 5.20369V103.717Z" fill="white" />
      <path d="M51.3442 49.058C52.9298 49.058 54.2153 47.9109 54.2153 46.4961V41.3477C54.2153 39.9329 52.9298 38.7859 51.3442 38.7859C49.7586 38.7859 48.4731 39.9329 48.4731 41.3477V46.4961C48.4731 47.9109 49.7586 49.058 51.3442 49.058Z" fill="white" />
      <path d="M28.5559 52.7013C29.1163 53.2014 29.851 53.4511 30.5856 53.4511C31.3206 53.4511 32.0556 53.2007 32.6164 52.7003C33.7373 51.6994 33.7369 50.0776 32.6152 49.0774L28.5352 45.4389C27.4136 44.4384 25.5956 44.4391 24.4751 45.4399C23.3543 46.4408 23.3546 48.0626 24.4763 49.0628L28.5559 52.7013Z" fill="white" />
      <path d="M72.1137 53.4511C72.8483 53.4511 73.5826 53.201 74.1434 52.7013L78.2234 49.0627C79.345 48.0626 79.3454 46.4404 78.2245 45.4399C77.1037 44.4394 75.2857 44.4387 74.1644 45.4389L70.0844 49.0774C68.9628 50.0776 68.9624 51.6998 70.0833 52.7003C70.6437 53.201 71.3787 53.4511 72.1137 53.4511Z" fill="white" />
    </svg>
    <span>MyNFT</span>
  </TitleLink>
);

const Navbar = () => {
  const pageWidth = useSelector((state: any) => state.pageWidth.value);
  const collapse = pageWidth < BREAKPOINT;

  const visibleSections = useSelector((state: any) => state.scrollPosition.visibleSections);
  // const activeSection = getActiveSection(visibleSections);
  const activeSection = null;

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleMenuClick = (evt: React.MouseEvent<HTMLButtonElement>) => setAnchorEl(evt.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const scrollToSection = (evt: any, section: string) => {
    evt.preventDefault();
    const href = `#${section.toLowerCase()}`;
    const elt = document.querySelector(href) as HTMLElement;

    if (elt) {
      elt.scrollIntoView({ behavior: "smooth" });
      window.history.replaceState({}, document.title, href);
    }
  };

  const scrollToTop = (evt: any) => {
    evt.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    window.history.replaceState({}, document.title, "#");
  }

  const buttons = ["About", "Roadmap", "FAQ", "Team"].map(sectionName => (
    <StyledButton
      key={sectionName}
      href={`#${sectionName.toLowerCase()}`}
      active={activeSection == sectionName}
      onClick={(e) => scrollToSection(e, sectionName)}
    >
      {sectionName}
    </StyledButton>
  ));

  const menuItems = ["About", "Roadmap", "FAQ", "Team"].map(sectionName => (
    <StyledMenuItem
      key={sectionName}
      onClick={(e) => {
        handleMenuClose();
        setTimeout(() => scrollToSection(e, sectionName), 50); // Need to wait for menu close
      }}>
      {sectionName}
    </StyledMenuItem>
  ));

  let items = <>
    <TitleWrapper visible={true}>
      <Title onClick={(e) => scrollToTop(e)} />
    </TitleWrapper>
    {buttons}
    <SocialIconsWrapper visible={true}>
      <SocialIcons size={36} />
    </SocialIconsWrapper>
  </>;

  if (collapse) {
    items = <>
      <IconButton onClick={handleMenuClick}>
        <MenuIcon />
      </IconButton>
      <Title onClick={(e) => scrollToTop(e)} />
      <Spacer />
      <SocialIcons size={36} />
    </>;
  }

  return (
    <>
      <StyledToolbar>{items}</StyledToolbar>
      <StyledMenu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        {menuItems}
      </StyledMenu>
    </>
  );
}

export default Navbar;
