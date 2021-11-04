import React from "react";

const Img = ({ color, fillColor = "none" }) => {
  return (
    <svg
      viewBox="-6 -6 32 32"
      height="32px"
      width="32px"
      role="presentation"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      class="app-svg icons-more app-bar-extra-icons-fill-colors"
    >
      <g class="icons-default-fill">
        <g fill={fillColor} class="icons-unfilled">
          <path d="M6.25 10C6.25 10.6904 5.69036 11.25 5 11.25C4.30964 11.25 3.75 10.6904 3.75 10C3.75 9.30964 4.30964 8.75 5 8.75C5.69036 8.75 6.25 9.30964 6.25 10Z"></path>
          <path d="M11.25 10C11.25 10.6904 10.6904 11.25 10 11.25C9.30964 11.25 8.75 10.6904 8.75 10C8.75 9.30964 9.30964 8.75 10 8.75C10.6904 8.75 11.25 9.30964 11.25 10Z"></path>
          <path d="M15 11.25C15.6904 11.25 16.25 10.6904 16.25 10C16.25 9.30964 15.6904 8.75 15 8.75C14.3096 8.75 13.75 9.30964 13.75 10C13.75 10.6904 14.3096 11.25 15 11.25Z"></path>
        </g>
        <g fill={color} class="icons-filled">
          <path d="M6.75 10C6.75 10.9665 5.9665 11.75 5 11.75C4.0335 11.75 3.25 10.9665 3.25 10C3.25 9.0335 4.0335 8.25 5 8.25C5.9665 8.25 6.75 9.0335 6.75 10Z"></path>
          <path d="M11.75 10C11.75 10.9665 10.9665 11.75 10 11.75C9.0335 11.75 8.25 10.9665 8.25 10C8.25 9.0335 9.0335 8.25 10 8.25C10.9665 8.25 11.75 9.0335 11.75 10Z"></path>
          <path d="M15 11.75C15.9665 11.75 16.75 10.9665 16.75 10C16.75 9.0335 15.9665 8.25 15 8.25C14.0335 8.25 13.25 9.0335 13.25 10C13.25 10.9665 14.0335 11.75 15 11.75Z"></path>
        </g>
      </g>
    </svg>
  );
};

export default Img;
