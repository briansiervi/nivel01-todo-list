import { InputHTMLAttributes } from "react";
import styles from "./TaskCheckBox.module.css";

interface TaskCheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  value: string;
  onCrossOutTask: () => void;
}

export function TaskCheckBox({
  id,
  value,
  onCrossOutTask,
  ...props
}: TaskCheckBoxProps) {
  function handleCrossOutTask() {
    onCrossOutTask();
  }

  return (
    <input
      type="checkbox"
      className={styles.taskCheck}
      onClick={handleCrossOutTask}
      {...props}
    />
  );
}
