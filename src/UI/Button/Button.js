import React from "react";
import classes from "./Button.module.scss";

export default function Button({ children, type, className }) {
  return (
    <button type={type} className={className}>
      {children}
    </button>
  );
}
