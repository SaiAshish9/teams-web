import React from "react";

const VideoImg = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-6 -6 32 32"
      width="28px"
      className="app-svg icons-call-meetup-filled"
      focusable="false"
      role="presentation"
    >
      <path
        fill={color}
        className="icons-default-fill"
        d="M13 6.5C13 5.11929 11.8807 4 10.5 4H4.5C3.11929 4 2 5.11929 2 6.5V13.5C2 14.8807 3.11929 16 4.5 16H10.5C11.8807 16 13 14.8807 13 13.5V6.5ZM14 7.93082V12.0815L16.7642 14.4319C17.2512 14.8461 18 14.4999 18 13.8606V6.19315C18 5.55685 17.2575 5.20962 16.7692 5.61756L14 7.93082Z"
      ></path>
    </svg>
  );
};

export default VideoImg;
