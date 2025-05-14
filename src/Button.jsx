import React from "react";

export const Button = ({ cls, label, handleOnClick }) => {
  return (
    <div onClick={() => handleOnClick(label)} className={"btn " + cls}>
      {label}
    </div>
  );
};
