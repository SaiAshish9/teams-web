import React from "react";
import {
  Container,
  EmojiIcon,
  Label,
  EmojiIconImg,
  EmojiIconContainer,
  InputCont,
  StyledSearchIcon,
  ParentInputContainer,
  RedCont,
  Row,
} from "./styles";

import SmileIcon from "./assets/smile";
import Img2 from "./assets/img2";
import Img3 from "./assets/img3";
import Img4 from "./assets/img4";
import Img5 from "./assets/img5";
import Img6 from "./assets/img6";
import Img7 from "./assets/img7";
import Img8 from "./assets/img8";
import Img9 from "./assets/img9";

const data = [
  "https://statics.teams.cdn.office.net/evergreen-assets/personal-expressions/v1/assets/emoticons/smile/default/60_f.png?etag=v73",
  "https://statics.teams.cdn.office.net/evergreen-assets/personal-expressions/v1/assets/emoticons/laugh/default/60_f.png?etag=v15",
  "https://statics.teams.cdn.office.net/evergreen-assets/personal-expressions/v1/assets/emoticons/1f603_grinningfacewithbigeyes/default/60_f.png?etag=v3",
  "https://statics.teams.cdn.office.net/evergreen-assets/personal-expressions/v1/assets/emoticons/happyface/default/60_f.png?etag=v10",
  "https://statics.teams.cdn.office.net/evergreen-assets/personal-expressions/v1/assets/emoticons/happyeyes/default/60_f.png?etag=v7",
  "https://statics.teams.cdn.office.net/evergreen-assets/personal-expressions/v1/assets/emoticons/xd/default/60_f.png?etag=v17",
  "https://statics.teams.cdn.office.net/evergreen-assets/personal-expressions/v1/assets/emoticons/sweatgrinning/default/60_f.png?etag=v24",
  "https://statics.teams.cdn.office.net/evergreen-assets/personal-expressions/v1/assets/emoticons/rofl/default/60_f.png?etag=v11",
  "https://statics.teams.cdn.office.net/evergreen-assets/personal-expressions/v1/assets/emoticons/hysterical/default/60_f.png?etag=v18",
  "https://statics.teams.cdn.office.net/evergreen-assets/personal-expressions/v1/assets/emoticons/cwl/default/60_f.png?etag=v12",
  "https://statics.teams.cdn.office.net/evergreen-assets/personal-expressions/v1/assets/emoticons/giggle/default/60_f.png?etag=v16",
  "https://statics.teams.cdn.office.net/evergreen-assets/personal-expressions/v1/assets/emoticons/happy/default/60_f.png?etag=v11",
  "https://statics.teams.cdn.office.net/evergreen-assets/personal-expressions/v1/assets/emoticons/nod/default/60_f.png?etag=v9",
  "https://statics.teams.cdn.office.net/evergreen-assets/personal-expressions/v1/assets/emoticons/talk/default/60_f.png?etag=v11",
  "https://statics.teams.cdn.office.net/evergreen-assets/personal-expressions/v1/assets/emoticons/upsidedownface/default/60_f.png?etag=v6",
  "https://statics.teams.cdn.office.net/evergreen-assets/personal-expressions/v1/assets/emoticons/wink/default/60_f.png?etag=v9",
  "https://statics.teams.cdn.office.net/evergreen-assets/personal-expressions/v1/assets/emoticons/mmm/default/60_f.png?etag=v13",
  "https://statics.teams.cdn.office.net/evergreen-assets/personal-expressions/v1/assets/emoticons/blush/default/60_f.png?etag=v13",
  "https://statics.teams.cdn.office.net/evergreen-assets/personal-expressions/v1/assets/emoticons/smileeyes/default/60_f.png?etag=v8",
  "https://statics.teams.cdn.office.net/evergreen-assets/personal-expressions/v1/assets/emoticons/angel/default/60_f.png?etag=v8",
  "https://statics.teams.cdn.office.net/evergreen-assets/personal-expressions/v1/assets/emoticons/inlove/default/60_f.png?etag=v10",
  "https://statics.teams.cdn.office.net/evergreen-assets/personal-expressions/v1/assets/emoticons/hearteyes/default/60_f.png?etag=v20",
  "https://statics.teams.cdn.office.net/evergreen-assets/personal-expressions/v1/assets/emoticons/stareyes/default/60_f.png?etag=v21",
  "https://statics.teams.cdn.office.net/evergreen-assets/personal-expressions/v1/assets/emoticons/like/default/60_f.png?etag=v26",
  "https://statics.teams.cdn.office.net/evergreen-assets/personal-expressions/v1/assets/emoticons/highfive/default/60_f.png?etag=v12",
  "https://statics.teams.cdn.office.net/evergreen-assets/personal-expressions/v1/assets/emoticons/clap/default/60_f.png?etag=v19",
  "https://statics.teams.cdn.office.net/evergreen-assets/personal-expressions/v1/assets/emoticons/hi/default/60_f.png?etag=v20",
  "https://statics.teams.cdn.office.net/evergreen-assets/personal-expressions/v1/assets/emoticons/call/default/60_f.png?etag=v19",
  "https://statics.teams.cdn.office.net/evergreen-assets/personal-expressions/v1/assets/emoticons/idea/default/60_f.png?etag=v26",
  "https://statics.teams.cdn.office.net/evergreen-assets/personal-expressions/v1/assets/emoticons/headphones/default/60_f.png?etag=v9",
  "https://statics.teams.cdn.office.net/evergreen-assets/personal-expressions/v1/assets/emoticons/selfie/default/60_f.png?etag=v23",
  "https://statics.teams.cdn.office.net/evergreen-assets/personal-expressions/v1/assets/emoticons/fingerscrossed/default/60_f.png?etag=v25",
  "https://statics.teams.cdn.office.net/evergreen-assets/personal-expressions/v1/assets/emoticons/1f618_facethrowingakiss/default/60_f.png?etag=v5",
  "https://statics.teams.cdn.office.net/evergreen-assets/personal-expressions/v1/assets/emoticons/1f619_kissingfacewithsmilingeyes/default/60_f.png?etag=v3",
  "https://statics.teams.cdn.office.net/evergreen-assets/personal-expressions/v1/assets/emoticons/263a_smilingface/default/60_f.png?etag=v4",
  "https://statics.teams.cdn.office.net/evergreen-assets/personal-expressions/v1/assets/emoticons/1f61a_kissingfacewithclosedeyes/default/60_f.png?etag=v3",
  "https://statics.teams.cdn.office.net/evergreen-assets/personal-expressions/v1/assets/emoticons/tongueout/default/60_f.png?etag=v11",
  "https://statics.teams.cdn.office.net/evergreen-assets/personal-expressions/v1/assets/emoticons/1f61b_facewithtongue/default/60_f.png?etag=v3",
  "https://statics.teams.cdn.office.net/evergreen-assets/personal-expressions/v1/assets/emoticons/winktongueout/default/60_f.png?etag=v9",
  "https://statics.teams.cdn.office.net/evergreen-assets/personal-expressions/v1/assets/emoticons/1f92a_zanyface/default/60_f.png?etag=v3",
  "https://statics.teams.cdn.office.net/evergreen-assets/personal-expressions/v1/assets/emoticons/1f911_moneymouthface/default/60_f.png?etag=v3",
  "https://statics.teams.cdn.office.net/evergreen-assets/personal-expressions/v1/assets/emoticons/envy/default/60_f.png?etag=v15",
  "https://statics.teams.cdn.office.net/evergreen-assets/personal-expressions/v1/assets/emoticons/wonder/default/60_f.png?etag=v9",
  "https://statics.teams.cdn.office.net/evergreen-assets/personal-expressions/v1/assets/emoticons/waiting/default/60_f.png?etag=v11",
  "https://statics.teams.cdn.office.net/evergreen-assets/personal-expressions/v1/assets/emoticons/speechless/default/60_f.png?etag=v9",
  "https://statics.teams.cdn.office.net/evergreen-assets/personal-expressions/v1/assets/emoticons/expressionless/default/60_f.png?etag=v12",
  "https://statics.teams.cdn.office.net/evergreen-assets/personal-expressions/v1/assets/emoticons/blankface/default/60_f.png?etag=v8",
  "https://statics.teams.cdn.office.net/evergreen-assets/personal-expressions/v1/assets/emoticons/smirk/default/60_f.png?etag=v9",
  "https://statics.teams.cdn.office.net/evergreen-assets/personal-expressions/v1/assets/emoticons/shake/default/60_f.png?etag=v10",
  "https://statics.teams.cdn.office.net/evergreen-assets/personal-expressions/v1/assets/emoticons/unamused/default/60_f.png?etag=v16",
  "https://statics.teams.cdn.office.net/evergreen-assets/personal-expressions/v1/assets/emoticons/dull/default/60_f.png?etag=v11",
  "https://statics.teams.cdn.office.net/evergreen-assets/personal-expressions/v1/assets/emoticons/emo/default/60_f.png?etag=v21",
  "https://statics.teams.cdn.office.net/evergreen-assets/personal-expressions/v1/assets/emoticons/think/default/60_f.png?etag=v11",
  "https://statics.teams.cdn.office.net/evergreen-assets/personal-expressions/v1/assets/emoticons/wasntme/default/60_f.png?etag=v10",
  "https://statics.teams.cdn.office.net/evergreen-assets/personal-expressions/v1/assets/emoticons/1f925_lyingface/default/60_f.png?etag=v3",
  "https://statics.teams.cdn.office.net/evergreen-assets/personal-expressions/v1/assets/emoticons/pensive/default/60_f.png?etag=v16",
  "https://statics.teams.cdn.office.net/evergreen-assets/personal-expressions/v1/assets/emoticons/relieved/default/60_f.png?etag=v13",
  "https://statics.teams.cdn.office.net/evergreen-assets/personal-expressions/v1/assets/emoticons/sleepy/default/60_f.png?etag=v15",
  "https://statics.teams.cdn.office.net/evergreen-assets/personal-expressions/v1/assets/emoticons/1f637_facewithmedicalmask/default/60_f.png?etag=v3",
  "https://statics.teams.cdn.office.net/evergreen-assets/personal-expressions/v1/assets/emoticons/ill/default/60_f.png?etag=v17",
  "https://statics.teams.cdn.office.net/evergreen-assets/personal-expressions/v1/assets/emoticons/1f915_facewithheadbandage/default/60_f.png?etag=v3",
  "https://statics.teams.cdn.office.net/evergreen-assets/personal-expressions/v1/assets/emoticons/1f922_nauseatedface/default/60_f.png?etag=v3",
  "https://statics.teams.cdn.office.net/evergreen-assets/personal-expressions/v1/assets/emoticons/puke/default/60_f.png?etag=v15",
  "https://statics.teams.cdn.office.net/evergreen-assets/personal-expressions/v1/assets/emoticons/1f927_sneezingface/default/60_f.png?etag=v4",
  "https://statics.teams.cdn.office.net/evergreen-assets/personal-expressions/v1/assets/emoticons/smile/default/60_f.png?etag=v73",
  "https://statics.teams.cdn.office.net/evergreen-assets/personal-expressions/v1/assets/emoticons/laugh/default/60_f.png?etag=v15",
  "https://statics.teams.cdn.office.net/evergreen-assets/personal-expressions/v1/assets/emoticons/1f603_grinningfacewithbigeyes/default/60_f.png?etag=v3",
  "https://statics.teams.cdn.office.net/evergreen-assets/personal-expressions/v1/assets/emoticons/happyface/default/60_f.png?etag=v10",
  "https://statics.teams.cdn.office.net/evergreen-assets/personal-expressions/v1/assets/emoticons/happyeyes/default/60_f.png?etag=v7",
  "https://statics.teams.cdn.office.net/evergreen-assets/personal-expressions/v1/assets/emoticons/xd/default/60_f.png?etag=v17",
  "https://statics.teams.cdn.office.net/evergreen-assets/personal-expressions/v1/assets/emoticons/sweatgrinning/default/60_f.png?etag=v24",
  "https://statics.teams.cdn.office.net/evergreen-assets/personal-expressions/v1/assets/emoticons/rofl/default/60_f.png?etag=v11",
  "https://statics.teams.cdn.office.net/evergreen-assets/personal-expressions/v1/assets/emoticons/hysterical/default/60_f.png?etag=v18",
  "https://statics.teams.cdn.office.net/evergreen-assets/personal-expressions/v1/assets/emoticons/cwl/default/60_f.png?etag=v12",
  "https://statics.teams.cdn.office.net/evergreen-assets/personal-expressions/v1/assets/emoticons/giggle/default/60_f.png?etag=v16",
  "https://statics.teams.cdn.office.net/evergreen-assets/personal-expressions/v1/assets/emoticons/happy/default/60_f.png?etag=v11",
  "https://statics.teams.cdn.office.net/evergreen-assets/personal-expressions/v1/assets/emoticons/nod/default/60_f.png?etag=v9",
  "https://statics.teams.cdn.office.net/evergreen-assets/personal-expressions/v1/assets/emoticons/talk/default/60_f.png?etag=v11",
  "https://statics.teams.cdn.office.net/evergreen-assets/personal-expressions/v1/assets/emoticons/upsidedownface/default/60_f.png?etag=v6",
  "https://statics.teams.cdn.office.net/evergreen-assets/personal-expressions/v1/assets/emoticons/wink/default/60_f.png?etag=v9",
];

const Emojis = () => {
  return (
    <Container>
      <ParentInputContainer>
        <InputCont placeholder="Find something fun" />
        <StyledSearchIcon />
      </ParentInputContainer>

      <Label>Smilies</Label>
      <EmojiIconContainer>
        {data.map((i, k) => (
          <EmojiIcon key={k}>
            <EmojiIconImg src={i} alt="img" />
          </EmojiIcon>
        ))}
      </EmojiIconContainer>
      <Row>
        {[SmileIcon, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9].map(
          (Component, k) => (
            <RedCont key={k}>
              <Component />
            </RedCont>
          )
        )}
      </Row>
    </Container>
  );
};

export default Emojis;
