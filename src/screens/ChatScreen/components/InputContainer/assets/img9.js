import React from "react";

const Img = ({ dark }) => {
  return (
    <img
      src={
        dark
          ? "https://statics.teams.cdn.office.net/evergreen-assets/apps/approvals_smallimage.png"
          : "https://statics.teams.cdn.office.net/evergreen-assets/apps/approvals_smallimage.png"
      }
      alt="img"
      style={{ width: 16, height: 16 }}
    />
  );
};

export default Img;
