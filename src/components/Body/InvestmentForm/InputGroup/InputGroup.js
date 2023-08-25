import React from "react";
import classes from "./InputGroup.module.scss";

export default function InputGroup({ children, className = "" }) {
  return <p className={className}>{children}</p>;
}
