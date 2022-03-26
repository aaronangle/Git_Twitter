import React, { useState } from "react";
import style from "./style.module.css";

export const Input = ({ type = "text", placeholder = "", maxLength = "", validation = "" }) => {
  const [input, setInput] = useState("");
  const [inputError, setInputError] = useState("");

  function validateInput() {
    console.log(input.match(/\S+@\S+\.\S+/));
  }

  return (
    <>
      <input
        onChange={(e) => setInput(e.target.value)}
        className={style.input}
        type={type}
        onBlur={() => validateInput()}
        placeholder={placeholder}
        maxLength={maxLength}
        pattern="[a-zA-Z0-9]+"
      />
      {inputError && <span>{inputError}</span>}
    </>
  );
};
