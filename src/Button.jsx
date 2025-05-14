import React from "react";

export const Button = ({ handleOnClick, cls, label }) => {
  return (
    <div onClick={() => handleOnClick(label)} className={"btn " + cls}>
      {label}
    </div>
  );
};
