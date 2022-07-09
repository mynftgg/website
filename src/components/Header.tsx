import { useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { Close } from "@material-ui/icons";

import { setPageWidth } from "../state/pageWidthSlice";
import Navbar from "./Navbar";
import { setHeaderHeight } from "../state/scrollPositionSlice";

const Wrapper = styled.div`
  position: sticky;
  top: 0;
  box-shadow: 5px 0 10px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

const BannerDiv = styled.div`
  background-color: #A5E6BA;
  color: black;
  text-align: center;
  font-family: 'Inconsolata';
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 36px;

  a {
    color: black;
    text-decoration: none;
    font-weight: 600;
  }
`;

const StyledLink = styled.a`
 color: black;
 font-weight: 600;
 text-decoration: underline !important;
`

const CloseIcon = styled(Close)`
  position: absolute;
  right: 12px;
  max-height: 16px;
  max-width: 16px;
  color: #111;
  cursor: pointer;
`;

const Banner = (props: { onClose: () => any }) => (
  <BannerDiv>
    <p>
      We're officially <b>sold out</b>! Find us on MagicEden <a href="https://magiceden.io/marketplace/mynftgg" target="blank">here.</a>
    </p>
    <CloseIcon onClick={props.onClose} />
  </BannerDiv>
);

const Header = () => {
  const dispatch = useDispatch();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [bannerOpen, setBannerOpen] = useState(true);

  const onResize = () => {
    dispatch(setPageWidth(window.innerWidth));

    if (wrapperRef && wrapperRef.current) {
      dispatch(setHeaderHeight(wrapperRef.current.scrollHeight));
    }
  }

  useEffect(() => {
    window.addEventListener("resize", onResize);
    onResize();
    return () => window.removeEventListener("resize", onResize);
  }, [bannerOpen]);

  return (
    <Wrapper ref={wrapperRef}>
      <Navbar />
      {bannerOpen && <Banner onClose={() => { setBannerOpen(false) }} />}
    </Wrapper>
  );
}

export default Header;
