import React from "react";

export const Button = ({
  cls,
  label,
  handleOnClick,
  handleOnMouseDown,
  btnStyle,
  isMouseDown,
}) => {
  return (
    <div
      style={isMouseDown === label ? btnStyle : null}
      onClick={() => handleOnClick(label)}
      onMouseDown={() => handleOnMouseDown(label)}
      className={"btn " + cls}
    >
      {label}
    </div>
  );
};
