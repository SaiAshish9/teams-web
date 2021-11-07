import React, { useRef, useEffect } from "react";
import {
  Container,
  Input,
  Label,
  VideoContainer,
  Tag,
  Button,
  ProfileImg,
  Header,
} from "./styles";

import { useHistory } from "react-router-dom";
import AvatarImg from "assets/images/navbar/avatar.png";

const NewMeetingContainer = () => {
  const inputRef = useRef();

  const history = useHistory();

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
      <Tag>Other join options</Tag>
    </Container>
  );
};

export default NewMeetingContainer;
