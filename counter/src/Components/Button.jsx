import React, { Children } from "react";

export const Button = ({
  children,
  variant,
  colorScheme,
  onClick,
}) => {
  return (
    <button
      className={`btn ${colorScheme || "red"} ${variant || "ghost"}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
