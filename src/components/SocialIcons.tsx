import styled from "styled-components";

interface SocialIconProps {
  size: number;
  theme?: 'color' | 'white' | 'black';
}

const IconButton = styled.div<SocialIconProps>`
  cursor: pointer;
  display: inline-block;
  background-color: rgba(0, 0, 0, 0.25);
  border-radius: 100%;
  min-height: ${props => props.size}px;
  min-width: ${props => props.size}px};
  padding: 0;
  background-position: center;
  background-size: 60%;
  background-repeat: no-repeat;
`;

const Twitter = styled(IconButton) <SocialIconProps>`
  background-image: url('${props => {
    switch (props.theme) {
      case "color":
        return "twitter-blue.svg";
      case "black":
        return "twitter-black.svg";
      default:
        return "twitter-white.svg";
    }
  }}');

  margin-right: ${props => props.size / 4}px;
`;

const Discord = styled(IconButton) <SocialIconProps>`
  background-image: url('${props => {
    switch (props.theme) {
      case "color":
        return "Discord-Logo-Color.svg";
      case "black":
        return "Discord-Logo-Black";
      default:
        return "Discord-Logo-White.svg";
    }
  }}');
`;

const SocialIcons = (props: SocialIconProps) => {
  return <>
    <a href="https://twitter.com/mynftgg" target="blank">
      <Twitter size={props.size} />
    </a>
    <a href="https://discord.gg/7CqqqfNzEe" target="blank">
      <Discord size={props.size} />
    </a>
  </>
};

export default SocialIcons;
