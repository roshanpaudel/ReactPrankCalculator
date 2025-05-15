import React from "react";
export const Button = ({
  cls,
  label,
  handleOnClick,
  handleOnMouseDown,
  isMouseDown,
}) => {
  return (
    <div
      style={
        isMouseDown === label
          ? {
              transform: isMouseDown ? "scale(0.9)" : "scale(1)",
              transition: "transform 0.2s",
            }
          : null
      }
      onClick={() => handleOnClick(label)}
      onMouseDown={() => handleOnMouseDown(label)}
      className={"btn " + cls}
    >
      {label}
    </div>
  );
};
