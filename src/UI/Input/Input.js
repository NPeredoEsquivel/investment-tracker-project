import React from "react";
import classes from "./Input.module.scss";

export default function Input({ id, type }) {
  return <input type={type} id={id} />;
}
