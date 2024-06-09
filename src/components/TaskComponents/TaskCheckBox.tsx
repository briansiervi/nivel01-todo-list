import { InputHTMLAttributes } from "react";
import styles from "./TaskCheckBox.module.css";

export function TaskCheckBox(props: InputHTMLAttributes<HTMLInputElement>) {
  return <input type="checkbox" className={styles.taskCheck} {...props} />;
}
