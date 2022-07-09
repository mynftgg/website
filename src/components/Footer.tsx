import styled from "styled-components";

const StyledDiv = styled.div`
  background-color: #211f33;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 10px;
  font-family: 'Inconsolata';
  font-size: 0.75em;
  color: #cdcdcd;
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: #cdcdcd;
  font-weight: 600;
`;

const Footer = () => (
  <StyledDiv>
    <p>
      Tilesets by <StyledLink href="https://limezu.itch.io/" target="blank">@LimeZu</StyledLink>. |
      Icons by <StyledLink href="https://www.freepik.com" title="Freepik">
        Freepik
      </StyledLink> from <StyledLink href="https://www.flaticon.com/" title="Flaticon">
        www.flaticon.com
      </StyledLink>.
    </p>
  </StyledDiv>
);

export default Footer;
