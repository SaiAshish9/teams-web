import React, { useRef, useEffect, useState } from "react";
import {
  Container,
  Input,
  Label,
  VideoContainer,
  Tag,
  Button,
  ProfileImg,
  Header,
  FooterCont,
  Footer,
  FooterOption,
  SettingsCont,
  SettingsImg,
  Options,
  StyledSwitch,
  StyledTooltip,
} from "./styles";

import { useHistory } from "react-router-dom";
import AvatarImg from "assets/images/navbar/avatar.png";

import { FiPhone } from "react-icons/fi";
import { FaMicrophone, FaMicrophoneSlash } from "react-icons/fa";
import { RiVolumeMuteLine, RiVolumeMuteFill } from "react-icons/ri";
import { IoIosVideocam } from "react-icons/io";
import { IoVideocamOffOutline } from "react-icons/io5";
import SettingsIcon from "assets/images/navbar/settings.svg";
import SettingsIconHC from "assets/images/navbar/settingsHC.svg";
import SettingsIconBlack from "assets/images/navbar/settingsBlack.svg";
import SettingsIconBlue from "assets/images/navbar/settingsBlue.svg";
import SettingsIconWhite from "assets/images/navbar/settingsWhite.svg";

import { useStore } from "store";
import { Theme } from "constants/index";
import { Helmet } from "react-helmet";

const NewMeetingContainer = () => {
  const inputRef = useRef();

  const history = useHistory();

  const [audioHovered, setAudioHovered] = useState(true);
  const [videoChecked, setVideoChacked] = useState(false);
  const [audioChecked, setAudioChacked] = useState(true);

  const [settingsHovered, setSettingsHovered] = useState(false);

  const {
    state: { theme },
  } = useStore();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <Container>
      <Helmet>
        <title>Meeting | Microsoft Teams</title>
      </Helmet>
      <Header>
        <Button style={{ margin: 0 }} onClick={() => history.goBack()}>
          Close
        </Button>
      </Header>
      <Label>Choose your audio and video settings for</Label>
      <Input ref={inputRef} sanitized defaultValue={`Meeting in "General" `} />
      <VideoContainer>
        <ProfileImg src={AvatarImg} alt="img" />
        <Button
          selected={+(theme === Theme.dark)}
          onClick={() => history.push("/call")}
        >
          Join now
        </Button>
        <Options>
          <SettingsCont checked={+videoChecked}>
            {videoChecked ? (
              <IoIosVideocam size={18} style={{ marginRight: "0.5rem" }} />
            ) : (
              <IoVideocamOffOutline
                size={18}
                style={{ marginRight: "0.5rem" }}
              />
            )}{" "}
            <StyledSwitch
              checked={videoChecked}
              onChange={() => setVideoChacked((c) => !c)}
            />
          </SettingsCont>
          <SettingsCont checked={+audioChecked}>
            {audioChecked ? (
              <FaMicrophone size={15} style={{ marginRight: "0.5rem" }} />
            ) : (
              <FaMicrophoneSlash size={15} style={{ marginRight: "0.5rem" }} />
            )}
            <StyledSwitch
              checked={audioChecked}
              onChange={() => setAudioChacked((c) => !c)}
            />
          </SettingsCont>
          <SettingsCont
            settings={1}
            onMouseEnter={() => setSettingsHovered(true)}
            onMouseLeave={() => setSettingsHovered(false)}
          >
            <SettingsImg
              src={
                theme === Theme.highContrast
                  ? settingsHovered
                    ? SettingsIconBlack
                    : SettingsIcon
                  : theme === Theme.dark
                  ? settingsHovered
                    ? SettingsIconWhite
                    : SettingsIcon
                  : SettingsIcon
              }
              alt="img"
            />
            Macbook Pro
          </SettingsCont>
        </Options>
      </VideoContainer>
      <Footer>
        <Tag>Other join options</Tag>
        <FooterCont>
          <StyledTooltip
            placement="top"
            title="Prevent echo when there's already an active mic and speaker in the room."
          >
            <FooterOption
              onMouseEnter={() => setAudioHovered(true)}
              onMouseLeave={() => setAudioHovered(false)}
              first={1}
            >
              {audioHovered ? (
                <RiVolumeMuteFill size={18} style={{ marginRight: "0.5rem" }} />
              ) : (
                <RiVolumeMuteLine size={18} style={{ marginRight: "0.5rem" }} />
              )}
              Audio off
            </FooterOption>
          </StyledTooltip>

          <StyledTooltip
            placement="top"
            title="We are checking for dial-in information..."
          >
            <FooterOption>
              <FiPhone style={{ marginRight: "0.5rem" }} />
              Phone audio
            </FooterOption>
          </StyledTooltip>
        </FooterCont>
      </Footer>
    </Container>
  );
};

export default NewMeetingContainer;
