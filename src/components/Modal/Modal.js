import React from "react";
import styles from "./style.module.css";

export const Modal = ({ children }) => {
  return <div className={styles.modal}>{children}</div>;
};
