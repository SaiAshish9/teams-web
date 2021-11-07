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
} from "./styles";

import { useHistory } from "react-router-dom";
import AvatarImg from "assets/images/navbar/avatar.png";

import { FiPhone } from "react-icons/fi";
import { RiVolumeMuteLine, RiVolumeMuteFill } from "react-icons/ri";

const NewMeetingContainer = () => {
  const inputRef = useRef();

  const history = useHistory();

  const [audioHovered, setAudioHovered] = useState(false);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <Container>
      <Header>
        <Button style={{ margin: 0 }} onClick={() => history.goBack()}>
          Close
        </Button>
      </Header>
      <Label>Choose your audio and video settings for</Label>
      <Input ref={inputRef} sanitized defaultValue={`Meeting in "General" `} />
      <VideoContainer>
        <ProfileImg src={AvatarImg} alt="img" />
        <Button onClick={() => history.push("/call")}>Join now</Button>
      </VideoContainer>
      <Footer>
        <Tag>Other join options</Tag>
        <FooterCont>
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
          <FooterOption>
            <FiPhone style={{ marginRight: "0.5rem" }} />
            Phone audio
          </FooterOption>
        </FooterCont>
      </Footer>
    </Container>
  );
};

export default NewMeetingContainer;
