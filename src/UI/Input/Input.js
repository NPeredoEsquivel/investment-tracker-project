import React from "react";
import classes from "./Input.module.scss";

export default function Input({ id, type, name, value, onChangeHandler }) {
  return (
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={onChangeHandler}
    />
  );
}
