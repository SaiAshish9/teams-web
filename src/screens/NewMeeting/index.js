import React, { useRef, useEffect } from "react";
import { Container, Input, Label, VideoContainer, Tag, Button } from "./styles";

const NewMeetingContainer = () => {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <Container>
      <Label>Choose your audio and video settings for</Label>
      <Input ref={inputRef} sanitized defaultValue={`Meeting in "General" `} />
      <VideoContainer>
          <Button>Join now</Button>
      </VideoContainer>
      <Tag>Other join options</Tag>
    </Container>
  );
};

export default NewMeetingContainer;
