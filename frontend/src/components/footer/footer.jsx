import React from "react";
import styles from "./footer.module.css";

export const Footer = ({ extraClass = "" }) => {
  return (
    <footer className={`${styles.footer} ${extraClass}`}>
      <p
        className={`text text_type_hard-20 text_color_input ${styles.text}`}
      >{`Кот в сети - ${new Date().getFullYear()}`}</p>
    </footer>
  );
};
