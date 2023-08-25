import React from "react";
import classes from "./Button.module.scss";

export default function Button({ children, type, className, onClickHandler }) {
  return (
    <button type={type} className={className} onClick={onClickHandler}>
      {children}
    </button>
  );
}
