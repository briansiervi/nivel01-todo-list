import { LabelHTMLAttributes } from "react";
import styles from "./TaskLabel.module.css";

interface TaskLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  description: string;
  onCrossOutTask: () => void;
}

export function TaskLabel({
  description,
  onCrossOutTask,
  ...props
}: TaskLabelProps) {
  return (
    <label className={styles.text} onClick={onCrossOutTask} {...props}>
      {description}
    </label>
  );
}
