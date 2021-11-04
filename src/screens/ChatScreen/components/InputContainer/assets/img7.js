import React from "react";

const Img = ({ dark }) => {
  return (
    <img
      src={
        dark
          ? "https://statics.teams.cdn.office.net/evergreen-assets/apps/extensioncatalog_tabstreamname_smallimage.png?v=1.1"
          : "https://statics.teams.cdn.office.net/evergreen-assets/apps/extensioncatalog_tabstreamname_smallimage.png?v=1.1"
      }
      alt="img"
      style={{ width: 16, height: 16 }}
    />
  );
};

export default Img;
