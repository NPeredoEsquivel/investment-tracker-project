import React from "react";
import classes from "./Label.module.scss";

export default function Label({ children, htmlFor }) {
  return <label htmlFor={htmlFor}>{children}</label>;
}
