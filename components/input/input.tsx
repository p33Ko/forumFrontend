import React from "react";
import styles from "./input.module.css";

type InputType = {
  placeholder: string;
  value: any;
  onChange: any;
  type?: string;
};

const Input: React.FC<InputType> = ({ placeholder, value, onChange, type }) => {
  return (
    <input
      value={value}
      placeholder={placeholder}
      className={styles.main}
      onChange={(event) => onChange(event.target.value)}
      type={type}
    />
  );
};

export default Input;
