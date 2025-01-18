"use client";

import { useEffect, useState, useRef } from "react";
import styles from "./Input.module.css";

export default function Input({ command, onSubmit }) {
  const [_command, setCommand] = useState(command ? command : "");

  const handleSubmit = (e) => {
    e.preventDefault();
    setCommand("");
    return onSubmit(_command);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)} className={styles.form}>
      <label htmlFor="command" className={styles.label}>
        <span style={{ color: "var(--primary)", whiteSpace: "pre" }}>$</span>
        <span style={{ color: "var(--primary)", whiteSpace: "pre" }}> MaroonHacks@UChicago</span>
        <span style={{ color: "var(--secondary)", whiteSpace: "pre" }}> ~ %</span>
      </label>

      <input
        type="text"
        className={styles.input}
        value={_command}
        onChange={(e) => setCommand(e.target.value)}
        disabled={command ? true : false}
        ref={(input) => input && !command && input.focus()}
        autoFocus={command === ""}
      />
    </form>
  );
}
