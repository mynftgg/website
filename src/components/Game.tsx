import { useRef, useState } from "react";
import { FullscreenOutlined, FullscreenExitOutlined, PlayArrow } from "@material-ui/icons";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle<{ fullscreen: boolean }>`
  ${props => props.fullscreen && `
    html {
      height: 100%;
      overflow-y: scroll;
      -webkit-overflow-scrolling: touch;
    }

    body {
      overflow: hidden;
      height: 100%;
    }
  `}
`;

const Wrapper = styled.div<{ status: GameStatus, fullscreen: boolean }>`
  width: 100%;
  height: 100%;
  position: relative;
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;

  ${props => props.status == GameStatus.NOT_STARTED && `
    background-image: url('game-preview.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  `}

  ${props => props.fullscreen && `
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
    margin: 0;
    z-index: 999;
    border-radius: 0;
    max-height: none;
    max-width: none;
  `}
`;

const PlayButtonWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 156px;
  border-radius: 8px;
  padding: 6px 4px;
  background-color: rgba(0, 0, 0, 0.25);
  transition: 0.2s ease background-color;
	cursor: pointer;
	
	&:hover, &:focus {
		background-color: rgba(0, 0, 0, 0.4);
	}

  span {
    font-family: 'Press Start 2P';
    padding-top: 2px;
    padding-left: 10px;
    font-size: 12px;
    text-transform: uppercase;
  }

  svg {
    height: 32px;
    width: 32px;
  }

  margin-bottom: 40px;


  @media (max-width: 768px) {
    top: 40%;
  }
`;

const VideoButtonWrapper = styled.div`
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 156px;
  border-radius: 8px;
  padding: 6px 4px;
  background-color: rgba(0, 0, 0, 0.25);
  transition: 0.2s ease background-color;
	cursor: pointer;
	
	&:hover, &:focus {
		background-color: rgba(0, 0, 0, 0.4);
	}

  span {
    font-family: 'Press Start 2P';
    padding-top: 2px;
    padding-left: 10px;
    font-size: 12px;
    text-transform: uppercase;
  }

  svg {
    height: 32px;
    width: 32px;
  }

  margin-bottom: 40px;


  @media (max-width: 768px) {
    top: 75%;
  }
`;

const FullScreenButtonWrapper = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  cursor: pointer;

  svg {
    font-size: 2em;
    color: white;
  }
`

const StyledForm = styled.form`
  text-align: center;

  label {
    font-family: 'Press Start 2P';
    font-size: 1em;
    display: block;
    padding: 16px 24px 0;
    max-width: 800px;

    @media (max-width: 600px) {
      font-size: 0.8em;
    }
  }

  button {
    background: none;
    outline: none;
    border: 2px solid white;
    border-radius: 6px;
    font-weight: 900;
    color: white;
    font-family: 'Inconsolata';
    font-size: 1em;
    padding: 6px 12px;
    margin: 0 5px 10px;
    cursor: pointer;
  }
`;

const StyledInput = styled.input<{ hidden: boolean }>`
  outline: none;
  background-color: unset;
  border: none;
  border-bottom: 2px solid white;
  border-radius: 0;
  font-family: 'Inconsolata';
  color: white;
  font-size: 1em;
  width: 80%;
  max-width: 352px;
  margin: 20px 0;

  ${props => props.hidden && `
    display: hidden;
    margin: 0;
  `}
`;

const StyledFrame = styled.iframe<{ fullscreen: boolean }>`
  width: 100%;
  height: 100%;
  border: none;

  ${props => !props.fullscreen && `
    border-radius: 16px;
    overflow: hidden;
  `}
`;

const PlayButton = (props: { onClick: () => void }) => (
  <a href="https://my-nft-game.herokuapp.com" style={{color: 'white'}}>
    <PlayButtonWrapper onClick={props.onClick}>
      <span>Play Game</span>
      <PlayArrow />
    </PlayButtonWrapper>
  </a>
);
const VideoButton = (props: { onClick: () => void }) => (
  <a href = {"https://www.youtube.com/watch?v=WjyXfBh5meE"} target = "_blank" style={{color: 'white'}}>
  <VideoButtonWrapper onClick={props.onClick}>
    <span>Play Video</span>
    <PlayArrow />
  </VideoButtonWrapper>
  </a>
);
enum GameStatus {
  NOT_STARTED,
  PENDING_ADDRESS,
  STARTED
}

const Game = () => {
  const [status, setStatus] = useState(GameStatus.NOT_STARTED);
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [fullscreen, setFullscreen] = useState(false);
  const gameRef = useRef<HTMLIFrameElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const setFocus = () => {
    if (gameRef.current && gameRef.current.contentWindow) {
      gameRef.current.contentWindow.focus();
    }
  };

  const toggleFullscreen = () => {
    setFullscreen(!fullscreen);
    setFocus();
  };

  const handleCustomWalletButton = (e: any) => {
    if (walletAddress !== null && inputRef.current && inputRef.current.value) {
      return;
    }

    e.preventDefault();
    setWalletAddress("");
  }

  const handleFormSubmit = (e: any) => {
    e.preventDefault();

    if (inputRef.current) {
      const address = inputRef.current.value || process.env.REACT_APP_GAME_DEFAULT_WALLET;

      if (address) {
        setWalletAddress(address);
        setStatus(GameStatus.STARTED);
      }
    }
  };

  let gameUrl: string;
  let isRpgMode: boolean;

  gameUrl = process.env.REACT_APP_MMORPG_HOST!;

  // if (walletAddress === process.env.REACT_APP_GAME_DEFAULT_WALLET) {
  //   gameUrl = "https://my-nft-game.herokuapp.com/"
  //   //gameUrl = process.env.REACT_APP_MMORPG_HOST!;
  //   isRpgMode = false;
  // } else {
  //   gameUrl = process.env.REACT_APP_RPG_HOST!;
  //   isRpgMode = true;
  // }

  // Update to trigger refreshes of cached JS
  const ts = 1650335173;
  gameUrl += `?ts=${ts}`

  const onGameLoad = () => {
    if (isRpgMode && gameRef.current && gameRef.current.contentWindow) {
      gameRef.current.contentWindow.postMessage({ walletAddress: walletAddress }, "*");
    }

    setFocus();
  };

  // setting this to always be true
  // setStatus(GameStatus.STARTED);

  return (
    <>
      <GlobalStyles fullscreen={fullscreen} />
      <Wrapper status={status} fullscreen={fullscreen}>
        {status == GameStatus.NOT_STARTED && <PlayButton onClick={() => console.log("Game clicked")} />}
        {status == GameStatus.NOT_STARTED && <VideoButton onClick={() => console.log("Video clicked")} />}
        {status != GameStatus.NOT_STARTED &&
          <FullScreenButtonWrapper onClick={toggleFullscreen}>
            {fullscreen ? <FullscreenExitOutlined /> : <FullscreenOutlined />}
          </FullScreenButtonWrapper>
        }
        {status == GameStatus.PENDING_ADDRESS && <StyledForm onSubmit={handleFormSubmit}>
          <label htmlFor="wallet-address">
            Welcome to our demo game. Pick a wallet to view the NFTs for!
          </label>
          <StyledInput hidden={walletAddress === null}
            id="wallet-address"
            ref={inputRef}
            type="text"
            placeholder={process.env.REACT_APP_GAME_DEFAULT_WALLET}
          />
          <br />
          <button onClick={handleFormSubmit}>Use demo wallet</button>
          <button onClick={handleCustomWalletButton}>Use custom wallet address</button>
        </StyledForm>}
        {status == GameStatus.STARTED &&
          <StyledFrame
            src={gameUrl}
            ref={gameRef}
            onLoad={onGameLoad}
            onMouseEnter={setFocus}
            fullscreen={fullscreen}
          />
        }
      </Wrapper>
    </>
  )
};

export default Game;
