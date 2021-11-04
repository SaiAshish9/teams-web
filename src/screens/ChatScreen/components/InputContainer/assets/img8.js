import React from "react";

const Img = ({ dark }) => {
  return (
    <img
      src={
        dark
          ? "https://statics.teams.cdn.office.net/evergreen-assets/apps/d832a33f-28c2-4969-8ad0-4fee681dc5b4_smallImage.png?v=1.0.20200917"
          : "https://statics.teams.cdn.office.net/evergreen-assets/apps/d832a33f-28c2-4969-8ad0-4fee681dc5b4_smallImage.png?v=1.0.20200917"
      }
      alt="img"
      style={{ width: 16, height: 16 }}
    />
  );
};

export default Img;
