import { LabelHTMLAttributes } from "react";
import styles from "./TaskLabel.module.css";

interface TaskLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  description: string;
}

export function TaskLabel(props: TaskLabelProps) {
  return (
    <label className={styles.text} {...props}>
      {props.description}
    </label>
  );
}
