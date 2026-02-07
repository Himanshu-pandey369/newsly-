import React from "react";
import preview from "./preview.gif";
const Spinner = ({ isDark }) => {
  return (
    <div className="flex justify-center py-70 ">
      <img className={isDark ? "invert h-6" : "h-6"} src={preview} alt="preview" />
    </div>
  );
};

export default Spinner;
