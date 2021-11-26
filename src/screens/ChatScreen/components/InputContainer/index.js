import React, { useState, useRef } from "react";

import {
  Container,
  EmojiCont,
  Input,
  Image,
  Row,
  Img,
  EmojiIcon,
} from "./styles";

import Img1 from "./assets/img1";
import Img2 from "./assets/img2";
import Img3 from "./assets/img3";
import Img4 from "./assets/img4";
import Img5 from "./assets/img5";
import Img6 from "./assets/img6";
import Img7 from "./assets/img7";
import Img8 from "./assets/img8";
import Img9 from "./assets/img9";
import Img10 from "./assets/img10";
import Img11 from "./assets/img11";
import Img12 from "./assets/img12";
import { Theme, COLORS } from "constants/index";
import { useStore } from "store";
import OptionsImg from "assets/images/options.png";
import Emojis from "../Emojis";

const data = [
  Img1,
  Img2,
  Img3,
  Img4,
  Img5,
  Img6,
  Img7,
  Img8,
  Img9,
  Img10,
  Img11,
  Img12,
];

const { bigStone } = COLORS;

function setEndOfContenteditable(el) {
  // var range, selection;
  // if (document.createRange) {
  //   //Firefox, Chrome, Opera, Safari, IE 9+
  //   range = document.createRange(); //Create a range (a range is a like the selection but invisible)
  //   range.selectNodeContents(contentEditableElement); //Select the entire contents of the element with the range
  //   range.collapse(false); //collapse the range to the end point. false means collapse to end rather than the start
  //   selection = window.getSelection(); //get the selection object (allows you to change selection)
  //   selection.removeAllRanges(); //remove any selections already made
  //   selection.addRange(range); //make the range you have just created the visible selection
  // } else if (document.selection) {
  //   //IE 8 and lower
  //   range = document.body.createTextRange(); //Create a range (a range is a like the selection but invisible)
  //   range.moveToElementText(contentEditableElement); //Select the entire contents of the element with the range
  //   range.collapse(false); //collapse the range to the end point. false means collapse to end rather than the start
  //   range.select(); //Select the range (make it the visible selection
  // }
  document.execCommand("selectAll", false, null);
  // // collapse selection to the end
  document.getSelection().collapseToEnd();
  // let sel = window.getSelection();
  // sel.selectAllChildren(el);
  // sel.collapseToEnd();
}

const InputContainer = ({ setInnerHtml }) => {
  const [hovered, setHovered] = useState(-1);

  const [clicked, setClicked] = useState(false);

  const [focused, setFocused] = useState(false);

  const [selectedEmoji, setSelectedEmoji] = useState([]);

  const inputRef = useRef();

  function handleClick() {
    setEndOfContenteditable(inputRef.current);
    if (inputRef.current.textContent === "")
      inputRef.current.textContent += " ";
    inputRef.current?.focus();
  }

  const {
    state: { theme },
  } = useStore();

  return (
    <Container>
      {/* var xmlString = "<div id='foo'><a href='#'>Link</a><span></span></div>";
var doc = new DOMParser().parseFromString(xmlString, "text/xml");
console.log(doc.firstChild.innerHTML); // => <a href="#">Link...
console.log(doc.firstChild.firstChild.innerHTML); */}

      <Input
        ref={inputRef}
        contentEditable="true"
        aria-multiline="true"
        role="textbox"
        data-placeholder="Type a new message"
        onFocus={() => {
          setFocused(true);
          setEndOfContenteditable(inputRef.current);
        }}
        onBlur={() => {
          setFocused(false);
          setEndOfContenteditable(inputRef.current);
        }}
        onInput={() => {
          setEndOfContenteditable(inputRef.current);
        }}
        onKeyUp={(e) => {
          setEndOfContenteditable(inputRef.current);
          if (e.code === "ControlLeft") {
            setClicked((c) => !c);
          } else if (e.code === "Enter") {
            setInnerHtml(inputRef.current.innerHTML);
            inputRef.current.textContent = "";
          }
        }}
      >
        <>
          {selectedEmoji.map((i, k) => (
            <EmojiIcon
              style={{ display: "inline" }}
              key={k}
              src={i}
              alt="img"
            />
          ))}
        </>
      </Input>
      <EmojiCont>
        <Row>
          {data.slice(0, data.length - 1).map(
            (Component, k) =>
              !(theme === Theme.light && k > 5) && (
                <Image
                  onMouseEnter={() => setHovered(k)}
                  onMouseLeave={() => setHovered(-1)}
                  key={k}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    if (k === 3) {
                      if (clicked) setClicked(false);
                      else setClicked(true);
                    } else if (clicked && k !== 3) setClicked(false);
                  }}
                >
                  {theme === Theme.highContrast && (
                    <Component
                      color={
                        hovered === k
                          ? "#000"
                          : clicked && k === 3
                          ? "yellow"
                          : "#fff"
                      }
                    />
                  )}
                  {theme === Theme.dark && (
                    <Component
                      color={
                        hovered === k
                          ? "none"
                          : clicked && k === 3
                          ? "#6164a6"
                          : "#eee"
                      }
                      fillColor={hovered === k ? bigStone : "none"}
                    />
                  )}
                  {theme === Theme.light && k < 6 && (
                    <Component
                      color={
                        hovered === k
                          ? "none"
                          : clicked && k === 3
                          ? "#6164a6"
                          : "#000"
                      }
                      fillColor={hovered === k ? bigStone : "none"}
                      dark={k > 6}
                    />
                  )}
                </Image>
              )
          )}
          {theme === Theme.light && <Img src={OptionsImg} alt="img" />}
        </Row>
        <Image
          onMouseEnter={() => setHovered(data.length - 1)}
          onMouseLeave={() => setHovered(-1)}
          last={1}
        >
          {theme === Theme.highContrast && (
            <Img12
              color={hovered === data.length - 1 ? "#000" : "#fff"}
              fillColor={hovered === data.length - 1 ? "#000" : "#none"}
            />
          )}
          {theme === Theme.dark && (
            <Img12
              color={hovered === data.length - 1 ? "none" : "#d1d1d1"}
              fillColor={hovered === data.length - 1 ? bigStone : "none"}
            />
          )}
          {theme === Theme.light && (
            <Img12
              color={hovered === data.length - 1 ? "none" : "#000"}
              fillColor={hovered === data.length - 1 ? bigStone : "none"}
            />
          )}
        </Image>
      </EmojiCont>
      {clicked && (
        <Emojis
          selectedEmoji={selectedEmoji}
          setSelectedEmoji={setSelectedEmoji}
          setClicked={setClicked}
          onClick={handleClick}
        />
      )}
    </Container>
  );
};

export default InputContainer;
