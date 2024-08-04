import { InputHTMLAttributes } from "react";
import styles from "./TaskCheckBox.module.css";

interface TaskCheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  taskId: number;
  value: string;
  onCrossOutTask: () => void;
}

export function TaskCheckBox({
  taskId,
  value,
  onCrossOutTask,
  checked,
  ...props
}: TaskCheckBoxProps) {
  function handleCrossOutTask() {
    onCrossOutTask();
  }

  return (
    <input
      type="checkbox"
      className={
        checked ? styles["taskCheck-checked"] : styles["taskCheck-not-checked"]
      }
      onClick={handleCrossOutTask}
      {...props}
    />
  );
}
