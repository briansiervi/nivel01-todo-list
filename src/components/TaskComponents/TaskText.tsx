import { LabelHTMLAttributes } from "react";
import styles from "./TaskText.module.css";

interface TaskTextProps extends LabelHTMLAttributes<HTMLLabelElement> {
  description: string;
}

export function TaskText(props: TaskTextProps) {
  return (
    <label className={styles.text} {...props}>
      {props.description}
    </label>
  );
}
